const preloader = () => {
  const loader = document.getElementById("preloader");

  window.addEventListener("load", () => {
    loader.style.display = "none";
  });
};

export { preloader as default };
