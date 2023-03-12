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

// create group member
// later add check if adding user in converation was
export const createGroupMember = async (req, res) => {
  const groupMember = await prisma.groupMember.create({
    data: {
      userId: req.body.userId,
      conversationId: req.body.conversationId,
    },
  });

  res.status(200);
  res.json({ data: groupMember });
};
