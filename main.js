
// For loop vowel removal //

function vowel(words){
    let vowels = ["a", "e", "i", "o", "u"]
    for(let i = words.length; i >= 0; i--){
        let word = words[i];
        if (vowels.includes(word)){
            return words.slice(0, i) + words.slice(i + 1)
        }
    }
    return word;
}


console.log("How to remove the last vowel");
console.log(vowel("jason"))
