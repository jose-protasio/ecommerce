const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Cappucino Tradicional",
        price: "Detalhes",
        colors: [
            {
                code: "black",
                img: "img/cafe1.jpg",
            },
            {
                code: "darkblue",
                img: "img/cafe1.jpg",
            },
        ],
    },
    
    {
        id: 2,
        title: "Croissant de Chocolate",
        price: "Detalhes",
        colors: [
            {
                code: "lightgray",
                img: "img/croissant.jpg",
            },
            {
                code: "green",
                img: "img/croissant.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Bolo de Cenoura com Chocolate",
        price: "Detalhes",
        colors: [
            {
                code: "lightgray",
                img: "img/cenoura-chocolate.jpeg",
            },
            {
                code: "green",
                img: "img/cenoura-chocolate.jpeg",
            },
        ],
    },
    {
        id: 4,
        title: "Escondidinho de Aipim",
        price: "Detalhes",
        colors: [
            {
                code: "black",
                img: "img/escondidinho-aipim.jpg",
            },
            {
                code: "lightgray",
                img: "img/escondidinho-aipim.jpg",
            },
        ],
    },
    {
        id: 5,
        title: "Donuts Morango",
        price: "Detalhes",
        colors: [
            {
                code: "gray",
                img: "img/tortinha-morango.jpg",
            },
            {
                code: "black",
                img: "img/tortinha-morango.jpg",
            },
        ],
    },
    {
        id: 6,
        title: "Donuts de Chocolate",
        price: "Detalhes",
        colors: [
            {
                code: "gray",
                img: "img/donuts-chocolate.jpg",
            },
            {
                code: "black",
                img: "img/donuts-chocolate.jpg",
            },
        ],
    },
];

//here it defines that the first product will appear on the screen by default
let choosenProduct = products[0];

//here the propety *querySelector* selects the elements we made.
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

//here it listens the click, then slide it
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new color
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

//it changes the color of the size buttons
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// productButton.addEventListener("click", () =>{
//     payment.style.display="flex";
// });

close.addEventListener("click", () =>{
    payment.style.display="none";
});

function search() {
    var searchTerm = document.getElementById("search-input").value;
    document.getElementById("search-button").addEventListener("click", function() {
        search();
      });
  }
  




