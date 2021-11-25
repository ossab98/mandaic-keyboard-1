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

// Change keys from Latin to Mandaic on input
input.addEventListener("input", (event) => {
  // Check for a focused <textarea> element
  if (input === document.activeElement) {
    // get current text of the input textarea
    event = input.value.substring(0, input.selectionStart).length;

    // set up the cursor position
    input.setSelectionRange(event, event);

    // if "`"
    if (input.value.substring(event - 1, event) === "`") {
      // change to "ـ"
      input.value =
        input.value.substring(0, event - 1) + `ـ${input.value.slice(event)}`;
    }

    // if "q"
    else if (
      input.value.substring(event - 1, event) === "q" ||
      input.value.substring(event - 1, event) === "Q"
    ) {
      // change to "ࡒ"
      input.value =
        input.value.substring(0, event - 1) + `ࡒ${input.value.slice(event)}`;
    }

    // if "w"
    else if (
      input.value.substring(event - 1, event) === "w" ||
      input.value.substring(event - 1, event) === "W"
    ) {
      // change to "ࡅ"
      input.value =
        input.value.substring(0, event - 1) + `ࡔ${input.value.slice(event)}`;
    }

    // if "e"
    else if (
      input.value.substring(event - 1, event) === "e" ||
      input.value.substring(event - 1, event) === "E"
    ) {
      // change to "ࡏ"
      input.value =
        input.value.substring(0, event - 1) + `ࡏ${input.value.slice(event)}`;
    }

    // if "r"
    else if (
      input.value.substring(event - 1, event) === "r" ||
      input.value.substring(event - 1, event) === "R"
    ) {
      // change to "ࡓ"
      input.value =
        input.value.substring(0, event - 1) + `ࡓ${input.value.slice(event)}`;
    }

    // if "t"
    else if (
      input.value.substring(event - 1, event) === "t" ||
      input.value.substring(event - 1, event) === "T"
    ) {
      // change to "ࡕ"
      input.value =
        input.value.substring(0, event - 1) + `ࡕ${input.value.slice(event)}`;
    }

    // if "y"
    else if (
      input.value.substring(event - 1, event) === "y" ||
      input.value.substring(event - 1, event) === "Y"
    ) {
      // change to "ࡈ"
      input.value =
        input.value.substring(0, event - 1) + `ࡈ${input.value.slice(event)}`;
    }

    // if "u"
    else if (
      input.value.substring(event - 1, event) === "u" ||
      input.value.substring(event - 1, event) === "U"
    ) {
      // change to "ࡅ"
      input.value =
        input.value.substring(0, event - 1) + `ࡅ${input.value.slice(event)}`;
    }

    // if "i"
    else if (
      input.value.substring(event - 1, event) === "i" ||
      input.value.substring(event - 1, event) === "I"
    ) {
      // change to "ࡉ"
      input.value =
        input.value.substring(0, event - 1) + `ࡉ${input.value.slice(event)}`;
    }

    // if "o"
    else if (
      input.value.substring(event - 1, event) === "o" ||
      input.value.substring(event - 1, event) === "O"
    ) {
      // change to "ࡇ"
      input.value =
        input.value.substring(0, event - 1) + `ࡇ${input.value.slice(event)}`;
    }

    // if "p"
    else if (
      input.value.substring(event - 1, event) === "p" ||
      input.value.substring(event - 1, event) === "P"
    ) {
      // change to "࡚"
      input.value =
        input.value.substring(0, event - 1) + `࡚${input.value.slice(event)}`;
    }

    // if "a"
    else if (
      input.value.substring(event - 1, event) === "a" ||
      input.value.substring(event - 1, event) === "A"
    ) {
      // change to "ࡀ"
      input.value =
        input.value.substring(0, event - 1) + `ࡀ${input.value.slice(event)}`;
    }

    // if "s"
    else if (
      input.value.substring(event - 1, event) === "s" ||
      input.value.substring(event - 1, event) === "S"
    ) {
      // change to "ࡎ"
      input.value =
        input.value.substring(0, event - 1) + `ࡎ${input.value.slice(event)}`;
    }

    // if "d"
    else if (
      input.value.substring(event - 1, event) === "d" ||
      input.value.substring(event - 1, event) === "D"
    ) {
      // change to "ࡃ"
      input.value =
        input.value.substring(0, event - 1) + `ࡃ${input.value.slice(event)}`;
    }

    // if "f"
    else if (
      input.value.substring(event - 1, event) === "f" ||
      input.value.substring(event - 1, event) === "F"
    ) {
      // change to "ࡐ"
      input.value =
        input.value.substring(0, event - 1) + `ࡐ${input.value.slice(event)}`;
    }

    // if "g"
    else if (
      input.value.substring(event - 1, event) === "g" ||
      input.value.substring(event - 1, event) === "G"
    ) {
      // change to "ࡂ"
      input.value =
        input.value.substring(0, event - 1) + `ࡂ${input.value.slice(event)}`;
    }

    // if "h"
    else if (
      input.value.substring(event - 1, event) === "h" ||
      input.value.substring(event - 1, event) === "H"
    ) {
      // change to "ࡄ"
      input.value =
        input.value.substring(0, event - 1) + `ࡄ${input.value.slice(event)}`;
    }

    // if "j"
    else if (
      input.value.substring(event - 1, event) === "j" ||
      input.value.substring(event - 1, event) === "J"
    ) {
      // change to "ࡖ"
      input.value =
        input.value.substring(0, event - 1) + `ࡖ${input.value.slice(event)}`;
    }

    // if "k"
    else if (
      input.value.substring(event - 1, event) === "k" ||
      input.value.substring(event - 1, event) === "K"
    ) {
      // change to "ࡊ"
      input.value =
        input.value.substring(0, event - 1) + `ࡊ${input.value.slice(event)}`;
    }

    // if "l"
    else if (
      input.value.substring(event - 1, event) === "l" ||
      input.value.substring(event - 1, event) === "L"
    ) {
      // change to "ࡋ"
      input.value =
        input.value.substring(0, event - 1) + `ࡋ${input.value.slice(event)}`;
    }

    // if ";"
    else if (input.value.substring(event - 1, event) === ";") {
      // change to "࡙"
      input.value =
        input.value.substring(0, event - 1) + `࡙${input.value.slice(event)}`;
    }

    // if "z"
    else if (
      input.value.substring(event - 1, event) === "z" ||
      input.value.substring(event - 1, event) === "Z"
    ) {
      // change to "ࡆ"
      input.value =
        input.value.substring(0, event - 1) + `ࡆ${input.value.slice(event)}`;
    }

    // if "x"
    else if (
      input.value.substring(event - 1, event) === "x" ||
      input.value.substring(event - 1, event) === "X"
    ) {
      // change to "ࡗ"
      input.value =
        input.value.substring(0, event - 1) + `ࡗ${input.value.slice(event)}`;
    }

    // if "c"
    else if (
      input.value.substring(event - 1, event) === "c" ||
      input.value.substring(event - 1, event) === "C"
    ) {
      // change to "ࡑ"
      input.value =
        input.value.substring(0, event - 1) + `ࡑ${input.value.slice(event)}`;
    }

    // if "v"
    else if (
      input.value.substring(event - 1, event) === "v" ||
      input.value.substring(event - 1, event) === "V"
    ) {
      // change to "ࡘ"
      input.value =
        input.value.substring(0, event - 1) + `ࡘ${input.value.slice(event)}`;
    }

    // if "b"
    else if (
      input.value.substring(event - 1, event) === "b" ||
      input.value.substring(event - 1, event) === "B"
    ) {
      // change to "ࡁ"
      input.value =
        input.value.substring(0, event - 1) + `ࡁ${input.value.slice(event)}`;
    }

    // if "n"
    else if (
      input.value.substring(event - 1, event) === "n" ||
      input.value.substring(event - 1, event) === "N"
    ) {
      // change to "ࡍ"
      input.value =
        input.value.substring(0, event - 1) + `ࡍ${input.value.slice(event)}`;
    }

    // if "m"
    else if (
      input.value.substring(event - 1, event) === "m" ||
      input.value.substring(event - 1, event) === "M"
    ) {
      // change to "ࡌ"
      input.value =
        input.value.substring(0, event - 1) + `ࡌ${input.value.slice(event)}`;
    }

    // if ","
    else if (input.value.substring(event - 1, event) === ",") {
      // change to "࡛"
      input.value =
        input.value.substring(0, event - 1) + `࡛${input.value.slice(event)}`;
    }

    // if "."
    else if (input.value.substring(event - 1, event) === ".") {
      // change to "࡞"
      input.value =
        input.value.substring(0, event - 1) + `࡞${input.value.slice(event)}`;
    }

    // if "?"
    else if (input.value.substring(event - 1, event) === "?") {
      // change to "؟"
      input.value =
        input.value.substring(0, event - 1) + `؟${input.value.slice(event)}`;
    }

    // update the cursor position
    input.setSelectionRange(event, event);
  }
});
