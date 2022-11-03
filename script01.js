let tag = document.createElement("div");

tag.classList.add("block");

let myFunction = () => {
    console.log("Hello");
}
let newTag = document.getElementById("canvas")


for (let i=0 ; i < 249 ; i++) {
    let block = document.createElement("div");
    block.className = 'block';
    document.getElementById("canvas").appendChild(block)
}

const blocks = document.querySelectorAll('div');

blocks.forEach((block) => {

  block.addEventListener('click', (e) => {
    // alert(block.id);
    e.target.style.background = 'blue';

  });
});