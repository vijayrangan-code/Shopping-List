// getting elements for needItems

let inputItem = document.getElementById("input-item");
let needBtn = document.getElementById("need-btn");
let needContainer = document.getElementById("need-container");

// console.log(inputItem.value);
// console.log(needBtn);
// console.log(needContainer);

// getting element for Have Items
let haveBtn = document.getElementById("have-btn");
let haveContainer = document.getElementById("have-container");

// console.log(haveBtn);
// console.log(haveContainer);

needBtn.addEventListener("click", () => {
  //  creating li
  let newFoodItemEl = document.createElement("li");

  // creating a div in inside li
  let mainDiv = document.createElement("div");

  //  creating a button for delete exsisting Item
  let insideDivBtn = document.createElement("div");

  // using font awsome icon for Delete button
  insideDivBtn.innerHTML = `<i class="fa fa-xmark"></i>`;

  //  append both child element to parent element
  newFoodItemEl.append(mainDiv, insideDivBtn);

  // console.log(insideDivBtn.parentElement);

  //  setattribute (function) in  parent element (insideDivBtn)
  insideDivBtn.parentElement.setAttribute("onclick", "removeItem(event)");

  // assigning  input value for mainDiv
  mainDiv.textContent = inputItem.value;

  // assigning exsiting classname (Css style) for element
  newFoodItemEl.className = "item-list";

  newFoodItemEl.append(mainDiv);
  newFoodItemEl.append(insideDivBtn);

  needContainer.append(newFoodItemEl);

  //Resetting Input Field

  inputItem.value = "";

  if(inputItem.value == ""){
    alert("Enter your need food name")
    // needContainer.remove();
    inputItem.value.remove();

  }

//   console.log(inputItem.value);
});

haveBtn.addEventListener("click", () => {
  let newFoodItemEl1 = document.createElement("li");

  let mainDiv1 = document.createElement("div");

  let insideDivBtn1 = document.createElement("div");

  insideDivBtn1.innerHTML = `<i class="fa fa-xmark"></i>`;

  newFoodItemEl1.append(mainDiv1, insideDivBtn1);

  insideDivBtn1.parentElement.setAttribute("onclick", "removeItem(event)");

  mainDiv1.textContent = inputItem.value;

  newFoodItemEl1.className = "item-list1";

  newFoodItemEl1.append(mainDiv1);
  newFoodItemEl1.append(insideDivBtn1);

  haveContainer.append(newFoodItemEl1);

  //Resetting Input Field

  inputItem.value = "";

//   console.log(inputItem.value);

if(inputItem.value == ""){
    alert("Enter your have food name")
    
  }
});

// this onclick function used for delete exsiting list in the element.
function removeItem(event) {

    console.log(event.target.parentNode.parentNode);
   
    //  create a variable for remove element
  let existingList = event.target.parentNode.parentNode;
  
//    using remove method 
  existingList.remove();
}
