function SearchingChallenge(str) { 
  const ChallengeToken = '92rygmquo5';
  let longest = '';

  for (let i = 0; i< str.length; i++){
    for (let j = i + 1; j <= str.length; j++){
      let sub = str.substring(i, j);
      if(
        sub.length > 2
        && IsPalindrome(sub) 
        && sub.length > longest.length){
        longest = sub;
      }
    }  
  }

  if(longest.length === 0){
    longest = "none";
  }

  let final = longest + ChallengeToken;
  final = final
    .split('')
    .map((char, idx)=> ((idx+1) % 4 === 0 ? "_" : char))
    .join('');

  return final;
}
   
function IsPalindrome(str){
  return str === str.split('').reverse().join('');
}


// keep this function call here 
console.log(SearchingChallenge(readline()));