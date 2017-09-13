console.log("Sauces");

var SandwichMaker = (function(maker) {
  var SaucePrices= {"Ketchup":        .01, 
                        "Mayo":           1.00, 
                        "Mustard":        10.00};
                        
  maker.addSaucePrices = function(thisSauce) {
    return saucePrices[thisSauce];
  };

  maker.getSaucePrices = function () {
    return saucePrices
  };

  return maker;
})(SandwichMaker || {});
