import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Conversation
 */
router.get("/conversation", (req, res) => {
  res.status(200);
  res.json({ message: "GET /conversation" });
});
router.get("/conversation/:id", () => {});
router.post(
  "/conversation",
  body("name").isString(),
  handleInputErrors,
  () => {}
);
router.put(
  "/conversation/:id",
  body("name").optional().isString(),
  handleInputErrors,
  () => {}
);
router.delete("/conversation/:id", () => {});

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
