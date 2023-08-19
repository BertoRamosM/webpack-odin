import buttonFunctionality from './index';
 
 export default function homeRender(){
    content.innerHTML = "";

    content.innerHTML = '<div id="header">' +
  '<button id="home" style="background-color: maroon; color: black">HOME</button>' +
  '<button id="menu">MENU</button>' +
  '<button id="contact">CONTACT</button>' +
  '</div>' +
  '<div id="text-content">' +
  '<p id="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel risus nec elit vestibulum malesuada. Vivamus gravida arcu auctor justo condimentum, non fermentum quam tincidunt. Fusce id sapien quis libero vestibulum mattis id id justo. Vivamus vel elit in ex eleifend venenatis. Sed euismod nisl non nisi bibendum, sit amet consectetur risus tristique. Etiam quis quam vitae elit accumsan euismod. Curabitur vel ipsum a erat dignissim accumsan a eget arcu. Pellentesque nec suscipit elit, in cursus neque. Sed vestibulum a ex eget eleifend. Sed blandit, libero eget eleifend aliquet, est eros pharetra justo, quis rhoncus enim libero vel orci.</p>' +
  '<p id="p2">In et mi in erat bibendum lacinia nec nec mauris. Aliquam non dolor eget urna congue mattis. Integer non sapien eu mi venenatis elementum eu eget odio. Donec suscipit nunc et nunc semper sollicitudin. Cras id ligula sed sapien elementum facilisis. Integer nec bibendum nisi. Nam in convallis quam. Vivamus sed vestibulum odio, id pharetra nulla. Nunc efficitur risus ut urna laoreet dignissim. Aenean sed turpis vel purus malesuada finibus et et ex. Vestibulum ut dolor vestibulum, dictum dui nec, cursus elit. Nullam consectetur urna in nulla luctus dignissim. Fusce vitae facilisis tellus. Suspendisse eu augue non elit congue malesuada. Curabitur vel massa at ligula tincidunt efficitur.</p>' +
  '<p id="p3">Praesent vel urna ut mi tristique aliquet nec in sapien. Vivamus vitae interdum odio. Nam eu dolor in erat luctus tincidunt. Duis facilisis, augue a mattis suscipit, velit tellus lacinia turpis, vel vehicula metus mi a odio. Proin lacinia massa eget ex elementum, nec tincidunt est posuere. Fusce non felis at dui vehicula aliquet. Nulla hendrerit dapibus libero non pellentesque. Sed egestas tincidunt lacinia. Duis aliquam, ipsum a hendrerit dignissim, lectus justo euismod sapien, in cursus tortor risus at ligula. Sed interdum, mi vel dapibus dictum, mauris metus venenatis purus, et cursus lectus libero non quam. In ultricies libero eget turpis fringilla, non euismod justo laoreet. Suspendisse cursus bibendum dolor, nec auctor erat gravida ac.</p>' +
  '</div>';
  console.log("home");
  buttonFunctionality();
 }
 