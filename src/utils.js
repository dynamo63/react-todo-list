/**
 * Truncate the sentence str with a number of words
 * @param {String} str - sentence to truncate
 * @param {Number} nbWords - number of words 
 * @returns {String} - The truncated sentence
 */
export function truncateWords (str, nbWords = 5) {
    const words = str.split(' ');
    if (words.length >= 5) {
        return words.splice(0, nbWords).join(' ').concat('...');
    }
    return words;
}