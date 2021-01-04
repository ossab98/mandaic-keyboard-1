const area = document.querySelector("textarea");

area.addEventListener("keydown", (event) => {
  if (event.key === "q" || event.key === "Q") {
    setTimeout(() => {
      event.target.value += "ࡒ";
    }, 0);
    event.preventDefault();
  } else if (event.key === "w" || event.key === "W") {
    setTimeout(() => {
      event.target.value += "ࡅ";
    }, 0);
    event.preventDefault();
  } else if (event.key === "e" || event.key === "E") {
    setTimeout(() => {
      event.target.value += "ࡏ";
    }, 0);
    event.preventDefault();
  }
});
