document.querySelector(".child-1").onclick = handleClick;
document.querySelector(".child-2").onclick = handleClick;
document.querySelector(".child-3").onclick = handleClick;
document.querySelector(".child-4").onclick = handleClick;
document.querySelector(".child-5").onclick = handleClick;

function handleClick(e) {
  let element = e.target;
  const parent = document.querySelector(".main-container");

  Array.from(parent.children).forEach((child) => {
    child.style.width = "10%";
  });
  element.style.width = "70%";
}
