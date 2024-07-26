import AOS from 'aos';
import 'aos/dist/aos.css';
import Event from './event';

let EVENT;
let MESSAGE;

const handlerText = () => {
  EVENT.counter((counter) => {
    document.querySelector("#counter")
      .textContent = counter;
  })
  
  document.querySelector("#message")
    .textContent = MESSAGE;
}
const handlerEvent = () => {
  const now = new Date();
  const birthday = new Date(`8-20-${now.getFullYear()}`);

  // Aniversário já passou
  if (now.getTime() > birthday.getTime()) {
    const newBirthday = birthday.setFullYear(now.getFullYear() + 1)

    EVENT = new Event(newBirthday);
    MESSAGE = "Poxa, meu aniversário já passou, mas tem mais em"

    return;
  }
  
  EVENT = new Event(birthday);
  MESSAGE = "Esse será meu ano! Meu aniversário em"
}

document.addEventListener("DOMContentLoaded", () => {
  handlerEvent();
  handlerText();

  AOS.init();
})