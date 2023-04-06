const images = ["img/IMG-20210829-WA0068.jpg", "img/IMG-20210829-WA0070.jpg", "img/IMG-20210829-WA0100.jpg"];
let currentImageIndex = 0;

const button = document.getElementById("btn");
const image = document.getElementById("image");

button.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  image.src = images[currentImageIndex];
});
