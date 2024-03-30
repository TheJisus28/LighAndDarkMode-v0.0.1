const COLORS = {
  light: "#fff",
  dark: "#000",
};

const btnLight = document.querySelector("#btn-light");
const btnDark = document.querySelector("#btn-dark");

btnLight.addEventListener("click", () => {
  changeColor(COLORS.light);
});

btnDark.addEventListener("click", () => {
  changeColor(COLORS.dark);
});

function changeColor(color) {
  document.body.style.backgroundColor = color;
  document.body.firstElementChild.style.backgroundColor = color;
}
