//quick
//js controlling Html ad css

// document object in js
// js provides this objects document
// this documents consists of html elements and css styles

// documents consists functions we call it as methods

//select a HMTL element using ID

// let button = document.getElementById("add-button");
// //adding event listener to the button
// function addContent() {
//   let div = document.getElementById("content-container");
//   div.textContent = "Hello World";
//   div.style.color = "white";
//   div.style.backgroundColor = "black";
// }
// button.addEventListener("click", addContent);

// query
// we can select , add events we can modify content and style
//select the input field
let inputField = document.getElementById("todo-input");
let inputValue = "";
inputField.addEventListener("input",(event)=>{
  // console.log(event.target.value,"event.target.value");
  inputValue = event.target.value;//cr
});

//select the Ul container
let ulContainer = document.getElementById("todo-list-container");

// select the Add button
let addButton = document.getElementById("add-button");
// console.log(addButton);
let count = 0; //1


function handleAddTodo() {
  console.log("addTodo");
  console.log(inputValue,"inputValue");

  let li = document.createElement("li");
  let button = document.createElement("button");
  button.textContent = "Mark Complete";
  li.textContent = inputValue;
  //add unquie ID
  li.id = "todo-item-" + count;
  count++;
  ulContainer.appendChild(li);
  li.appendChild(button);
  //clear the input field
  inputField.value = "";
  inputValue = "";

}
addButton.addEventListener("click", handleAddTodo);
