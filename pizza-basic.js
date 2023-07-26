function myPizza(pizza, dought, ingredients, edge) {
    // comprobamos si se ha pasado un valor para pizza.
    if(pizza == undefined) {
        return "Elija una pizza.";
    };

    // comprobamos si se ha pasado algún valor para dought.
    if(dought == undefined) {
        return "Elija una masa.";
    };

    // empezamos a mostrar el pedido básico.
    let orderPizza = "Ha pedido una pizza " + pizza + ".\n"
    orderPizza += "Ha elegido masa " + dought + ".\n"
    // si hay ingredientes, mostramos que se han pedido.
    if(ingredients.length > 0) {
        orderPizza += "Con ingredientes extra." + "\n";
    };
    // si se ha pedido borde relleno, lo indicamos.
    if(edge) {
        orderPizza += "Con borde relleno." + "\n";
    }

    return orderPizza;
}

const pizza = undefined;
const dought = undefined;
const ingredients = [];
const edge = false;

console.log(myPizza(pizza, dought, ingredients, edge));