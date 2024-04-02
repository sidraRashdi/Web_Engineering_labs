let img = [
  './three.svg" alt="image1/"',
  './two.svg" alt="image1/"',
  ,
  './two.svg" alt="image1/"',
];
let imageDiv = document.querySelector(".imageDiv");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let count = 0;

next.addEventListener("click", () => {
  if (count <= 1) {
    image = `<img src=${img[count]}/>`;
    console.log(img[count]);

    imageDiv.innerHTML = image;
    count++;
  } else {
    imageDiv.innerHTML = "noImage";
  }
});
let count1 = img.length;
prev.addEventListener("click", () => {
  if (count1 >= 1) {
    console.log(img[count]);
    image = `<img src='${img[count]}'/>`;
    imageDiv.innerHTML = image;
    count++;
  } else {
    imageDiv.innerHTML = "noImage";
  }
});
