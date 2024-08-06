function capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("lamiya"));
 


function capitalizeSentence(sentence) {
    if (sentence.length === 0) return sentence;
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}
console.log(capitalizeSentence("are u happy lami"));     