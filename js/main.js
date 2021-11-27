const input = document.querySelector("textarea");

// Add typing animation when a key is entered
input.addEventListener("keydown", (event) => {
  const key = document.querySelector(`kbd[data-code="${event.code}"]`);

  // Avoid getting a "null" error in your console
  if (!key) {
    return;
  }

  key.classList.add("active");

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

// Change keys from Latin to Mandaic on input
input.addEventListener("input", (event) => {
  // Check for a focused <textarea> element
  if (input === document.activeElement) {
    // Get current text of the input textarea
    event = input.value.substring(0, input.selectionStart).length;

    // Set up the cursor position
    input.setSelectionRange(event, event);

    // If "`"
    if (input.value.substring(event - 1, event) === "`") {
      // Change to "ـ"
      input.value = `${input.value.substring(0, event - 1)}ـ${input.value.slice(
        event
      )}`;
    }

    // If "q"
    else if (
      input.value.substring(event - 1, event) === "q" ||
      input.value.substring(event - 1, event) === "Q"
    ) {
      // Change to "ࡒ"
      input.value = `${input.value.substring(0, event - 1)}ࡒ${input.value.slice(
        event
      )}`;
    }

    // If "w"
    else if (
      input.value.substring(event - 1, event) === "w" ||
      input.value.substring(event - 1, event) === "W"
    ) {
      // Change to "ࡅ"
      input.value = `${input.value.substring(0, event - 1)}ࡔ${input.value.slice(
        event
      )}`;
    }

    // If "e"
    else if (
      input.value.substring(event - 1, event) === "e" ||
      input.value.substring(event - 1, event) === "E"
    ) {
      // Change to "ࡏ"
      input.value = `${input.value.substring(0, event - 1)}ࡏ${input.value.slice(
        event
      )}`;
    }

    // If "r"
    else if (
      input.value.substring(event - 1, event) === "r" ||
      input.value.substring(event - 1, event) === "R"
    ) {
      // Change to "ࡓ"
      input.value = `${input.value.substring(0, event - 1)}ࡓ${input.value.slice(
        event
      )}`;
    }

    // If "t"
    else if (
      input.value.substring(event - 1, event) === "t" ||
      input.value.substring(event - 1, event) === "T"
    ) {
      // Change to "ࡕ"
      input.value = `${input.value.substring(0, event - 1)}ࡕ${input.value.slice(
        event
      )}`;
    }

    // If "y"
    else if (
      input.value.substring(event - 1, event) === "y" ||
      input.value.substring(event - 1, event) === "Y"
    ) {
      // Change to "ࡈ"
      input.value = `${input.value.substring(0, event - 1)}ࡈ${input.value.slice(
        event
      )}`;
    }

    // If "u"
    else if (
      input.value.substring(event - 1, event) === "u" ||
      input.value.substring(event - 1, event) === "U"
    ) {
      // Change to "ࡅ"
      input.value = `${input.value.substring(0, event - 1)}ࡅ${input.value.slice(
        event
      )}`;
    }

    // If "i"
    else if (
      input.value.substring(event - 1, event) === "i" ||
      input.value.substring(event - 1, event) === "I"
    ) {
      // Change to "ࡉ"
      input.value = `${input.value.substring(0, event - 1)}ࡉ${input.value.slice(
        event
      )}`;
    }

    // If "o"
    else if (
      input.value.substring(event - 1, event) === "o" ||
      input.value.substring(event - 1, event) === "O"
    ) {
      // Change to "ࡇ"
      input.value = `${input.value.substring(0, event - 1)}ࡇ${input.value.slice(
        event
      )}`;
    }

    // If "p"
    else if (
      input.value.substring(event - 1, event) === "p" ||
      input.value.substring(event - 1, event) === "P"
    ) {
      // Change to "࡚"
      input.value = `${input.value.substring(0, event - 1)}࡚${input.value.slice(
        event
      )}`;
    }

    // If "a"
    else if (
      input.value.substring(event - 1, event) === "a" ||
      input.value.substring(event - 1, event) === "A"
    ) {
      // Change to "ࡀ"
      input.value = `${input.value.substring(0, event - 1)}ࡀ${input.value.slice(
        event
      )}`;
    }

    // If "s"
    else if (
      input.value.substring(event - 1, event) === "s" ||
      input.value.substring(event - 1, event) === "S"
    ) {
      // Change to "ࡎ"
      input.value = `${input.value.substring(0, event - 1)}ࡎ${input.value.slice(
        event
      )}`;
    }

    // If "d"
    else if (
      input.value.substring(event - 1, event) === "d" ||
      input.value.substring(event - 1, event) === "D"
    ) {
      // Change to "ࡃ"
      input.value = `${input.value.substring(0, event - 1)}ࡃ${input.value.slice(
        event
      )}`;
    }

    // If "f"
    else if (
      input.value.substring(event - 1, event) === "f" ||
      input.value.substring(event - 1, event) === "F"
    ) {
      // Change to "ࡐ"
      input.value = `${input.value.substring(0, event - 1)}ࡐ${input.value.slice(
        event
      )}`;
    }

    // If "g"
    else if (
      input.value.substring(event - 1, event) === "g" ||
      input.value.substring(event - 1, event) === "G"
    ) {
      // Change to "ࡂ"
      input.value = `${input.value.substring(0, event - 1)}ࡂ${input.value.slice(
        event
      )}`;
    }

    // If "h"
    else if (
      input.value.substring(event - 1, event) === "h" ||
      input.value.substring(event - 1, event) === "H"
    ) {
      // Change to "ࡄ"
      input.value = `${input.value.substring(0, event - 1)}ࡄ${input.value.slice(
        event
      )}`;
    }

    // If "j"
    else if (
      input.value.substring(event - 1, event) === "j" ||
      input.value.substring(event - 1, event) === "J"
    ) {
      // Change to "ࡖ"
      input.value = `${input.value.substring(0, event - 1)}ࡖ${input.value.slice(
        event
      )}`;
    }

    // If "k"
    else if (
      input.value.substring(event - 1, event) === "k" ||
      input.value.substring(event - 1, event) === "K"
    ) {
      // Change to "ࡊ"
      input.value = `${input.value.substring(0, event - 1)}ࡊ${input.value.slice(
        event
      )}`;
    }

    // If "l"
    else if (
      input.value.substring(event - 1, event) === "l" ||
      input.value.substring(event - 1, event) === "L"
    ) {
      // Change to "ࡋ"
      input.value = `${input.value.substring(0, event - 1)}ࡋ${input.value.slice(
        event
      )}`;
    }

    // If ";"
    else if (input.value.substring(event - 1, event) === ";") {
      // Change to "࡙"
      input.value = `${input.value.substring(0, event - 1)}࡙${input.value.slice(
        event
      )}`;
    }

    // If "z"
    else if (
      input.value.substring(event - 1, event) === "z" ||
      input.value.substring(event - 1, event) === "Z"
    ) {
      // Change to "ࡆ"
      input.value = `${input.value.substring(0, event - 1)}ࡆ${input.value.slice(
        event
      )}`;
    }

    // If "x"
    else if (
      input.value.substring(event - 1, event) === "x" ||
      input.value.substring(event - 1, event) === "X"
    ) {
      // Change to "ࡗ"
      input.value = `${input.value.substring(0, event - 1)}ࡗ${input.value.slice(
        event
      )}`;
    }

    // If "c"
    else if (
      input.value.substring(event - 1, event) === "c" ||
      input.value.substring(event - 1, event) === "C"
    ) {
      // Change to "ࡑ"
      input.value = `${input.value.substring(0, event - 1)}ࡑ${input.value.slice(
        event
      )}`;
    }

    // If "v"
    else if (
      input.value.substring(event - 1, event) === "v" ||
      input.value.substring(event - 1, event) === "V"
    ) {
      // Change to "ࡘ"
      input.value = `${input.value.substring(0, event - 1)}ࡘ${input.value.slice(
        event
      )}`;
    }

    // If "b"
    else if (
      input.value.substring(event - 1, event) === "b" ||
      input.value.substring(event - 1, event) === "B"
    ) {
      // Change to "ࡁ"
      input.value = `${input.value.substring(0, event - 1)}ࡁ${input.value.slice(
        event
      )}`;
    }

    // If "n"
    else if (
      input.value.substring(event - 1, event) === "n" ||
      input.value.substring(event - 1, event) === "N"
    ) {
      // Change to "ࡍ"
      input.value = `${input.value.substring(0, event - 1)}ࡍ${input.value.slice(
        event
      )}`;
    }

    // If "m"
    else if (
      input.value.substring(event - 1, event) === "m" ||
      input.value.substring(event - 1, event) === "M"
    ) {
      // Change to "ࡌ"
      input.value = `${input.value.substring(0, event - 1)}ࡌ${input.value.slice(
        event
      )}`;
    }

    // If ","
    else if (input.value.substring(event - 1, event) === ",") {
      // Change to "࡛"
      input.value = `${input.value.substring(0, event - 1)}࡛${input.value.slice(
        event
      )}`;
    }

    // If "."
    else if (input.value.substring(event - 1, event) === ".") {
      // Change to "࡞"
      input.value = `${input.value.substring(0, event - 1)}࡞${input.value.slice(
        event
      )}`;
    }

    // If "?"
    else if (input.value.substring(event - 1, event) === "?") {
      // Change to "؟"
      input.value = `${input.value.substring(0, event - 1)}؟${input.value.slice(
        event
      )}`;
    }

    // Update the cursor position
    input.setSelectionRange(event, event);
  }
});
