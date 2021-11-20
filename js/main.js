const input = document.querySelector("textarea");

// Add typing animation when a key is entered
input.addEventListener("keydown", (event) => {
  const key = document.querySelector(`kbd[data-code="${event.code}"]`);

  // Avoid getting a "null" error in your console
  if (!key) {
    return;
  } else {
    key.classList.add("active");
  }

  if (event.metaKey) {
    key.classList.remove("active");
  }
});

// Remove typing animation when a key is released
input.addEventListener("keyup", (event) => {
  const key = document.querySelector(`kbd[data-code="${event.code}"]`);

  if (key) {
    key.classList.remove("active");
  }
});

// Change keys from Latin and Arabic to Mandaic on input
input.addEventListener("input", (event) => {
  // Check for a focused <textarea> element
  if (input === document.activeElement) {
    // get current text of the input textarea
    event = input.value.substring(0, input.selectionStart).length;

    // set up the cursor position
    input.setSelectionRange(event, event);

    // if "`" is typed
    if (input.value.substring(event - 1, event) === "`") {
      // replace it with "ـ"
      input.value =
        input.value.substring(0, event - 1) + `ـ ${input.value.slice(event)}`;
    }

    // if "q" is typed
    else if (
      input.value.substring(event - 1, event) === "q" ||
      input.value.substring(event - 1, event) === "Q"
    ) {
      // replace it with "ࡒ"
      input.value =
        input.value.substring(0, event - 1) + `ࡒ ${input.value.slice(event)}`;
    }

    // if "w" is typed
    else if (
      input.value.substring(event - 1, event) === "w" ||
      input.value.substring(event - 1, event) === "W"
    ) {
      // replace it with "ࡅ"
      input.value =
        input.value.substring(0, event - 1) + `ࡔ ${input.value.slice(event)}`;
    }

    // if "e" is typed
    else if (
      input.value.substring(event - 1, event) === "e" ||
      input.value.substring(event - 1, event) === "E"
    ) {
      // replace it with "ࡏ"
      input.value =
        input.value.substring(0, event - 1) + `ࡏ ${input.value.slice(event)}`;
    }

    // if "r" is typed
    else if (
      input.value.substring(event - 1, event) === "r" ||
      input.value.substring(event - 1, event) === "R"
    ) {
      // replace it with "ࡓ"
      input.value =
        input.value.substring(0, event - 1) + `ࡓ ${input.value.slice(event)}`;
    }

    // the rest is similar...
    else if (
      input.value.substring(event - 1, event) === "t" ||
      input.value.substring(event - 1, event) === "T"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡕ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "y" ||
      input.value.substring(event - 1, event) === "Y"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡈ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "u" ||
      input.value.substring(event - 1, event) === "U"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡅ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "i" ||
      input.value.substring(event - 1, event) === "I"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡉ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "o" ||
      input.value.substring(event - 1, event) === "O"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡇ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "p" ||
      input.value.substring(event - 1, event) === "P"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `࡚ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "a" ||
      input.value.substring(event - 1, event) === "A"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡀ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "s" ||
      input.value.substring(event - 1, event) === "S"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡎ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "d" ||
      input.value.substring(event - 1, event) === "D"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡃ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "f" ||
      input.value.substring(event - 1, event) === "F"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡐ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "g" ||
      input.value.substring(event - 1, event) === "G"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡂ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "h" ||
      input.value.substring(event - 1, event) === "H"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡄ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "j" ||
      input.value.substring(event - 1, event) === "J"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡖ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "k" ||
      input.value.substring(event - 1, event) === "K"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡊ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "l" ||
      input.value.substring(event - 1, event) === "L"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡋ ${input.value.slice(event)}`;
    } else if (input.value.substring(event - 1, event) === ";") {
      input.value =
        input.value.substring(0, event - 1) + `࡙ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "z" ||
      input.value.substring(event - 1, event) === "Z"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡆ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "x" ||
      input.value.substring(event - 1, event) === "X"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡗ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "c" ||
      input.value.substring(event - 1, event) === "C"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡑ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "v" ||
      input.value.substring(event - 1, event) === "V"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡘ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "b" ||
      input.value.substring(event - 1, event) === "B"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡁ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "n" ||
      input.value.substring(event - 1, event) === "N"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡍ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "m" ||
      input.value.substring(event - 1, event) === "M"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡌ ${input.value.slice(event)}`;
    } else if (input.value.substring(event - 1, event) === ",") {
      input.value =
        input.value.substring(0, event - 1) + `࡛ ${input.value.slice(event)}`;
    } else if (input.value.substring(event - 1, event) === ".") {
      input.value =
        input.value.substring(0, event - 1) + `࡞ ${input.value.slice(event)}`;
    } else if (input.value.substring(event - 1, event) === "?") {
      input.value =
        input.value.substring(0, event - 1) + `؟ ${input.value.slice(event)}`;
    }

    // update the cursor position
    input.setSelectionRange(event, event);
  }
});
