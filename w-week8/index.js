// var noOfFriends = 3;

// console.log(`you have ${noOfFriends} friends`);
// const obj = {
//   name: "xyz",
//   age: 20,
//   gender: "male",
//   code: "1234",
// };

// obj.name = "sidra";
// console.log(obj);

// const obje2 = { ...obj };
// obje2.name = "haya";
//
// const { name, age, ...baqaya } = obj;
// console.log(`${name}`);
// console.log(baqaya);

// console.log("Starting setTimeout example...");
// setTimeout(() => {
//   console.log("This message will be displayed after 2 seconds.");
// }, 2000); // 2000 milliseconds = 2 seconds
// console.log("setTimeout example scheduled.");

// function getData() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation (e.g., fetching data from an API)
//     setTimeout(() => {
//       const data = [1, 2, 3, 4, 5];
//       // Simulating successful completion
//       const rand = Math.floor(Math.random() * 10);
//       console.log(rand);
//       rand > 5 ? resolve(data) : reject({ message: "problem" });

//       // Simulating failure
//       // reject(new Error('Failed to fetch data'));
//     }, 2000); // Simulating a delay of 2 seconds
//   });
// }

// Consuming the Promise
// getData()
//   .then((data) => {
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });
// const variable = getData();
// console.log(variable);
// console.log("i am after problem");

// const name = "sidra";
// const obj = { name: "name" };
// console.log(obj);
