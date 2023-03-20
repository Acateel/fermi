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
  createGroupMember,
  deleteGroupMember,
  getAllGroupMembers,
} from "./handlers/groupMember";
import {
  checkUsersMessage,
  createMessage,
  deleteMessage,
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
router.get("/message/:id", handleCheckUserInConversation, getMessages);
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
router.delete("/message/:id", checkUsersMessage, deleteMessage);

/**
 * GroupMember
 */
router.get(
  "/groupmember",
  body("conversationId").isString(),
  handleInputErrors,
  handleCheckUserInConversationForMessage,
  getAllGroupMembers
);
//router.get("/groupmember/:id", () => {}); dont use now
router.post(
  "/groupmember",
  body("conversationId").isString(),
  body("userId").isString(),
  handleInputErrors,
  handleCheckUserInConversationForMessage,
  createGroupMember
);
//router.put("/groupmember/:id", () => {}); dont use now
router.delete(
  "/groupmember/:id",
  body("conversationId").isString(),
  handleInputErrors,
  handleCheckUserInConversationForMessage,
  deleteGroupMember
);

/**
 * Upload images
 */
router.post("/userimage", () => {});
router.post("/conversationimage", () => {});

export default router;
