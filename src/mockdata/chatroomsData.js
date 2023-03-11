import { generateRandomWord } from '../lib/generateRandomWord.js';

export const chatroomsArr = [
    {
        name: 'For the squad',
        shortName: 'FTS',
        _id: 1,
        img: `https://robohash.org/${generateRandomWord()}.png?size=90x90&set=set1`,
    },
    {
        name: 'Tech Team',
        shortName: 'TT',
        _id: 2,
        //    random unsplash image
        img: `https://robohash.org/${generateRandomWord()}.png?size=90x90&set=set1`,
    },
];
