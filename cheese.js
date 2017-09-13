var SandwichMaker = (function(maker) {
  var cheesePrices= {"Pepper Jack":  1.00, 
                    "Colby":      .75, 
                    "Cheddar":    .10};

  maker.addCheesePrices = function(thisCheese) {
    return cheesePrices[thisCheese];
  };

  maker.getCheesePrices = function () {
    return cheesePrices
  };

  return maker;
})(SandwichMaker || {});
