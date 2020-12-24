const cart_list = document.querySelector(".cart_products");

const product = JSON.parse(localStorage.getItem("Product"));

let result = "";
product.forEach((element) => {
  result += `
      <li class="cart_product_items" data-id=${element.id}>
      <div class="cart_card">
        <div class="cart_card_image_about_info">
          <div class="cart_card_image">
            <figure>
              <img src=${element.image} alt="" />
            </figure>
          </div>

          <div class="cart_about_info">
            <h1>${element.price}</h1>
            <p>${element.title}</p>
          </div>
        </div>

        <div class="remove_btn">
          <button>Remove</button>
        </div>
      </div>
    </li>
      `;
});
cart_list.innerHTML = result;
