Describe: pigLatin()

Test: "It will loop through the input and identify words beginning with vowels"
Code: pigLatin(words);
const words = "input article contents here"
Expected Output: "input article"

Test: "It will add "way" to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move the first consecutive consonants to the end of a word and add "ay" for words beginning with one or more consonants."
Code: pigLatin("code");
Expected Output: "odecay"

Test: "It will move "qu" to the end if it is included in the first consonants of the word."
Code: pigLatin("quilt");
Expected Output: "iltquay"

Test: "It will move any consonant before "qu" to the end of the word and add "ay.""
Code: pigLatin ("squash");
Expected Output: "quashsay"

