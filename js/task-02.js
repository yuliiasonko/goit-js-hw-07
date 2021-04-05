  
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

let ulList = document.getElementById("ingredients");
const kitchenIngredients = ingredients.map(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
});

console.log(kitchenIngredients);
