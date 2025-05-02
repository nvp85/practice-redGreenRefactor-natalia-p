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
    test('should return 0 if the string is empty', () => {
        const res = countVowels("");
        expect(res).toBe(0);
    });

    test('should throw a type error if the input is not a string', () => {
        expect(() => countVowels(8)).toThrow("Received input is not a string");
        expect(() => countVowels(8)).toThrow(TypeError);
    });
})