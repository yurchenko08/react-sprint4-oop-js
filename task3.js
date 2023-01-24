class Distributor {
  constructor() {
    this.products = {};
  }

  addProduct(id, name) {
    this.products[id] = name;
    //your code
    //add a property to products with name equal to product id and value equal to product name
  }

  removeProduct(id) {
    //your code
    //remove a property from products with name equal to specified id
    delete this.products[id];
  }
}

const localDistributor = new Distributor();

class MyProduct {
  constructor(name) {
    //your code
    //generate unique product id; define id and name fields
    this.name = name;
    this.id = Symbol(name);
  }

  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}
