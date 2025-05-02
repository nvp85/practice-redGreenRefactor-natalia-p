const countVowels = require("./countVowels");

describe('countVowels', () => {
    test('should count vowels correctly', () => {
        const res = countVowels("hello world");
        expect(res).toBe(3);
    });
    test('should count vowels correctly in a string with capital letters', () => {
        const res = countVowels("heLLO wORld");
        expect(res).toBe(3);
    });
    test('should count vowels in an empty string', () => {
        const res = countVowels("");
        expect(res).toBe(0);
    });
})