import express from 'express';
import { getFeedPosts, getUserPosts, likePosts } from '../controllers/posts.js'
import { verifyToken } from '../middleware/auth.js';

const router = ecpress.Router();

// Read
router.get("/",verifyToken,getFeedPosts);
router.get("/:userID/posts",verifyToken,getUserPosts);


// update
router.patch("/:id/like",verifyToken,likePosts);

export default router;