import { alphabet, inverted } from './alphabet';

export const decode = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const index = inverted.indexOf(str.charAt(i));
        result += alphabet[index];
    }
    return result;
}
