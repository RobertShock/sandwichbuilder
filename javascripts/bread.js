var SandwichBuilder = (function(oldSandwichBuilder){
  const bread = {"pumpernickle": 1.00,"nann": 2.00, "stale": 5.00, "None": .00};
    var breadPrices;

  oldSandwichBuilder.getBread = function(){
    return bread;
  };

  for(var i = 0; i < bread.length; i++){
    if(document.getElementById("pumpernickle").checked){
      var breadPrices = bread.pumpernickle[i];  
    } else if(document.getElementById("nann").checked){
      var breadPrices = bread.nann[i];
    } else if(document.getElementById("stale").checked){
      var breadPrices = bread.stale[i];
    } else if(document.getElementById("none").checked){
      var breadPrices = bread.none[i];
    }
  }
  return oldSandwichBuilder;

})(SandwichBuilder || {});