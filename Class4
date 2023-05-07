function LongestWord(sen) { 
    let currentWord = '';
    let longestWord = '';

    for (let i = 0; i < sen.length; i++) {         

      let character = sen[i];      
      let characterCode = character.charCodeAt();      
      
      if (!((characterCode >= 48 && characterCode <= 57) ||
           (characterCode >= 65 && characterCode <= 90) ||
           (characterCode >= 97 && characterCode <= 122) ||
           characterCode == 32)) {
          continue;
      } 

      if (characterCode !== 32) {
        currentWord += character;
      } 
      
      if (characterCode === 32 || i === sen.length -1)
       {
        if (currentWord.length > longestWord.length) {
          longestWord = currentWord;
        } 
        currentWord = '';
      }
    }

 
  return longestWord;
  
}


console.log(LongestWord(readline()));
