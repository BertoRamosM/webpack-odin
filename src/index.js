
import './style.css';
import homeRender from './home';
import menuRender from './menu';
import contactRender from './contact';


const content = document.getElementById("content");

homeRender();

export default function buttonFunctionality(){
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');




home.addEventListener('click', function() {
  homeRender();
});

menu.addEventListener('click', function() {
  menuRender();
});

contact.addEventListener('click', function() {
  contactRender();
});
}