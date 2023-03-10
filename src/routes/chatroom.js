import express from 'express';
import { chatroom } from '../controllers/chat.js';
const router = express.Router();

router.get('/', chatroom);

export default router;
