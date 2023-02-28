const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "img/air.png",
            },
            {
                code: "darkblue",
                img: "img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "img/jordan.png",
            },
            {
                code: "green",
                img: "img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer ",
        price: 109,
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
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "img/crater.png",
            },
            {
                code: "lightgray",
                img: "img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "img/hippie.png",
            },
            {
                code: "black",
                img: "img/hippie2.png",
            },
        ],
    },
];

//here it defines that the first product will appear on the screen by default
let choosenProduct = products[0];

//here the propety *querySelector selects the elements we made.
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