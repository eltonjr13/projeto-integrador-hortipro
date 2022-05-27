var scrolling = false;
let step = 400;

const scrollLeftHorta = document.querySelector(".scroll_left--horta");
const scrollRightHorta = document.querySelector(".scroll_right--horta");

const scrollLeftMercearia = document.querySelector(".scroll_left--mercearia");
const scrollRightMercearia = document.querySelector(".scroll_right--mercearia");

const listaHorta = document.querySelector("#horta-produtos");
const listaMercearia = document.querySelector("#mercearia-produtos");

scrollLeftHorta.addEventListener("click", (event) => {
  event.preventDefault();
  listaHorta.scrollBy({
    left: -step,
    behavior: "smooth",
  });
});

scrollRightHorta.addEventListener("click", (event) => {
  event.preventDefault();
  listaHorta.scrollBy({
    left: step,
    behavior: "smooth",
  });
});

scrollLeftMercearia.addEventListener("click", (event) => {
  event.preventDefault();
  listaMercearia.scrollBy({
    left: -step,
    behavior: "smooth",
  });
});

scrollRightMercearia.addEventListener("click", (event) => {
  event.preventDefault();
  listaMercearia.scrollBy({
    left: step,
    behavior: "smooth",
  });
});
