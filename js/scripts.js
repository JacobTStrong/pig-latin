// Business Logic

function pigLatin() {
  const words = "apple through outside words";
  const vowels = ["a", "e", "i", "o", "u"];
  words.forEach (function(element) {
    if (words.toLowerCase().includes(element)) {

    }
  })
}





function pigLatin(words) {
  const words = ["apple", "integer", "outside", "words"];
  const vowels = ["a", "e", "i", "o", "u"];
  let resultArray = [];
  words.forEach (function(element) {
    let x = -1
    for (let i = 0; i < element.length; i ++) {
      if (vowels.includes(element.charAt(i)) && x === -1) {
        resultArray.push(element);
      }
    }
  });
  return resultArray;
}