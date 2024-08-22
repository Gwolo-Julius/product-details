const productColor = document.querySelector(".product__color");
const smallHeadphones = document.querySelectorAll(".color__choice");
const bigImage = document.querySelector(".big__img");
const activeDiv = document.querySelectorAll(".active__border");
const colors = document.querySelectorAll(".colors");

const changeImage = () => {
  smallHeadphones.forEach((image) => {
    image.addEventListener("click", () => {
      bigImage.src = image.src;

      activeDiv.forEach((x) => {
        x.addEventListener("mouseover", () => {
          if (!x.style.borderColor === "red") {
            x.style.borderColor = "";
          } else {
            x.style.borderColor = "red";
          }
        });
        x.addEventListener("mouseout", () => {
          x.style.borderColor = "";
        });
      });
    });
  });
};
changeImage();
