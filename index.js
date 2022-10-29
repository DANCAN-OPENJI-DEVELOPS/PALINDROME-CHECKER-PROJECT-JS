function palindrome(str) {
  const myStr = str.split(" ");
  //console.log(str.match(/[A-Za-z0-9]/gi).join(""));
 //console.log(str.split(" "))
  let myNew = "";
    for (let i = str.length-1; i >= 0; i--) { 
       myNew += str[i]
    }
  return myNew.match(/[A-Za-z0-9]/gi).join("").toLowerCase() == str.match(/[A-Za-z0-9]/gi).join("").toLowerCase()
}

console.log(palindrome("_eye my"));
console.log(palindrome("race car"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("_eye"));
