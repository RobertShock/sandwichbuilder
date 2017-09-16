var SandwichBuilder = (function(oldSandwichBuilder){
  const meat = {"dragon": 100.00, "unicorn": 125.00, "troll": 50.00, "none": 0};
    var meatPrices;
    
  oldSandwichBuilder.getMeat = function(){
    return meat;
  };

  for(var i = 0; i < meat.length; i++){
    if(document.getElementById("dragon").checked){
      var meatPrices = meat.dragon[i];  
    } else if(document.getElementById("unicorn").checked){
      var meatPrices = meat.unicorn[i];
    } else if(document.getElementById("troll").checked){
      var meatPrices = meat.troll[i];
    } else if(document.getElementById("none").checked){
      var meatPrices = meat.none[i];
    }
  }
  return oldSandwichBuilder;

})(SandwichBuilder || {});


