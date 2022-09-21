function sentenceMaker(sentence) {
    const capitalAdded = sentence.charAt(0).toUpperCase() + sentence.slice(1)
   
    return `${capitalAdded}.`
}

console.log(sentenceMaker('my name is Fatima'))


// const capitalAdded = sentence.charAt(0).toUpperCase() + sentence.slice(1)