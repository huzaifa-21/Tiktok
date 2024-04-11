//=================== Selector ====================
let counter = document.querySelector(".counter");
let percent = document.querySelector(".percent");
let incrementButton = document.querySelector(".increment");
let decrementButton = document.querySelector(".decrement");
let buttons = document.querySelectorAll(".options span");

let step = 0;
let pexels = 0;
counter.innerHTML = step;

incrementButton.onclick = () => {
  if (step < 10 && step >= 0) {
    step += 1;
    pexels += 30;
    percent.style.height = `${pexels}px`;
    counter.innerHTML = step;
  }
};

decrementButton.onclick = () => {
  if (step > 0 && step <= 10) {
    step -= 1;
    pexels -= 30;
    percent.style.height = `${pexels}px`;
    counter.innerHTML = step;
  }
};

//================ handle the red color =============
[...buttons].forEach((button) => {
  button.addEventListener("click", () => {
    if (step >= 7) {
      percent.style.backgroundColor = `#f50000`;
      percent.style.boxShadow = `0 0 20px 1px #f50000`;
    } else {
      percent.style.backgroundColor = `#00d000`;
      percent.style.boxShadow = `0 0 20px 1px #00d000`;
    }
  });
});
