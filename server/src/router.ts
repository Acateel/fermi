import { Router } from "express";

const router = Router();

/**
 * Conversation
 */
router.get("/conversation", () => {});
router.get("/conversation/:id", () => {});
router.post("/conversation", () => {});
router.put("/conversation/:id", () => {});
router.delete("/conversation/:id", () => {});

/**
 * Message
 */
router.get("/message", () => {});
router.get("/message/:id", () => {});
router.post("/message", () => {});
router.put("/message/:id", () => {});
router.delete("/message/:id", () => {});

/**
 * GroupMember
 */
router.get("/groupmember", () => {});
router.get("/groupmember/:id", () => {});
router.post("/groupmember", () => {});
router.put("/groupmember/:id", () => {});
router.delete("/groupmember/:id", () => {});

export default router;
