import buttonFunctionality from './index';


import Icon1 from './icon1.jpg';
import Icon2 from './icon2.jpg';
import Icon3 from './icon3.jpg';


export default function menuRender(){
    content.innerHTML = "";
    content.innerHTML = '<div id="header">' +
    '<button id="home">HOME</button>' +
    '<button id="menu" style="background-color: maroon; color: black";>MENU</button>' +
    '<button id="contact">CONTACT</button>' +
    '</div>' +
    '<div id="text-content">' +
    '<p id="p1">Indulge in our savory Grilled Chicken Caesar Salad, a harmonious blend of tender grilled chicken breast, crisp romaine lettuce, and freshly grated Parmesan cheese. Tossed in a creamy Caesar dressing and topped with house-made garlic croutons, this classic salad is a satisfying and nutritious choice for a light lunch or a wholesome dinner.</p>' +
    '<p id="p2">Savor the flavors of the sea with our Pan-Seared Salmon Fillet. Delicately seasoned and cooked to perfection, the salmon rests atop a bed of sautéed vegetables and wild rice pilaf. Drizzled with a zesty lemon-butter sauce, each bite is a delightful symphony of textures and tastes, making it an excellent option for seafood enthusiasts.</p>' +
    '<p id="p3">Experience culinary innovation with our Truffle Mushroom Risotto. This creamy Arborio rice dish is infused with earthy truffle oil and loaded with sautéed wild mushrooms, resulting in a luxuriously rich and aromatic creation. Finished with a sprinkle of Parmesan cheese and fresh chives, our Truffle Mushroom Risotto is a delightful journey for the palate.</p>' +
    '</div>';




    const myIcon1 = new Image();
    myIcon1.src = Icon1;
    p1.appendChild(myIcon1); 
    myIcon1.classList.add("pictures"); 

    const myIcon2 = new Image();
    myIcon2.src = Icon2;
    p2.appendChild(myIcon2); 
    myIcon2.classList.add("pictures"); 

    const myIcon3 = new Image();
    myIcon3.src = Icon3;
    p3.appendChild(myIcon3); 
    myIcon3.classList.add("pictures"); 


    console.log("menu");
    buttonFunctionality();
} 

