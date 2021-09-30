const input = document.querySelector("textarea");

// Add typing animation when a key is entered
input.addEventListener("keydown", (event) => {
  const key = document.querySelector(`kbd[data-code="${event.code}"]`);
  // Check for key existence to avoid getting a null error
  if (key) {
    key.classList.add("active");
  }

  if (key && event.metaKey) {
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
      input.value.substring(event - 1, event) === "Q" ||
      input.value.substring(event - 1, event) === "ق" ||
      input.value.substring(event - 1, event) === "ڤ"
    ) {
      // replace it with "ࡒ"
      input.value =
        input.value.substring(0, event - 1) + `ࡒ ${input.value.slice(event)}`;
    }

    // if "w" is typed
    else if (
      input.value.substring(event - 1, event) === "w" ||
      input.value.substring(event - 1, event) === "W" ||
      input.value.substring(event - 1, event) === "ش"
    ) {
      // replace it with "ࡅ"
      input.value =
        input.value.substring(0, event - 1) + `ࡔ ${input.value.slice(event)}`;
    }

    // if "e" is typed
    else if (
      input.value.substring(event - 1, event) === "e" ||
      input.value.substring(event - 1, event) === "E" ||
      input.value.substring(event - 1, event) === "ء"
    ) {
      // replace it with "ࡏ"
      input.value =
        input.value.substring(0, event - 1) + `ࡏ ${input.value.slice(event)}`;
    }

    // if "r" is typed
    else if (
      input.value.substring(event - 1, event) === "r" ||
      input.value.substring(event - 1, event) === "R" ||
      input.value.substring(event - 1, event) === "ر"
    ) {
      // replace it with "ࡓ"
      input.value =
        input.value.substring(0, event - 1) + `ࡓ ${input.value.slice(event)}`;
    }

    // the rest is similar...
    else if (
      input.value.substring(event - 1, event) === "t" ||
      input.value.substring(event - 1, event) === "T" ||
      input.value.substring(event - 1, event) === "ت" ||
      input.value.substring(event - 1, event) === "ة" ||
      input.value.substring(event - 1, event) === "ث"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡕ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "y" ||
      input.value.substring(event - 1, event) === "Y" ||
      input.value.substring(event - 1, event) === "ط" ||
      input.value.substring(event - 1, event) === "ظ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡈ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "u" ||
      input.value.substring(event - 1, event) === "U" ||
      input.value.substring(event - 1, event) === "و" ||
      input.value.substring(event - 1, event) === "ؤ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡅ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "i" ||
      input.value.substring(event - 1, event) === "I" ||
      input.value.substring(event - 1, event) === "ي"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡉ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "o" ||
      input.value.substring(event - 1, event) === "O" ||
      input.value.substring(event - 1, event) === "ه" ||
      input.value.substring(event - 1, event) === "ہ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡇ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "p" ||
      input.value.substring(event - 1, event) === "P" ||
      input.value.substring(event - 1, event) === "ة"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `࡚ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "a" ||
      input.value.substring(event - 1, event) === "A" ||
      input.value.substring(event - 1, event) === "ا" ||
      input.value.substring(event - 1, event) === "آ" ||
      input.value.substring(event - 1, event) === "ی" ||
      input.value.substring(event - 1, event) === "ئ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡀ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "s" ||
      input.value.substring(event - 1, event) === "S" ||
      input.value.substring(event - 1, event) === "س"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡎ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "d" ||
      input.value.substring(event - 1, event) === "D" ||
      input.value.substring(event - 1, event) === "د" ||
      input.value.substring(event - 1, event) === "ذ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡃ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "f" ||
      input.value.substring(event - 1, event) === "F" ||
      input.value.substring(event - 1, event) === "ف" ||
      input.value.substring(event - 1, event) === "پ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡐ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "g" ||
      input.value.substring(event - 1, event) === "G" ||
      input.value.substring(event - 1, event) === "غ" ||
      input.value.substring(event - 1, event) === "ج" ||
      input.value.substring(event - 1, event) === "چ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡂ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "h" ||
      input.value.substring(event - 1, event) === "H" ||
      input.value.substring(event - 1, event) === "ح"
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
      input.value.substring(event - 1, event) === "K" ||
      input.value.substring(event - 1, event) === "ك" ||
      input.value.substring(event - 1, event) === "ک" ||
      input.value.substring(event - 1, event) === "گ" ||
      input.value.substring(event - 1, event) === "خ"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡊ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "l" ||
      input.value.substring(event - 1, event) === "L" ||
      input.value.substring(event - 1, event) === "ل"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡋ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === ";" ||
      input.value.substring(event - 1, event) === "؛"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `࡙ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "z" ||
      input.value.substring(event - 1, event) === "Z" ||
      input.value.substring(event - 1, event) === "ز" ||
      input.value.substring(event - 1, event) === "ژ"
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
      input.value.substring(event - 1, event) === "C" ||
      input.value.substring(event - 1, event) === "ص" ||
      input.value.substring(event - 1, event) === "ض"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡑ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "v" ||
      input.value.substring(event - 1, event) === "V" ||
      input.value.substring(event - 1, event) === "ع"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡘ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "b" ||
      input.value.substring(event - 1, event) === "B" ||
      input.value.substring(event - 1, event) === "ب"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡁ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "n" ||
      input.value.substring(event - 1, event) === "N" ||
      input.value.substring(event - 1, event) === "ن"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡍ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "m" ||
      input.value.substring(event - 1, event) === "M" ||
      input.value.substring(event - 1, event) === "م"
    ) {
      input.value =
        input.value.substring(0, event - 1) + `ࡌ ${input.value.slice(event)}`;
    } else if (
      input.value.substring(event - 1, event) === "," ||
      input.value.substring(event - 1, event) === "،"
    ) {
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
