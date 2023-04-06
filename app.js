const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Coluna de fogo",
        price: "Grito de Guerra",
        colors: [
            {
                code: "black",
                img: "img/Coluna de  fogo2.jpg",
            },
            {
                code: "darkblue",
                img: "img/Coluna de  fogo2.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "Sarça ardente",
        price: "Grito de Guerra",
        colors: [
            {
                code: "lightgray",
                img: "img/sarça.png",
            },
            {
                code: "green",
                img: "img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Querubins",
        price: "Grito de Guerra",
        colors: [
            {
                code: "lightgray",
                img: "img/blazer.png",
            },
            {
                code: "green",
                img: "img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Lírios do vale",
        price: "Grito de Guerra",
        colors: [
            {
                code: "black",
                img: "img/Lírios do vale.jpg",
            },
            {
                code: "lightgray",
                img: "img/Lírios do vale.jpg",
            },
        ],
    },
    {
        id: 5,
        title: "Rosa de Saron",
        price: "Grito de Guerra",
        colors: [
            {
                code: "gray",
                img: "img/Rosa de Saron.jpg",
            },
            {
                code: "black",
                img: "img/hippie2.png",
            },
        ],
    },
    {
        id: 6,
        title: "Águias do monte",
        price: "Grito de Guerra",
        colors: [
            {
                code: "gray",
                img: "img/aguia.jpg",
            },
            {
                code: "black",
                img: "img/aguia.jpg",
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
        currentProductPrice.textContent = "$" + choosenProduct.price;
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

productButton.addEventListener("click", () =>{
    payment.style.display="flex";
});

close.addEventListener("click", () =>{
    payment.style.display="none";
});

function search() {
    var searchTerm = document.getElementById("search-input").value;
    document.getElementById("search-button").addEventListener("click", function() {
        search();
      });
      
  }
  




