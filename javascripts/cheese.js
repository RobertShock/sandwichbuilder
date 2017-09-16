var SandwichBuilder = (function(oldSandwichBuilder){
  const cheese = {"colby": 1.00, "jack": .75, "swiss": .10, "none": 0};
    var cheesePrices;

  oldSandwichBuilder.getCheese = function(){
    return cheese;
  };

  for(var i = 0; i < cheese.length; i++){
    if(document.getElementById("colby").checked){
      var cheesePrices = cheese.colby[i];  
    } else if(document.getElementById("jack").checked){
      var cheesePrices = cheese.jack[i];
    } else if(document.getElementById("swiss").checked){
      var cheesePrices = cheese.swiss[i];
    } else if(document.getElementById("none").checked){
      var cheesePrices = cheese.none[i];
    }
  }
  return oldSandwichBuilder;

})(SandwichBuilder || {});




