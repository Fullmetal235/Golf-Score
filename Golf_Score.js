function golf_score(par, strokes){
    let names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Triple Bogey", "Go home loser!"];
  if (strokes === 1){
      return names[0]
  }
  else if (strokes <= par - 3){
      return names[1]
  }
  else if (strokes === par - 2){
    return names[2]
}
  else if (strokes === par - 1){
    return names[3]
}
  else if (strokes === par ){
    return names[4]
}
else if (strokes === par + 1){
    return names[5]
}
else if (strokes === par + 2){
    return names[6]
}
else if (strokes === par + 3){
    return names[7]
}
else{
    return names[8]
}
}
console.log(golf_score(5,2))