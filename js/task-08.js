// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), 
// которая принимает 1 параметр amount - число.
// Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, 
// должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById("boxes");

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const partOfDoc = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const divBox = document.createElement("div");
    divBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    partOfDoc.appendChild(divBox);
  }

  boxes.appendChild(partOfDoc);
}

function random() {
  return Math.floor(Math.random() * 256);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

