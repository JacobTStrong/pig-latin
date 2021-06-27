// Business Logic

function pigLatin() {
  const words = "apple through outside words";
  const vowels = ["a", "e", "i", "o", "u"];
  words.forEach (function(element) {
    if (words.toLowerCase().includes(element)) {
    }
  }
}


function pigLatin() {
  const words = ["apple", "integer", "outside", "words"];
  const vowels = ["a", "e", "i", "o", "u"];
  let resultArray = [];
  words.forEach (function(element) {
        if (vowels.includes(element.charAt(0))) {
        resultArray.push(element + "way");
      }
  });
  return resultArray;
}
