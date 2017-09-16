var SandwichBuilder = (function(oldSandwichBuilder){
  const condiments = {"mayo": 1.00, "mustard": 1.00, "bbq": 1.00, "none": 0};
    var CondimentsPrices;

  oldSandwichBuilder.getCondiments = function(){
    return condiments;
  };

  for(var i = 0; i < condiments.length; i++){
    if(document.getElementById("mayo").checked){
      var condimentsPrices = condiments.mayo[i];  
    } else if(document.getElementById("mustard").checked){
      var condimentsPrices = condiments.mustard[i];
    } else if(document.getElementById("bbq").checked){
      var condimentsPrices = condiments.bbq[i];
    } else if(document.getElementById("none").checked){
      var condimentsPrices = condiments.none[i];
    }
  }
  return oldSandwichBuilder;

})(SandwichBuilder || {});




