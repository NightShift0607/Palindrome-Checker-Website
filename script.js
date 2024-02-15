const resultText = document.querySelector("#result");
const chkBtn = document.querySelector("#check-btn");
const inputText = document.querySelector("#text-input");

function displayResult(str) {
  resultText.innerHTML = str;
  resultText.classList.remove("hidden");
}

function chkPalindrome(normalStr) {
  reverseStr = [...normalStr].reverse().join("");
  return normalStr === reverseStr ? "is a palindrome" : "is not a palindrome";
}

chkBtn.addEventListener("click", () => {
  let text = inputText.value;
  if (text === "") {
    displayResult("Please Enter a text!");
  } else {
    convertStr = text.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    let msg = chkPalindrome(convertStr);
    displayResult(`<strong>${text}</strong> ${msg}`);
  }
});

inputText.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let text = inputText.value;
    if (text === "") {
      displayResult("Please Enter a text!");
    } else {
      convertStr = text.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
      let msg = chkPalindrome(convertStr);
      displayResult(`<strong>${text}</strong> ${msg}`);
    }
  }
});
