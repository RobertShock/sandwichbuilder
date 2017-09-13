console.log("completed sandwich");

var finalSandwichPrice = 0;   
var selectedTopping;          

var grainChooser = document.getElementById("grain"),
    meatChooser = document.getElementById("meat"),
    cheeseChooser = document.getElementById("cheese"),
    sauceChooser = document.getElementById("sauce"),
    veggieChooser = document.getElementById("veggie"),
    sandwich = document.getElementById("finalSandwich"),  
    total = document.getElementById("total");

grainChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      
  selectedTopping = selectedTopping.split("--")[1];          
  
  if (selectedTopping[0] === "btn"){
    let grain = SandwichMaker.getGrainPrices(selectedTopping);         
    let grainKey = selectedTopping[1];                    
    finalSandwichPrice += grain[grainKey];               
    sandwich.innerHTML += `+$${grain[grainKey]} for ${selectedTopping[1]}<br>`; 
    total.innerHTML = `$${finalSandwichPrice} current total`;
  }
});

meatChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let meat = SandwichMaker.getMeatPrices();
    let meatKey = selectedTopping[1];
    finalSandwichPrice += meats[meatKey];
    sandwich.innerHTML += `+$${meat[meatKey]} for ${selectedTopping[1]}<br>`;
    total.innerHTML = `$${finalSandwichPrice} current total`;
  }
});

cheeseChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let cheese = SandwichMaker.getCheesePrices();
    let cheeseKey = selectedTopping[1];
    finalSandwichPrice += cheese[cheeseKey];
    sandwich.innerHTML += `+$${cheese[cheeseKey]} for ${selectedTopping[1]}<br>`;
    total.innerHTML = `$${finalSandwichPrice} current total`;
  }
});

sauceChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let sauce = SandwichMaker.getSaucePrices();
    let sauceKey = selectedTopping[1];
    finalSandwichPrice += sauce[sauceKey];
    sandwich.innerHTML += `+$${sauce[sauceKey]} for ${selectedTopping[1]}<br>`;
    total.innerHTML = `$${finalSandwichPrice} current total`;
  }
});

veggieChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let veggie = SandwichMaker.getVeggiePrices();
    let veggieKey = selectedTopping[1];
    finalSandwichPrice += veggie[veggieKey];
    sandwich.innerHTML += `+$${veggie[veggieKey]} for ${selectedTopping[1]}<br>`;
    total.innerHTML = `$${finalSandwichPrice} current total`;
  }
});
