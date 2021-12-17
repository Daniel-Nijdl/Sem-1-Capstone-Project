const url = "/api/v1/cart";
const wrapper = document.querySelector(".wrapper");

async function cart() {
  try {
    console.log('test');
    const {
      data: { cart },
    } = await axios.get(url);
    console.log(cart);
    const tempCart = cart.items
      .map(async (each) => {
        console.log(each);
        const item = await axios.get(`/api/v1/products/${each.id}`);
        console.log(item);
        return `
      <div class="box">
      <img src="${item.image}" alt="${item.name}" class="prod-img"/>
      <span class="caption">${item.name}</span><span class="caption price">${item.name}</span>
      </div>`;
      })
      .join("");
    wrapper.innerHTML = tempCart;
  } catch (error) {
    console.log(error);
  }
}

cart();
