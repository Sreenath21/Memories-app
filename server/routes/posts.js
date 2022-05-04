import express from "express";
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
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likepost", likePost);

export default router;
