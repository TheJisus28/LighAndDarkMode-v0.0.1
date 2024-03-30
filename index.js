const COLORS = {
  light: "#fff",
  dark: "#000",
};

const btnLight = document.querySelector("#btn-light");
const btnDark = document.querySelector("#btn-dark");

btnLight.addEventListener("click", () => {
  cambiarColor(COLORS.light);
});

btnDark.addEventListener("click", () => {
  cambiarColor(COLORS.dark);
});

function cambiarColor(color) {
  document.body.style.backgroundColor = color;
  document.body.firstElementChild.style.backgroundColor = color;
}
