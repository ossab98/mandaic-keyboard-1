const input = document.querySelector("textarea");

input.addEventListener("input", () => {
  // Check for a focused <textarea> element
  if (input === document.activeElement) {
    // get current text of the input textarea
    const start = input.value.substring(0, input.selectionStart).length;

    // set up the cursor position
    input.setSelectionRange(start, start);

    // if "`" is typed
    if (input.value.substring(start - 1, start) == "`") {
      // replace it with "ـ"
      input.value =
        input.value.substring(0, start - 1) + "ـ" + input.value.slice(start);
    }

    // if "q" is typed
    else if (
      input.value.substring(start - 1, start) == "q" ||
      input.value.substring(start - 1, start) == "Q"
    ) {
      // replace it with "ࡒ"
      input.value =
        input.value.substring(0, start - 1) + "ࡒ" + input.value.slice(start);
    }

    // if "w" is typed
    else if (
      input.value.substring(start - 1, start) == "w" ||
      input.value.substring(start - 1, start) == "W"
    ) {
      // replace it with "ࡅ"
      input.value =
        input.value.substring(0, start - 1) + "ࡅ" + input.value.slice(start);
    }

    // if "e" is typed
    else if (
      input.value.substring(start - 1, start) == "e" ||
      input.value.substring(start - 1, start) == "E"
    ) {
      // replace it with "ࡏ"
      input.value =
        input.value.substring(0, start - 1) + "ࡏ" + input.value.slice(start);
    }

    // if "r" is typed
    else if (
      input.value.substring(start - 1, start) == "r" ||
      input.value.substring(start - 1, start) == "R"
    ) {
      // replace it with "ࡓ"
      input.value =
        input.value.substring(0, start - 1) + "ࡓ" + input.value.slice(start);
    }

    // the rest is similar...
    else if (
      input.value.substring(start - 1, start) == "t" ||
      input.value.substring(start - 1, start) == "T"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡕ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "y" ||
      input.value.substring(start - 1, start) == "Y"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡈ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "u" ||
      input.value.substring(start - 1, start) == "U"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡗ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "i" ||
      input.value.substring(start - 1, start) == "I"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡉ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "o" ||
      input.value.substring(start - 1, start) == "O"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡇ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "p" ||
      input.value.substring(start - 1, start) == "P"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "࡚" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "a" ||
      input.value.substring(start - 1, start) == "A"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡀ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "s" ||
      input.value.substring(start - 1, start) == "S"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡎ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "d" ||
      input.value.substring(start - 1, start) == "D"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡃ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "f" ||
      input.value.substring(start - 1, start) == "F"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡐ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "g" ||
      input.value.substring(start - 1, start) == "G"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡂ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "h" ||
      input.value.substring(start - 1, start) == "H"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡄ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "j" ||
      input.value.substring(start - 1, start) == "J"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡖ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "k" ||
      input.value.substring(start - 1, start) == "K"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡊ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "l" ||
      input.value.substring(start - 1, start) == "L"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡋ" + input.value.slice(start);
    } else if (input.value.substring(start - 1, start) == ";") {
      input.value =
        input.value.substring(0, start - 1) + "࡙" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "z" ||
      input.value.substring(start - 1, start) == "Z"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡆ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "x" ||
      input.value.substring(start - 1, start) == "X"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡔ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "c" ||
      input.value.substring(start - 1, start) == "C"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡑ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "v" ||
      input.value.substring(start - 1, start) == "V"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡘ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "b" ||
      input.value.substring(start - 1, start) == "B"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡁ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "n" ||
      input.value.substring(start - 1, start) == "N"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡍ" + input.value.slice(start);
    } else if (
      input.value.substring(start - 1, start) == "m" ||
      input.value.substring(start - 1, start) == "M"
    ) {
      input.value =
        input.value.substring(0, start - 1) + "ࡌ" + input.value.slice(start);
    } else if (input.value.substring(start - 1, start) == ",") {
      input.value =
        input.value.substring(0, start - 1) + "࡛" + input.value.slice(start);
    } else if (input.value.substring(start - 1, start) == ".") {
      input.value =
        input.value.substring(0, start - 1) + "࡞" + input.value.slice(start);
    } else if (input.value.substring(start - 1, start) == "?") {
      input.value =
        input.value.substring(0, start - 1) + "؟" + input.value.slice(start);
    }

    // update the cursor position
    input.setSelectionRange(start, start);
  }
});
