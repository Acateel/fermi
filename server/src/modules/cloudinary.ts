import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryOption = {
  transformation: {
    width: 400,
    height: 400,
    gravity: "auto",
    crop: "fill",
  },
};

const upload = async (file) => {
  const image = await cloudinary.uploader.upload(
    file,
    cloudinaryOption,
    (result) => result
  );
  return image;
};

export default upload;
