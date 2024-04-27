let inputForm = document.querySelector("#table");
let input = document.querySelector("#inp");
let table = document.querySelector("#time");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;

  table.innerHTML = "";

  for (let i = 1; i <= 12; i++) {

    const message = `${tableOf} X ${i} = ${tableOf * i}`;

    table.innerHTML += `${message} <br>`;
  }
});

let para = document.querySelector("#para")
let mode = "light"
para.addEventListener("mouseover", () => {
  if (mode === "light") {
    mode = "dark"
    document.body.style.backgroundColor = "#222"
    document.body.style.color = "white"
  }else{
    mode = "light"
    document.body.style.backgroundColor = "grey"
    document.body.style.color = "#222"
  }
  console.log(mode);
})