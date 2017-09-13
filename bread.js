var SandwichMaker = (function(maker) {
  var breadPrices = {"Pumpernickle":     2.00, 
                    "Nann":    3.00, 
                    "Nine Grain":    12.00};

  maker.addGrainPrices = function(thisGrain) {
    return breadPrices[thisGrain];
  };

  maker.getGrainPrices = function (thisGrain) {
    return breadPrices[thisGrain];
  };

  return maker;
})(SandwichMaker || {});