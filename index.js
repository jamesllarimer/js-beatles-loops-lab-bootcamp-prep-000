function theBeatlesPlay(musicians, instruments){
  let stringArr = [];
  for (var i = 0; i < musicians.length; i++){
    stringArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stringArr;
}

function johnLennonFacts(facts){
  let stringArr = [];
  while (facts.length > 0){
    stringArr.push(`${facts.shift()}!!!`)
  }
  return stringArr;
}