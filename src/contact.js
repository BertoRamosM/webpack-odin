import buttonFunctionality from './index';

export default function contactRender(){
    content.innerHTML = "";

    content.innerHTML ='<div id="header">' +
  '<button id="home">HOME</button>' +
  '<button id="menu">MENU</button>' +
  '<button id="contact" style="background-color: maroon; color: black">CONTACT</button>' +
  '</div>' +
  '<div id="text-content">' +
  '<p id="p1">Restaurant One <br> <br> False street 123, Granville, Normandy, France <br><br> tel. 0816268984561 <br> restone@email.com</p>' +
  '<p id="p2">Restaurant Two <br> <br> False street 123, Granville, Normandy, France <br><br> tel. 0854516151551 <br> resttwo@email.com</p>' +
  '<p id="p3">Restaurant Three <br> <br> False street 123, Granville, Normandy, France <br><br> tel. 0851511521351 <br> restthree@email.com</p>' +
  '</div>';
  console.log("contact");
  buttonFunctionality();
} 
