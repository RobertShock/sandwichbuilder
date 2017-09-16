var SandwichBuilder = (function(oldSandwichBuilder){
  const veggie = {"grass": 0, "spinach": 1.00, "lettuce": 1.00, "none": 0};
    var veggiePrices;
    
  oldSandwichBuilder.getVeggie = function(){
    return veggie;
  };

  for(var i = 0; i < veggie.length; i++){
    if(document.getElementById("grass").checked){
      var veggiePrices = veggie.grass[i];  
    } else if(document.getElementById("spinach").checked){
      var veggiePrices = veggie.spinach[i];
    } else if(document.getElementById("lettuce").checked){
      var veggiePrices = veggie.lettuce[i];
    } else if(document.getElementById("none").checked){
      var veggiePrices = veggie.none[i];
    }
  }
  return oldSandwichBuilder;

})(SandwichBuilder || {});



