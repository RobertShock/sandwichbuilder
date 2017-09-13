console.log("Green stuff");

var SandwichMaker = (function(maker) {
var veggiePrices= {"Grass":  0.25, 
                      "Rose Petals":   10.00, 
                      "Oak Leaves":   5.00};

  maker.addVeggiePrices = function(thisVeggie) {
    return veggiePrices[thisVeggie];
  };

  maker.getVeggiePrices = function () {
    return veggiePrices
  };

  return maker;
})(SandwichMaker || {});
