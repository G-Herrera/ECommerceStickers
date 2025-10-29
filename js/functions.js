alert("Hello Java!");
//Método para seleccionar objetos por ID
const title = document.getElementById("txt");
console.log(title);

//Método para seleccionar objetos por clase
const img = document.getElementsByClassName("header__logo");
console.log(img);

//Método para seleccionar etiquetas
const tag = document.getElementsByTagName("article");
console.log(tag);

//Método para seleccionar basado en un selector css
const elem = document.querySelector(".banner__text");
console.log(elem);


//Método para crear nuevos elementos
const parent = document.querySelector(".products");
const newElemento = document.createElement("section");
newElemento.setAttribute("class","new");//con este podemos generar atributos en las etiquetas
parent.append(newElemento);
console.log(newElemento);

//--------------------------------
//Attributes
const logo = document.querySelector(".header__logo");
logo.setAttribute("src", "img/Astronauta.jpg"); //podemos tambien cambiar el valor de un atributo existente
logo.setAttribute("src", "img/LogoEmpresa.png");
console.log(logo.getAttribute("src"));//con getAttribute podemos conocer el valor que tiene
console.log(logo.hasAttribute("src"));//true si contiene el atributo
//logo.removeAttribute();//Sirve para eliminat atributos en las etiquetas

//CSS Classes
const parent2 = document.querySelector(".products");
const parent3 = parent2.firstElementChild;//Selecciona el primer hijo del selector
const price = parent3.lastElementChild;
console.log(price);

price.classList.add("red");
price.classList.replace("red","blue");
price.classList.remove("blue");

//Modificar Texto
const titleTxt =  document.getElementById("titleTxt");
console.log(titleTxt.innerText);

titleTxt.innerText = "PRUEBA";

//Modificar Style
titleTxt.style.backgroundColor = "gray";

//EVENTOS
//SINTAXIS: target.addEventListener('evento', funcion);
titleTxt.addEventListener('click', () =>{
    alert("Haz hecho click!");
});



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

    
    cartItems.appendChild(cartItem);

    badgeCount++;
    cartBadge.textContent=badgeCount;
    cartBadge.style.display="inline-block";
  });


  const cartItems = document.querySelector(".cart__items"); 
});

cartItems.addEventListener("click", (event) => {
        if (event.target.closest(".remove")) {
            const itemToRemove = event.target.closest(".cart__item");
            itemToRemove.remove();
        }
        if (badgeCount > 0){
        badgeCount -- ;
        cartBadge.textContent = badgeCount;
        if (badgeCount === 0){
            cartBadge.style.display = "none";
        }
        }
    });

const iconRemove = document.querySelectorAll(".remove");
console.log(iconRemove);

iconRemove.forEach(elem =>{
    elem.addEventListener("click", () =>{
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
});


