import './style.css';
import {load_home} from "./home";
import {load_menu} from "./menu";
import {load_about} from "./about";

function remove_content() {
  const content_container = document.querySelector("#content");
  content_container.innerHTML = "";
}

window.onload = load_home();

const home_button = document.querySelector("#home_btn");
home_button.addEventListener("click", () => {
  remove_content();
  load_home();
});

const menu_button = document.querySelector("#menu_btn");
menu_button.addEventListener("click", () => {
  remove_content();
  load_menu();
});

const about_button = document.querySelector("#about_btn");
about_button.addEventListener("click", () => {
  remove_content();
  load_about();
});