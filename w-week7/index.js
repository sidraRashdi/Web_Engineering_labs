// function customMap(array, callback) {
//   var newArray = []; // Create a new array to store the mapped values
//   for (var i = 0; i < array.length; i++) {
//     // Call the callback function for each element and push the result to the new array
//     newArray.push(callback(array[i], i, array));
//   }
//   return newArray; // Return the new array
// }
// // Example usage:
// var numbers = [1, 2, 3, 4, 5];
// // Using the custom map function
// var doubledNumbers = customMap(numbers, function (num) {
//   return num * 2;
// });
// console.log(doubledNumbers); // Output: [2,
// Array.prototype.customMap = customMap;
let maindiv = document.querySelector(".maindiv");

function Add() {
  var box = document.createElement("div");
  box.classList.add("highlight");
  maindiv.appendChild(box);
}
function Delete() {
  if (maindiv.children.length > 0) {
    maindiv.removeChild(maindiv.lastChild);
  }
}
var selectFlex = document.getElementById("flexBox");
var optionDropdownsDiv = document.getElementById("divForOptions");
selectFlex.addEventListener("change", function (event) {
  var selectedItem = event.target.value;
  console.log(selectedItem);

  var selectForOption = document.createElement("select");
  // selectFlex.innerHTML = "";
  selectForOption.name = "options";

  switch (selectedItem) {
    case "align-items":
      selectForOption.add(new Option("flex-start", "flex-start"));
      selectForOption.add(new Option("flex-end", "flex-end"));
      break;
    case "align-content":
      maindiv.style.display = "flex";
      maindiv.style.alignContent = "center";
      selectForOption.add(new Option("flex-start", "flex-start"));
      selectForOption.add(new Option("flex-end", "flex-end"));
      break;
    case "justify-content":
      selectForOption.add(new Option("flex-start", "flex-start"));
      selectForOption.add(new Option("flex-end", "flex-end"));
      selectForOption.add(new Option("center", "center"));
      selectForOption.add(new Option("space-between", "space-between"));
      selectForOption.add(new Option("space-around", "space-arouund"));
      selectForOption.add(new Option("space-evenly", "space-evenly"));
      selectForOption.addEventListener("change", function (event) {
        var Selected = event.target.value;

        switch (Selected) {
          case "center":
            maindiv.style.display = "flex";
            maindiv.style.justifyContent = "center";
            break;
          case "space-between":
            maindiv.style.display = "flex";
            maindiv.style.justifyContent = "space-between";
            break;
          case "space-around":
            maindiv.style.display = "flex";
            maindiv.style.justifyContent = "space-around";
            break;
          case "space-evenly":
            maindiv.style.display = "flex";
            maindiv.style.justifyContent = "space-evenly";
            break;
          case "flex-end":
            maindiv.style.display = "flex";
            maindiv.style.justifyContent = "flex-end";
            break;
          case "flex-start":
            maindiv.style.display = "flex";
            maindiv.style.justifyContent = "flex-start";
            break;
          default:
            console.log("No options added. Invalid selectedItem value.");
        }
      });
      break;
    case "flex-wrap":
      maindiv.style.display = "flex";
      maindiv.style.flexWrap = "justify-content";
      selectForOption.add(new Option("flex-start", "flex-start"));
      selectForOption.add(new Option("flex-end", "flex-end"));
      break;
    default:
      console.log("No options added. Invalid selectedItem value.");
  }

  optionDropdownsDiv.appendChild(selectForOption);
});
