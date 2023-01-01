const search = document.querySelector(".search-bar input");
const images = document.querySelectorAll(".img");

search.addEventListener("keypress", () => {
  let searcValue = search.value,
    value = searcValue.toLowerCase();

  images.forEach((image) => {
    if (image.dataset.name.includes(value)) {
      return (image.style.display = "block");
    }
    image.style.display = "none";
  });
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;
  images.forEach((image) => {
    image.style.display = "block";
  });
});
