const maxLength = 100;

textInput.addEventListener("input", () => {
  let length = textInput.value.length;
  charCount.textContent = length + " / " + maxLength;

  if (length > maxLength) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "green";
  }
});