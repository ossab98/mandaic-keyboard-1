const area = document.querySelector("textarea");
const keys = document.querySelectorAll(".key");
const enter = document.querySelector(".enter");
const deleteKey = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const space = document.querySelector(".space");

// Keep the cursor in the textarea when it's out of focus
function keepCursor() {
  area.focus();
  area.setSelectionRange(area.value.length, area.value.length);
}

// Click to input key
keys.forEach((key) => {
  key.addEventListener("click", () => {
    area.value += key.textContent;
    keepCursor();
  });
});

// Add a new line
enter.addEventListener("click", () => {
  area.value += "\n";
  keepCursor();
});

// Delete a single character on click
deleteKey.addEventListener("click", () => {
  area.value = area.value.slice(0, -1);
  keepCursor();
});

// Delete all characters on click
clear.addEventListener("click", () => {
  area.value = "";
  keepCursor();
});
// Add space between words
space.addEventListener("click", () => {
  area.value += " ";
  keepCursor();
});
