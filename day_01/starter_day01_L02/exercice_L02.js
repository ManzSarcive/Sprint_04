var phrase = "the quote 'there is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. "
var long = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(phrase)
console.log(long)
console.log(typeof("10")== 10)
console.log(parseFloat("10"))


var test = "I hope this course is not full of jargon."
console.log(test.includes("jargon"))

function numRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  numRandom(1, 10);
  console.log(numRandom(0, 100))
  console.log(numRandom(50, 100))
  console.log(numRandom(0, 255))

  var cool = 'You cannot end a sentence with because because because is a conjunction'

  console.log(cool.substring(30, 54))





