function FirstReverse(str) { 

  // code goes here 
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }


  return newStr; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
