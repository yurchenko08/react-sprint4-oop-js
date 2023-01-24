const pizzaMenu = {
  SIZE_S: { param: "SIZE_S", price: 60, calorie: 300 },
  SIZE_M: { param: "SIZE_M", price: 90, calorie: 450 },
  SIZE_L: { param: "SIZE_L", price: 110, calorie: 600 },
  KIND_MEAT: { param: "KIND_MEAT", price: 55, calorie: 230 },
  KIND_FISH: { param: "KIND_FISH", price: 70, calorie: 150 },
  KIND_CHEESE: { param: "KIND_CHEESE", price: 50, calorie: 200 },
  KIND_VEGETARIAN: { param: "KIND_VEGETARIAN", price: 35, calorie: 50 },
  INGREDIENT_TOMATOES: { param: "INGREDIENT_TOMATOES", price: 15, calorie: 5 },
  INGREDIENT_PEPPER: { param: "INGREDIENT_PEPPER", price: 18, calorie: 5 },
  INGREDIENT_BACON: { param: "INGREDIENT_BACON", price: 25, calorie: 40 },
  INGREDIENT_OLIVES: { param: "INGREDIENT_OLIVES", price: 20, calorie: 0 },
};

class PizzaMaker {
  constructor(size, kind) {
    this.size = size;
    this.kind = kind;
    this.ingredients = [];
  }
  addIngredient(ingredient) {
    if (this.getIngredients().some((el) => el.param === ingredient.param)) {
      return console.log("Such an ingredient already exists!");
    } else {
      console.log("ingredient_name has been added");
      this.getIngredients().push(ingredient);
    }
  }

  deleteIngredient(ingredient) {
    console.log(`${ingredient.param} has been deleted`);
    return this.ingredients.filter((el) => el.param !== ingredient.param);
  }

  getIngredients() {
    return this.ingredients;
  }

  getSize() {
    return this.size.param;
  }

  getKind() {
    return this.kind.param;
  }

  calculatePrice() {
    return (
      this.size.price +
      this.kind.price +
      this.getIngredients().reduce((acc, value) => acc + value.price, 0)
    );
  }

  calculateCalories() {
    return (
      this.size.calorie +
      this.kind.calorie +
      this.getIngredients().reduce((acc, value) => acc + value.calorie, 0)
    );
  }
}
const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);
console.log("getIngredients:", pizza.getIngredients());
