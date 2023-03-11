import express from 'express';
import { chatroom, chatrooms } from '../controllers/chat.js';
const router = express.Router();

router.get('/', chatroom);
router.get('/all', chatrooms);

export default router;
