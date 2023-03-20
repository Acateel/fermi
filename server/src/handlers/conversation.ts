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
};

// delete conversation
export const deleteConversation = async (req, res) => {
  const id = req.params.id;
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
};

// check user in conversation return true or false
const checkUserInConversation = async (conversationId, userId) => {
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
    include: {
      groupMembers: true,
    },
  });

  const isInConversation = await conversation.groupMembers.find(
    (member) => member.userId === userId
  );

  return isInConversation;
};

// check if user in conversation for update and delete
export const checkUserInConversationByParams = async (req, res, next) => {
  const id = req.params.id;

  const isInConversation = await checkUserInConversation(id, req.user.id);

  if (isInConversation) {
    next();
  } else {
    res.status(401);
    res.json({ data: "You did not in conversation" });
  }
};

// check if use in conversation for create message
export const checkUserInConversationByBody = async (req, res, next) => {
  const isInConversation = await checkUserInConversation(
    req.body.conversationId,
    req.user.id
  );

  if (isInConversation) {
    next();
  } else {
    res.status(401);
    res.json({ data: "You did not in conversation" });
  }
};
