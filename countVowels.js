
function countVowels(str) {
    if (typeof str !== "string") {
        throw new TypeError("Received input is not a string");
    }
    const vowels = "aeiouAEIOU";
    return str.split("").filter(char => vowels.includes(char)).length;
}

module.exports = countVowels;