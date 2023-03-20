import { Router } from "express";
import { body } from "express-validator";
import {
  checkUserInConversationByParams,
  createConversation,
  deleteConversation,
  getAllConversations,
  getConversation,
  updateConversation,
  checkUserInConversationByBody,
} from "./handlers/conversation";
import {
  createGroupMember,
  deleteGroupMember,
  getAllGroupMembers,
} from "./handlers/groupMember";
import {
  checkImage,
  uploadConversationImage,
  uploadUserImage,
} from "./handlers/image";
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
  checkUserInConversationByParams,
  updateConversation
);
router.delete(
  "/conversation/:id",
  checkUserInConversationByParams,
  deleteConversation
);

/**
 * Message
 */
// get messages by conversation Id
router.get("/message/:id", checkUserInConversationByParams, getMessages);
router.post(
  "/message",
  body("text").isString(),
  body("conversationId").isString(),
  handleInputErrors,
  checkUserInConversationByBody,
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
  checkUserInConversationByBody,
  getAllGroupMembers
);
//router.get("/groupmember/:id", () => {}); dont use now
router.post(
  "/groupmember",
  body("conversationId").isString(),
  body("userId").isString(),
  handleInputErrors,
  checkUserInConversationByBody,
  createGroupMember
);
//router.put("/groupmember/:id", () => {}); dont use now
router.delete(
  "/groupmember/:id",
  body("conversationId").isString(),
  handleInputErrors,
  checkUserInConversationByBody,
  deleteGroupMember
);

/**
 * Upload images
 */
router.post("/userimage", checkImage, uploadUserImage);
router.post(
  "/conversationimage",
  body("conversationId").isString(),
  handleInputErrors,
  checkUserInConversationByBody,
  checkImage,
  uploadConversationImage
);

export default router;
