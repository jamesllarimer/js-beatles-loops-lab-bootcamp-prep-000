function theBeatlesPlay(musicians, instruments){
  let stringArr = [];
  for (var i = 0; i < musicians.length; i++){
    stringArr.push(`${musicians[i]} plays the ${instruments[i]}`)
  }
  return stringArr;
}