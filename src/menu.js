function load_menu() {
  const content_container = document.querySelector("#content");

  const menu_title = document.createElement('h1');
  menu_title.textContent = "Menu";
  content_container.appendChild(menu_title);

  const menu_paragraph = document.createElement('p');
  menu_paragraph.textContent = "Welcome to the Menu of Odin Restaurant";
  content_container.appendChild(menu_paragraph);
}

export {load_menu};