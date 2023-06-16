// informtion
let img_list =Array.from( document.querySelectorAll(".slider-container img"));

let imglenth = img_list.length;
let check_input = document.querySelector("#flex");
let cont_numper = 1 ;
let slide_number = document.querySelector("#slide-number");

let prev_bottom = document.getElementById("prev");
let indicators_list = document.getElementById("indicators");

let next_botton = document.getElementById("next");

   




prev_bottom.onclick = prev;
next_botton.onclick = next;




//------------------------------------------------------------------
//  creat element 
let Elemen_ul = document.createElement("ul");
Elemen_ul.setAttribute("id", "ul_li");
//creat li 
for (let i = 1; i <= imglenth; i++) {

  let el_ul_li = document.createElement("li");
  el_ul_li.setAttribute("Dat_index", i);
  el_ul_li.appendChild(document.createTextNode(i));
  
  Elemen_ul.appendChild(el_ul_li);
}
indicators_list.appendChild(Elemen_ul);
//------------------------------------------------------------------------

let Array_li =Array.from(document.querySelectorAll("#ul_li li"));
let the_number = document.getElementById("slide-number");

checker()
//------------------------------------------------------------------------
// loop li ---------------------------------------------------------------
Array_li.forEach(e=>{
  e.onclick = function() {
    cont_numper = parseInt(this.getAttribute("Dat_index"))
    console.log(parseInt(this.getAttribute("Dat_index")))
    checker()
  }
  
})
//---- onclick on img------------------------------------------------------

img_list.forEach((im, index)=>{
  im.onclick =function () {
      if (check_input.checked) {
        Array_li[index].onclick()
      }
    }
  })
//------------------------------------------------------------
// =-----------function prev (1)------------------------------------
function prev() {

  if (!prev_bottom.classList.contains("disabled")) {
    cont_numper--;
    checker();
    
  }
}

// =-----------function next (2)------------------------------------
function next() {
  if (!next_botton.classList.contains("disabled")) {
    cont_numper++;
    checker();
    
  }
}



//function ------------------function checker-(3)------------function checker-----------function checker--------------------------------------------------------------
function checker() {

  the_number.innerHTML =`slide# ${cont_numper } to number ${imglenth}`;

  // remove All Active
  removeAll();
//  add active to img
img_list[cont_numper - 1].classList.add("active");
// add active to li 
Elemen_ul.children[cont_numper - 1].classList.add("active");
// check if current slide is first
if (cont_numper == 1) {
  prev_bottom.classList.add("disabled")
} else {
  prev_bottom.classList.remove("disabled")
};

if (cont_numper == imglenth) {
  next_botton.classList.add("disabled")
} else {
  next_botton.classList.remove("disabled")
}

}




//  remove active ------function (4)----------

function removeAll() {
  img_list.forEach(function(img){
    img.classList.remove("active");
  })

  Array_li.forEach(function(i){
    i.classList.remove("active");
  })

}

