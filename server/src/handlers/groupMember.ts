import prisma from "../db";

// get all group members by conversation Id
export const getAllGroupMembers = async (req, res) => {
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: req.body.conversationId,
    },
    include: {
      groupMembers: true,
    },
  });

  res.status(200);
  res.json({ data: conversation.groupMembers });
};
