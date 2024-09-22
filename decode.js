import { alphabet, inverted } from './alphabet';

export const decode = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === ' ') {
            result += ' ';
        } else {
            const index = inverted.indexOf(char);
            result += alphabet[index];
        }
    }
    return result;
}
