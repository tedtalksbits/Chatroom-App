import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import chatroomRoutes from './routes/chatroom.js';
import authRoutes from './routes/auth.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up view engine for handlebars

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// set up static files
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/chatroom', chatroomRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
