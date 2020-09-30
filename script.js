let lastNumber = 42;

addButton(1);

function addButton(i) {
  let output = document.getElementById("output");
  let button = document.createElement("button");
  button.textContent = "button " + i;
  if (i % 3 == 0) {
    button.style.background = "green";
    button.setAttribute("data-number", i);

    button.addEventListener("click", function () {
      let nextNumber = Number(button.getAttribute("data-number")) + 1;
      button.setAttribute("data-number", nextNumber);
      button.textContent = "button " + nextNumber;
    });
  }
  output.append(button);
  i = i + 1;
  if (i <= lastNumber) {
    addButton(i);
  }
}

let add_button = document.getElementById("add");
add_button.addEventListener("click", function () {
  lastNumber = lastNumber + 1;
  addButton(lastNumber);
});

try {
  let m = 5;
  if (m > 4) {
    throw "M is larger than four";
  }
  console.log(m);
} catch (e) {
  alert(e);
}
