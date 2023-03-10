import { Router } from "express";
import { body } from "express-validator";
import {
  handleCheckUserInConversation,
  createConversation,
  deleteConversation,
  getAllConversations,
  getConversation,
  updateConversation,
  handleCheckUserInConversationForMessage,
} from "./handlers/conversation";
import {
  checkUsersMessage,
  createMessage,
  getMessages,
  updateMessage,
} from "./handlers/message";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Conversation
 */
router.get("/conversation", getAllConversations);
router.get("/conversation/:id", getConversation);
router.post(
  "/conversation",
  body("name").isString(),
  handleInputErrors,
  createConversation
);
router.put(
  "/conversation/:id",
  body("name").optional().isString(),
  handleInputErrors,
  handleCheckUserInConversation,
  updateConversation
);
router.delete(
  "/conversation/:id",
  handleCheckUserInConversation,
  deleteConversation
);

/**
 * Message
 */
// get messages by conversation Id
router.get(
  "/message",
  body("conversationId").isString(),
  handleInputErrors,
  handleCheckUserInConversationForMessage,
  getMessages
);
router.post(
  "/message",
  body("text").isString(),
  body("conversationId").isString(),
  handleInputErrors,
  handleCheckUserInConversationForMessage,
  createMessage
);
router.put(
  "/message/:id",
  body("text").isString(),
  handleInputErrors,
  checkUsersMessage,
  updateMessage
);
router.delete("/message/:id", () => {});

/**
 * GroupMember
 */
router.get("/groupmember", () => {});
router.get("/groupmember/:id", () => {});
router.post(
  "/groupmember",
  body("conversationId").isString(),
  handleInputErrors,
  () => {}
);
router.put("/groupmember/:id", () => {});
router.delete("/groupmember/:id", () => {});

export default router;
