const car_cards = document.querySelector(".car_cards");
const cart_products = document.querySelector(".cart_products");
const cart_buttons = document.querySelectorAll(".cart_button");

let cart = [];

class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.Items;
      products = products.map((Items) => {
        const { title, price } = Items.fields;
        const { id } = Items.sys;
        const image = Items.fields.image.url;
        return { title, price, id, image };
      });
      cart = [products];
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("Products", JSON.stringify(products));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();

  products.getProducts().then((data) => {
    Storage.saveProducts(data);
  });
});
