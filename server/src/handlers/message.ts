import prisma from "../db";

//get all in conversation
export const getMessages = async (req, res) => {
  const id = req.params.id;
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: id,
    },
    include: {
      messages: true,
    },
  });

  res.status(200);
  res.json({ data: conversation.messages });
};

// create message
export const createMessage = async (req, res) => {
  const message = await prisma.message.create({
    data: {
      text: req.body.text,
      conversationId: req.body.conversationId,
      senderId: req.user.id,
    },
  });

  res.status(200);
  res.json({ data: message });
};
