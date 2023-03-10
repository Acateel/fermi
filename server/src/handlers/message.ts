import prisma from "../db";

//get all in conversation
export const getMessages = async (req, res) => {
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: req.body.conversationId,
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

// update message
export const updateMessage = async (req, res) => {
  const id = req.params.id;

  const message = await prisma.message.update({
    where: {
      id: id,
    },
    data: {
      text: req.body.text,
    },
  });

  res.status(200);
  res.json({ data: message });
};

// check in user create message
export const checkUsersMessage = async (req, res, next) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      sendMessages: true,
    },
  });

  const message = await user.sendMessages.find(
    (sendMessage) => sendMessage.id === id
  );

  if (message) {
    next();
  } else {
    res.status(401);
    res.json({ data: "You did not create this message" });
  }
};
