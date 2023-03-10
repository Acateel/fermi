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
