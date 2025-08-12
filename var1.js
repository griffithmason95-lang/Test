document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("left-Btn");

  button.addEventListener("click", () => {
    // Open page.html in a new tab
    window.open("Var1.html");

    // Or open in the same tab:
    // window.location.href = "page.html";
  });
});


