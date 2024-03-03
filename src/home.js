import Icon from './icon.png';

function load_home() {
  const content_container = document.querySelector("#content");

  const home_title = document.createElement('h1');
  home_title.textContent = "Welcome to the Odin Restaurant";
  content_container.appendChild(home_title);

  const welcome_paragraph = document.createElement('p');
  welcome_paragraph.textContent = "kldsajdfasdfasdfasdfas adsfadsadseqef asiofausidof asdfuioasu foia  asuiofuaiosdu ioasf ajdfiasjdfopasdjf adsfasdfasfsda adfasfsafa dfjkljlk asdfjwi vn v adjfiownvinqirnq vavnaionvwin invb aivn aoidvnio wioi";
  content_container.appendChild(welcome_paragraph);

  const open_hours = document.createElement('h3');
  open_hours.textContent = "Opening time: 9 am to 9 pm";
  content_container.appendChild(open_hours);

  const myIcon = new Image();
  myIcon.src = Icon;

  content_container.appendChild(myIcon);
}

export {load_home};