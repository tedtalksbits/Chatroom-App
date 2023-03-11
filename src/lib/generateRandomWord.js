export function generateRandomWord() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const wordLength = Math.floor(Math.random() * 10) + 1;
    let word = '';
    for (let i = 0; i < wordLength; i++) {
        word += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return word;
}
