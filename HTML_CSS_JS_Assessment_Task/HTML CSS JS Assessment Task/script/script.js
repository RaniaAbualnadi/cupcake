$(document).ready(show_cupcakes);

var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];

function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions
  for (let i = 0; i < cup_cakes.length; i++) {
    let table = document.getElementById("cupcake-table");
    let cupcakeName = cup_cakes[i].name;
    let cupcakeCal = cup_cakes[i].calories;
    let cupcakeWeight = cup_cakes[i].weight;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerHTML = cupcakeName;
    td2.innerHTML = cupcakeCal;
    td3.innerHTML = cupcakeWeight;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
    document.getElementById("cupcake-table").appendChild(tr);

    if (cupcakeCal == "high") {
      td2.style.backgroundColor = "red";
    } else if (cupcakeCal == "medium") {
      td2.style.backgroundColor = "orange";
    } else {
      td2.style.backgroundColor = "green";
    }
  }
}
// .addEventListener("submit", function validate(e) {
//   //write code that validates the form
//   e.preventDefault()
function validate() {
  //write code that validates the form
  let allergyMsg = document.getElementById("allergy_error");
  let timeErr = document.getElementById("time_error");
  let typeErr = document.getElementById("type_error");
  let countErr = document.getElementById("count_error");
  let customErr = document.getElementById("customer_error");
  let customerName = document.getElementById("cname");
  let countNumber = document.getElementById("count");
  let typeCake = document.getElementById("type");
  let allergy = document.getElementById("Allergies");
  let deliveryTime = document.getElementById("delivery");
  let cakeIsValid = true;
  let isValid = true;
  if (customerName.value.length < 5 || customerName.value.length > 16) {
    isValid = false;
    customErr.style.display = "block";
    customerName.style.border = "1px solid red";
    customerName.parentElement.classList.add("not-valid");
    customerName.parentElement.classList.remove("valid");
  } else {
    customerName.parentElement.classList.remove("not-valid");
    customerName.parentElement.classList.add("valid");
    customErr.style.display = "none";
    customerName.style.border = "1px solid gray";
  }

  if (countNumber.value > 0 && countNumber.value <= 15) {
    countErr.style.display = "none";
    countNumber.style.border = "1px solid gray";
    countNumber.parentElement.classList.remove("not-valid");
    countNumber.parentElement.classList.add("valid");
  } else {
    isValid = false;
    countErr.style.display = "block";
    countNumber.style.border = "1px solid red";
    countNumber.parentElement.classList.add("not-valid");
    countNumber.parentElement.classList.remove("valid");
  }
  if (typeCake.value !== "none") {
    typeErr.style.display = "block";
    typeErr.classList.remove("validation-msg");
    typeCake.style.border = "1px solid green";

    typeCake.parentElement.classList.remove("not-valid");
    typeCake.parentElement.classList.add("valid");
  } else {
    isValid = false;
    typeErr.classList.add("validation-msg");
    typeErr.style.display = "none";
    typeCake.style.border = "1px solid red";
    typeCake.parentElement.classList.add("not-valid");
    typeCake.parentElement.classList.remove("valid");
  }

  if (deliveryTime.value !== "none") {
    typeErr.style.display = "block";

    typeErr.classList.add("validation-msg");
    deliveryTime.style.border = "1px solid green";
  } else {
    isValid = false;
    typeErr.style.display = "none";
    deliveryTime.style.border = "1px solid red";
  }
  if (typeCake.value == "chocolate" && allergy.value == "diaryfree") {
    typeErr.style.display = "block";

    typeErr.classList.add("validation-msg");
    typeErr.innerHTML = " this type of cake is not dairy free";
    typeCake.style.border = "1px solid red";
    allergy.style.border = "1px solid red";
    isValid = false;
    typeCake.parentElement.classList.add("not-valid");
    typeCake.parentElement.classList.remove("valid");
    cakeIsValid = false;
  } else {
    typeCake.parentElement.classList.remove("not-valid");
    typeCake.parentElement.classList.add("valid");
  }
  if (typeCake.value == "pecan" && allergy.value == "nutfree") {
    typeErr.style.display = "block";

    typeErr.classList.add("validation-msg");
    typeErr.innerHTML = "  pecan cake is not nut free";
    typeCake.style.border = "1px solid red";
    allergy.style.border = "1px solid red";
    typeCake.parentElement.classList.add("not-valid");
    typeCake.parentElement.classList.remove("valid");
    cakeIsValid = false;
    isValid = false;
  } else {
    typeCake.parentElement.classList.remove("not-valid");
    typeCake.parentElement.classList.add("valid");
  }
  if (typeCake.value == "chocolate" && deliveryTime.value == "time9") {
    typeErr.style.display = "block";

    typeErr.classList.add("validation-msg");
    typeErr.innerHTML = "  this type of cake cannot be delivered at 4 PM.";
    typeCake.style.border = "1px solid red";
    deliveryTime.style.border = "1px solid red";
    typeCake.parentElement.classList.add("not-valid");
    typeCake.parentElement.classList.remove("valid");
    cakeIsValid = false;
    isValid = false;
  } else {
    typeCake.parentElement.classList.remove("not-valid");
    typeCake.parentElement.classList.add("valid");
  }
  // if (allergy.value !== "none" && ) {
  //   typeErr.style.display = "block";
  //   allergy.style.border = "1px solid green";
  // } else {
  //   isValid = false;
  //   typeErr.style.display = "none";
  //   allergy.style.border = "1px solid red";
  // }
  if (cakeIsValid == true) {
    typeCake.parentElement.classList.remove("not-valid");
    typeCake.parentElement.classList.add("valid");
  } else {
    typeCake.parentElement.classList.add("not-valid");
    typeCake.parentElement.classList.remove("valid");
  }
  return isValid;
}

function show_storage() {
  let customerName = document.getElementById("cname").value;
  localStorage.setItem("username", customerName);
  document.getElementById("welcome").innerHTML =
    "Welcome " + localStorage.getItem("username");
}
