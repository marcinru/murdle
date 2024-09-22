export const decode = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'R') {
            result += 'G';
        } else {
            result += 'E';
        }
    }
    return result;
}
