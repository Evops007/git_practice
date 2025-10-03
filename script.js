const subjectVerb = ["you are", "you should", "you can"];
const verb = ["go for", "trust", "eat", "learn"];
const goForObject = ["a walk", "it", "the opportunity"];
const trustObject = ["your gut feeling", "yourself", "your family"]
const eatObject = ["some cake", "healthy food", "a snack"];
const learnObject = ["a new language", "to code", "to play guitar"];
const youAreObject = ["a great", "an amazing", "the best"];
const youAreNouns = ["friend", "person", "developer", "baker"];
const punctuation = [".", "!", "!!"];

const randomSentenceGenerator = () => {
    let randomSentence = [];
    randomSentence.push(subjectVerb[Math.floor(Math.random() * subjectVerb.length)]);
    
    if (randomSentence[0] === "you are") {
        randomSentence.push(youAreObject[Math.floor(Math.random() * youAreObject.length)], youAreNouns[Math.floor(Math.random() * youAreNouns.length)]);
    } else if (randomSentence[0] === "you should" || randomSentence[0] === "you can") {
        randomSentence.push(verb[Math.floor(Math.random() * verb.length)]);
         if (randomSentence[1] === "go for") {
          randomSentence.push(goForObject[Math.floor(Math.random() * goForObject.length)] || randomSentence.push(trustObject[Math.floor(Math.random() * trustObject.length)]));
         } else if (randomSentence[1] === "trust") {
            randomSentence.push(trustObject[Math.floor(Math.random() * trustObject.length)]);
         } else if (randomSentence[1] === "eat") {
            randomSentence.push(eatObject[Math.floor(Math.random() * eatObject.length)]);
         } else if (randomSentence[1] === "learn") {
            randomSentence.push(learnObject[Math.floor(Math.random() * learnObject.length)]);
         }
    } 
    
    return `${randomSentence.join(" ")}${punctuation[Math.floor(Math.random() * punctuation.length)]}`;
}

console.log(randomSentenceGenerator());