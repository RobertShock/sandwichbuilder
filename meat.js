console.log("pick your meat");

var SandwichMaker = (function(maker) {
  var meatPrices= {"Dragon":    25000.00, 
                    "Whale":    10.00, 
                    "Panda":    5000.00};

  maker.addMeatPrices = function(thisMeat) {
    return meatPrices[thisMeat];
  };

  maker.getMeatPrices = function () {
    return meatPrices
  };

  return maker;
})(SandwichMaker || {});
