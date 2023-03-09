import { Router } from "express";
import { body } from "express-validator";
import {
  checkUserInConversation,
  createConversation,
  deleteConversation,
  getAllConversations,
  getConversation,
  updateConversation,
} from "./handlers/conversation";
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
  checkUserInConversation,
  updateConversation
);
router.delete("/conversation/:id", checkUserInConversation, deleteConversation);

/**
 * Message
 */
router.get("/message", () => {});
router.get("/message/:id", () => {});
router.post(
  "/message",
  body("text").isString(),
  body("conversationId").isString(),
  handleInputErrors,
  () => {}
);
router.put(
  "/message/:id",
  body("text").optional().isString(),
  handleInputErrors,
  () => {}
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
