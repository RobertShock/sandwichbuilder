var finalSandwichPrice = 0;

var sandwichTotal = document.getElementById("sandwichTotal");
var itemFoods = document.getElementById("sandwichItems");

var selectedBread; 
let bread = document.getElementById("breadDiv"); 
let myBread = SandwichBuilder.getBread(); 

bread.addEventListener("change", (e) => {
  selectedBread = e.target.value;
  for(let key in myBread){
    if(selectedBread === key && e.target.checked){
      finalSandwichPrice += myBread[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.innerHTML += `<p id="${key}">$${myBread[key]} ${key}</p>`;
    } else if(selectedBread === key && e.target.checked === false){
      finalSandwichPrice -= myBread[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.removeChild(document.getElementById(`${key}`));
    }
  }
});

var selectedMeat; 
let meat = document.getElementById("meatDiv"); 
let myMeat = SandwichBuilder.getMeat(); 

meat.addEventListener("change", (e) => {
  selectedMeat = e.target.value;
  for(let key in myMeat){
    if(selectedMeat === key && e.target.checked){
      finalSandwichPrice += myMeat[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.innerHTML += `<p id="${key}">$${myMeat[key]} ${key}</p>`;
    } else if(selectedMeat === key && e.target.checked === false){
      finalSandwichPrice -= myMeat[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.removeChild(document.getElementById(`${key}`));
    }
  }
});

var selectedCheese; 
let cheese = document.getElementById("cheeseDiv"); 
let myCheese = SandwichBuilder.getCheese(); 

cheese.addEventListener("change", (e) => {
  selectedCheese = e.target.value;
  for(let key in myCheese){
    if(selectedCheese === key && e.target.checked){
      finalSandwichPrice += myCheese[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.innerHTML += `<p id="${key}">$${myCheese[key]} ${key}</p>`;
    } else if(selectedCheese === key && e.target.checked === false){
      finalSandwichPrice -= myCheese[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.removeChild(document.getElementById(`${key}`));
    }
  }
});

var selectedCondiments; 
let condiments = document.getElementById("condimentsDiv"); 
let myCondiments = SandwichBuilder.getCondiments(); 

condiments.addEventListener("change", (e) => {
  selectedCondiments = e.target.value;
  for(let key in myCondiments){
    if(selectedCondiments === key && e.target.checked){
      finalSandwichPrice += myCondiments[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.innerHTML += `<p id="${key}">$${myCondiments[key]} ${key}</p>`;
    } else if(selectedCondiments === key && e.target.checked === false){
      finalSandwichPrice -= myCondiments[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.removeChild(document.getElementById(`${key}`));
    }
  }
});

var selectedVeggie; 
let veggie = document.getElementById("veggieDiv"); 
let myVeggie = SandwichBuilder.getVeggie(); 

veggie.addEventListener("change", (e) => {
  selectedVeggie = e.target.value;
  for(let key in myVeggie){
    if(selectedVeggie === key && e.target.checked){
      finalSandwichPrice += myVeggie[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.innerHTML += `<p id="${key}">$${myVeggie[key]} ${key}</p>`;
    } else if(selectedVeggie === key && e.target.checked === false){
      finalSandwichPrice -= myVeggie[key];
      sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
      itemFoods.removeChild(document.getElementById(`${key}`));
    }
  }
});





