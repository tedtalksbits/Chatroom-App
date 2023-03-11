import { chatroomsArr } from '../mockdata/chatroomsData.js';

export const chatroom = (req, res) => {
    const chatroom = chatroomsArr.find((chatroom) => chatroom._id === parseInt(req.query.id));
    res.render('chatroom', {
        pageTitle: 'chatroom',
        chatroom,
    });
};

export const chatrooms = (req, res) =>
    res.render('chatrooms', {
        pageTitle: 'chatrooms',
        chatrooms: chatroomsArr,
    });
