const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");
cartIcon.addEventListener("click", ()=>{
    cart.classList.toggle("show");
});

const asideIcon = header.firstElementChild;
const aside = document.querySelector(".myAside");
asideIcon.addEventListener("click", ()=>{
    aside.classList.toggle("showAside");
});

const closeAsideIcon = document.getElementById("closeAsideIcon");
closeAsideIcon.addEventListener("click", ()=>{
    aside.classList.toggle("showAside");
});

const addProducts = document.querySelectorAll(".products__button");
const cartItems = document.querySelector(".cart__items");
const cartBadge = document.querySelector(".header__cartBadge");
let badgeCount = 0;

addProducts.forEach(buttonAdd => {
  buttonAdd.addEventListener("click", () => {
    const product = buttonAdd.parentElement;

    const imgSrc = product.querySelector(".products__img").src;
    const name = product.querySelector(".products__title").textContent;
    const price = product.querySelector(".products__price").textContent;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart__item");
    cartItem.innerHTML = `
        <img class="cart__img" src="${imgSrc}" alt="${name}"></img>
        <p class="cart__title">${name}</p>
        <p class="cart__price">${price}</p>
        <i class="remove">
            <img class="cart__icon" src="img/Icono quitar.png" alt="Icono quitar">
        </i>
    `;

    
    if (cartItems) {
      cartItems.appendChild(cartItem);

      badgeCount++;
      if (cartBadge) {
        cartBadge.textContent = badgeCount;
        cartBadge.style.display = "inline-block";
      }
    }
  });
});

document.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove");
  if (!removeBtn) return;

  
  const cartItem = removeBtn.closest(".cart__item");
  if (cartItem) {
    cartItem.remove();

    // actualizar badge (asumiendo badgeCount y cartBadge están en scope)
    if (typeof badgeCount !== "undefined" && badgeCount > 0) {
      badgeCount--;
      if (cartBadge) {
        cartBadge.textContent = badgeCount;
        if (badgeCount === 0) cartBadge.style.display = "none";
      }
    }
    return; 
  }

  
  const asideItem = removeBtn.closest(".myAside__item");
  if (asideItem) {
    asideItem.remove();
    // no tocamos el badge si el aside no está ligado al contador
    return;
  }

});

