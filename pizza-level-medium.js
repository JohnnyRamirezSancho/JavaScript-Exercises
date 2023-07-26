function myPizza(pizza, dought, ingredients, edge) {
  // definimos los array con los valores de pizza y dought.
  const pizzas = [
    "Margarita",
    "Carbonara",
    "4 Estaciones",
    "4 Quesos",
    "Atún y bacón",
    "Napolitana",
  ];
  const doghts = [
    "fina", 
    "gruesa", 
    "integral", 
    "sin gluten"];

  //comprobamos si se ha pasado un número para pizza.
  if (isNaN(pizza)) {
    return "Elija una pizza.";
  }

  // comprobamos si se ha pasado un número para dought.
  if (isNaN(dought)) {
    return "Elija una masa.";
  }
  
  // empezamos a componer el pedido.
  let orderPizza = "Ha pedido una pizza " + pizzas[pizza] + ".\n";
  orderPizza += "Ha elegido masa " + doghts[dought] + ".\n";
  
  // si hay ingredientes extras, recorremos el array y los mostramos.
  if (ingredients.length > 0) {
    let listIngredients =
    "Ha pedido " + ingredients.length + " ingrediente/s extra:\n";
    for (let index = 0; index < ingredients.length; index++) {
      listIngredients += ingredients[index] + "\n";
    }
    orderPizza += listIngredients
  }
  // si se ha pedido borde relleno, lo indicamos.
  if (edge) {
    edgeFilled = "Con borde relleno.\n";
    orderPizza += edgeFilled + "\n";
  }

  return orderPizza;
}

const pizza = undefined;
const dought = undefined;
const ingredients = [];
const edge = false;

console.log(myPizza(pizza, dought, ingredients, edge));