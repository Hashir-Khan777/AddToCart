const car_cards = document.querySelector(".car_cards");
const cart_products = document.querySelector(".cart_products");
const cart_buttons = document.querySelectorAll(".cart_button");

let cart = [];
let item_id = [];

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
    products.forEach((item) => {
      item_id.push(item.id);
    });
    cart_buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        var event_id = event.target.getAttribute("data-id");
        for (var i = 0; i < item_id.length; i++) {
          if (event_id == item_id[i]) {
            console.log("event id ==>", event_id, "item id ==>", item_id[i]);
          }
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();

  products.getProducts().then((data) => {
    Storage.saveProducts(data);
  });
});
