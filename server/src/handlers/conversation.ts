import prisma from "../db";

// Get all conversations
export const getAllConversations = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      groupMembers: true,
    },
  });

  const convId = await user.groupMembers.map((member) => member.conversationId);

  const conversation = await prisma.conversation.findMany({
    where: {
      id: { in: convId },
    },
  });

  res.status(200);
  res.json({ data: conversation });
};

// Get one conversation
export const getConversation = async (req, res) => {
  const id = req.params.id;

  const conversation = await prisma.conversation.findUnique({
    where: {
      id,
    },
  });

  res.status(200);
  res.json({ data: conversation });
};

// Create new conversation
export const createConversation = async (req, res) => {
  const conversation = await prisma.conversation.create({
    data: {
      name: req.body.name,
    },
  });

  const groupmember = await prisma.groupMember.create({
    data: {
      userId: req.user.id,
      conversationId: conversation.id,
    },
  });

  res.status(200);
  res.json({ data: conversation });
};

// Undate conversation
export const updateConversation = async (req, res) => {
  const id = req.params.id;
  const conversation = await prisma.conversation.findUnique({
    where: {
      id,
    },
    include: {
      groupMembers: true,
    },
  });

  const isInConversation = await conversation.groupMembers.find(
    (member) => member.userId === req.user.id
  );

  if (isInConversation) {
    const undateConv = await prisma.conversation.update({
      where: {
        id,
      },
      data: {
        name: req.body.name,
      },
    });
    res.status(200);
    res.json({ data: undateConv });
  } else {
    res.status(401);
    res.json({ data: "You did not in conversation" });
  }
};

// delete conversation
export const deleteConversation = async (req, res) => {
  const id = req.params.id;
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: id,
    },
    include: {
      groupMembers: true,
    },
  });

  const isInConversation = await conversation.groupMembers.find(
    (member) => member.userId === req.user.id
  );

  if (isInConversation) {
    await prisma.message.deleteMany({
      where: {
        conversationId: id,
      },
    });
    await prisma.groupMember.deleteMany({
      where: {
        conversationId: id,
      },
    });
    const undateConv = await prisma.conversation.deleteMany({
      where: {
        id: id,
      },
    });
    res.status(200);
    res.json({ data: undateConv });
  } else {
    res.status(401);
    res.json({ data: "You did not in conversation" });
  }
};
