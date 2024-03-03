function load_about() {
  const content_container = document.querySelector("#content");

  const about_title = document.createElement('h1');
  about_title.textContent = "About";
  content_container.appendChild(about_title);

  const about_paragraph = document.createElement('p');
  about_paragraph.textContent = "Welcome to the About of Odin Restaurant";
  content_container.appendChild(about_paragraph);
}

export {load_about};