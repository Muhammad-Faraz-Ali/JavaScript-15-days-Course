//Question-01 Closure

// function parent(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const result = parent(5);
// console.log(result(5));

//Question-02 isFound Element

function isFound(arr, index, searchedNum) {
  if (index === arr.length) {
    console.log(index);
    return false;
  } else if (arr[index] === searchedNum) {
    return true;
  }
  return isFound(arr, index + 1, searchedNum);
}
let arr = [1, 2, 3, 4, -90, 0, 10];
let res = isFound(arr, 0, 100);
console.log("res", res);

//Question-03 Add Paragraph element

// function addParagraph(text) {
//   let body = document.getElementsByTagName("body")[0];
//   let para = document.createElement("p");
//   para.textContent = text;
//   body.appendChild(para);
// }

// addParagraph("This is new paragraph");

//Question-04 Add li element

// function addLiElement(text) {
//   let list = document.getElementById("list");
//   let li = document.createElement("li");
//   li.textContent = text;
//   list.appendChild(li);
// }
// addLiElement("Apple");

//Question-05 Change background color
// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }
// let element = document.getElementById("helloWord");
// changeBackgroundColor(element, "red");

//Quwstion-06 Storing object into localStorage

// function storeObject(key, object) {
//   let jsonObj = JSON.stringify(object);
//   localStorage.setItem(key, jsonObj);
// }
// let object = {
//   name: "Muhammmad Faraz Ali",
//   age: 22,
//   height: 5.8,
//   cell: 03154112707,
// };
// storeObject("student", object);

//Question-07 Retrieving object from localStorage

// function retrieveObject(key) {
//   let obj = localStorage.getItem(key);
//   let parsedObj = JSON.parse(obj);
//   return parsedObj;
// }
//const obj = retrieveObject("student");
// console.log(obj);

//Question-08 Storing and Retrieving object into | from localStorage

// function storeAndRetrieveObj(object) {
//   //Storing object keys into localStorage
//   for (let key in object) {
//     localStorage.setItem(key, JSON.stringify(object[key]));
//   }

//   //Retrieving stored objects keys into an object
//   let newObj = {};
//   let length = localStorage.length;
//   for (let i = 0; i < length; i++) {
//     let key = localStorage.key(i);
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   }
//   return newObj;
// }
// let object = {
//   name: "Muhammmad Faraz Ali",
//   age: 22,
//   height: 5.8,
//   cell: 03154112707,
// };
// const obj = storeAndRetrieveObj(object);
// console.log(obj);
