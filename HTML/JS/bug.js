document.getElementById("neteja").addEventListener("click", () => {
  let fetes = document.querySelectorAll(".fet");

  fetes.forEach(tasca => {
    tasca.remove();
  });
});