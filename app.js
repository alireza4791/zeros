let tag;
let character;
let container = document.querySelector(".container");
let wrap = document.querySelector(".wrap");

for (let i = 0; i < 364; i++) {
  tag = document.createElement("span");
  character = document.createTextNode("0");
  tag.appendChild(character);
  wrap.appendChild(tag);
}

$(".container span").hover(
  function () {
    const myTimeout = setTimeout(() => {
      $(this)[0].innerText = "1";
    }, 400);
  },
  function () {
    const myTimeout = setTimeout(() => {
      $(this)[0].innerText = "0";
    }, 400);
  }
);
