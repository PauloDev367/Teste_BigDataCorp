function SearchingChallenge(str) { 
  const token = '92rygmquo5';
  let words = str.split(' ');
  let maxRepeat = 1;

  for(let word of words){
    const rpCount = countRepeats(word);
    if(rpCount > maxRepeat){
      maxRepeat = rpCount;
      bestWord = word;
    }
  }

  const output = maxRepeat > 1 ? bestWord: '-1';
  const combined = output + token;

  let response = "";
  for (let i = 0; i < combined.length; i++){
    response += (i+1)%4 ===0? '_' : combined[i];
  }
  
  return response; 
}

function countRepeats(word){
  const counts = {};
  let max = 1;
  for (let char of word.toLowerCase()){
    if(/[a-z]/.test(char)){
      counts[char] = (counts[char] || 0) + 1;
      if(counts[char]>max){
        max=counts[char];
      }
    }
  }
  return max;
}


   
// keep this function call here 
console.log(SearchingChallenge(readline()));