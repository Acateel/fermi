import prisma from "../db";
import upload from "../modules/cloudinary";
import { excludePassword } from "./user";

// check image
export const checkImage = async (req, res, next) => {
  if (!req.files) return res.status(401).send("please upload an image");

  const { image } = req.files;

  // check image type
  const fileTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!fileTypes.includes(image.mimetype))
    return res.status(401).send("Image formats supported: JPG, PNG, JPEG");

  // chekc image size (image.size in bytes)
  const imageSize = 4; // MB
  if (image.size / 1024 / 1024 > imageSize)
    return res
      .status(401)
      .send(`Image size should be less than ${imageSize}kb`);

  next();
};

// upload user image
export const uploadUserImage = async (req, res) => {
  const { image } = req.files;
  const cloudFile = await upload(image.tempFilePath);

  const updatedUser = await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      image: cloudFile.url,
    },
  });

  res.status(200).json({ data: excludePassword(updatedUser) });
};

// upload conversation image
export const uploadConversationImage = async (req, res) => {
  const { image } = req.files;
  const cloudFile = await upload(image.tempFilePath);

  const updatedConversation = await prisma.conversation.update({
    where: {
      id: req.body.conversationId,
    },
    data: {
      image: cloudFile.url,
    },
  });

  res.status(200).json({ data: updatedConversation });
};
