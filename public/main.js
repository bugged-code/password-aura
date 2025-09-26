import { PasswordEvaluator } from "./src/evaluator.js";
import { AuraFactory } from "./src/factory.js";
import { Observer } from "./src/observer.js";

setTimeout(() => {
  document.getElementById("screen-loading").classList.add("inactive");
}, 2000);

const title = document.getElementById("title");
const input = document.getElementById("password-input");
const toggleBtn = document.getElementById("toggle-password");
const auraDiv = document.getElementById("aura");
const slider = document.getElementById("strength-slider");

const observer = new Observer();

const evaluator = new PasswordEvaluator();
const factory = new AuraFactory(auraDiv);

// # suscribir evento al cambiar la entrada en el input
observer.subscribe("passwordChanged", (password) => {
  const strength = evaluator.evaluate(password);
  const auraProps = factory.createAura(strength);

  title.style.backgroundImage = auraProps.gradient;

  auraDiv.style.background = auraProps.gradient;
  auraDiv.style.boxShadow = `0 0 10px ${auraProps.color}`;

  slider.value = strength;
  const val = (slider.value / slider.max) * 100;
  slider.style.background = `linear-gradient(
    90deg,
    ${auraProps.color} ${val}%,
    #efefef ${val}%
  )`;
  slider.style.boxShadow = `0 0 5px ${auraProps.color}`;
});
// # suscribir evento al cambiar la visibilidad del input
observer.subscribe("changeVisibility", (type) => {
  input.type = type;
  toggleBtn.classList.toggle("visible", type == "text");
});

// [+] eventos
// ~ input
input.addEventListener("input", (e) => {
  observer.notify("passwordChanged", e.target.value);
});
observer.notify("passwordChanged", "");
// ~ click
toggleBtn.addEventListener("click", () => {
  observer.notify(
    "changeVisibility",
    input.type !== "password" ? "password" : "text"
  );
});
