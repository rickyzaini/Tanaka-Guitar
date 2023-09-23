let index = 1;


function show(n) {
  
  let i;
  let slide = document.querySelectorAll(".img-container");
  let dot = document.querySelectorAll(".dot");
  console.log(dot[0])
  if (n > slide.length) {
    index = 1;
  }    
  if (n < 1) {
    index = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    
    slide[i].classList.add("img-inactive");
    
  }
  for (i = 0; i<dot.length; i++){
     dot[i].classList.add("dot-inactive");
     console.log(dot[i])
    //  dot[i].classList.remove("dot-active");
  }

  for (i = 0; i<dot.length; i++){
     dot[i].classList.remove("dot-active");
  }

  for (i = 0; i < slide.length; i++){
    slide[i].classList.remove("img-active");
  }

  

  if (slide.length > 0) {
    slide[index-1].classList.remove("img-inactive");
    slide[index-1].classList.add("img-active");  
    dot[index-1].classList.remove("dot-inactive");
    dot[index-1].classList.add("dot-active");
  }
  
  
}


show(index);

function move(n) {
  show(index += n);
}

function jump(n) {
  show(index = n);
}