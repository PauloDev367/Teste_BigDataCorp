function ArrayChallenge(arr) { 
  const numMax = Math.max(...arr);

  const rest =[...arr];

  rest.splice(rest.indexOf(numMax), 1);
  const sums = new Set([0]);
  for (const num of rest){
    const currentSums = [...sums];
    for (const s of currentSums){
      sums.add(s+num);
    }
  }

  return sums.has(numMax) ? "true" : "false"

}

// keep this function call here 
console.log(ArrayChallenge(readline()));