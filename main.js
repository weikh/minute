const form = document.getElementById("form");
const input = document.querySelector("#inp");
const text = document.getElementById("text");

const hour = 3600000;
const minute = 60000;
const second = 1000;
const millisecond = 1;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = input.value;

  const hourResult = Math.floor(inputValue / hour);
  const minuteResult = Math.floor(inputValue / minute);
  const secondResult = Math.floor(inputValue / second);
  const millisecondResult = Math.floor(inputValue / millisecond);

  text.textContent = `Hour: ${hourResult}, Minute: ${minuteResult}, Second: ${secondResult}, Millisecond: ${millisecondResult}`;
  form.reset();
});
