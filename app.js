const inputArea = document.querySelector("textarea");
const translateButton = document.querySelector("button");
const outputArea = document.querySelector(".output-box");

const serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

const urlMsg = function (text) {
  return serverUrl + "?text=" + text;
};

const errorHandler = function (error) {
  console.log("Error is " + error);
  alert("There's some problem with interaction from server");
};

//callback function
const clickHandler = function () {
  const inputValue = inputArea.value;
  fetch(urlMsg(inputValue))
    .then((response) => response.json())
    .then((json) => {
      const translatedMsg = json.contents.translated;
      outputArea.innerText = translatedMsg;
    });
};

translateButton.addEventListener("click", clickHandler);
