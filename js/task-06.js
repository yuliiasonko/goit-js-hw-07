// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.




let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function() {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove("invalid");
      inputVal.classList.add("valid");
      const validColor = document.querySelector('.valid');
      validColor.setAttribute('style', ' border-color: #4caf50;');
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("valid");
      inputVal.classList.remove("invalid");
      inputVal.classList.add("none");
      const noneColor = document.querySelector('.none');
      noneColor.setAttribute('style', ' border: 3px solid #bdbdbd;');
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
      inputVal.classList.add("invalid");
 const invalidColor = document.querySelector('.invalid');
      invalidColor.setAttribute('style', ' border-color: #f44336;');
  }
};

