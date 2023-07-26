function myPizza(pizza, dought, ingredients, edge) {
  // definimos las variables que usaremos y los array con los valores de pizza y dought.
  const pizzas = [
    ["Margarita", 10],
    ["Carbonara", 11],
    ["4 Estaciones", 12],
    ["4 Quesos", 13],
    ["Atún y bacón", 14],
    ["Napolitana", 15],
  ];
  const doghts = [
    ["fina", 0],
    ["gruesa", 0],
    ["integral", 1],
    ["sin gluten", 2],
  ];
  let listIngredients = "Sin ingredientes extra.";
  const priceIngredient = 1.5;
  let edgeFilled = "Sin borde relleno.";
  const priceEdge = 1.5;
  let orderPizza = "";

  //comprobamos si se ha pasado un número para pizza.
  if (isNaN(pizza)) {
    return "Elija una pizza.";
  }

  // comprobamos si se ha pasado un número para dought.
  if (isNaN(dought)) {
    return "Elija una masa.";
  }

  // si hay ingredientes extras, recorremos el array y los mostramos.
  if (ingredients.length > 0) {
    listIngredients =
      "Ha pedido " + ingredients.length + " ingrediente/s extra (" + (ingredients.length)*priceIngredient + "€ de suplemento):\n";
    for (let index = 0; index < ingredients.length; index++) {
      listIngredients += ingredients[index] + "\n";
    }
  }

  // si se ha pedido borde relleno, lo indicamos.
  if (edge) {
    edgeFilled = "Con borde relleno (suplemento de " + priceEdge + "€).\n";
  }

  // empezamos a componer el pedido.
  orderPizza +=
    "Ha pedido una pizza " +
    pizzas[pizza][0] +
    " que vale " +
    pizzas[pizza][1] +
    "€.\n";
  orderPizza += "Ha elegido masa " + doghts[dought][0];
  // si la masa vale más de 0, ponemos el precio
  if(doghts[dought][1] > 0) {
    orderPizza += " que tiene un suplemento de " + doghts[dought][1] + "€" 
  }
  orderPizza += ".\n";
  orderPizza += listIngredients + "\n";
  orderPizza += edgeFilled + "\n";

  return orderPizza;
}

const pizza = undefined;
const dought = undefined;
const ingredients = [];
const edge = false;

console.log(myPizza(pizza, dought, ingredients, edge));