import express from "express";

import auth from "../middleware/auth.js";
import {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/:id", getPost);
router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likepost", auth, likePost);

export default router;
