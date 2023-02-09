const btn1=document.querySelector("#aa");
let d1=document.querySelector("#add-modal");
let ul=document.querySelector("#movie-list");
let backdrop=document.querySelector("#backdrop");
let cancle=document.querySelector(".btn--passive");
let add=document.querySelector(".btn--success");
let sec=document.querySelector("#entry-text");
let d2=document.querySelector("#delete-modal");


backdrop.addEventListener('click',function(){
    backdrop.classList.remove('visible');
});

//for no cancle btn
let cancle2=d2.children[2].children[0]
//for delet yes
let yes=d2.children[2].children[1]
console.log(yes)
//inputs
let title=document.querySelector("#title");
//for add movie btn
btn1.addEventListener("click", addm)
function addm(event){
  backdrop.style.display="block"
   //backdrop.classList.add("visible");
   //backdrop.className="visible";
  // console.log(backdrop.className="visible")
   d1.style.display="block";
   // console.log(ele.appendChild(d1))
   //backdrop.addEventListener("click",r)
  }
//for cancle
cancle.addEventListener("click" ,can)
function can(event){
  
  backdrop.style.display="none";
  d1.style.display="none";
  }

  //forbackdrop
  backdrop.addEventListener("click",can)
//for data add

add.addEventListener("click",adddata)
function adddata(){
  // alert("HI")
  let title=document.querySelector("#title");
  let image=document.querySelector("#image-url");
  let rating=document.querySelector("#rating");

var butto=document.createElement("button")//
var newli=document.createElement("li");//
var div1=document.createElement("div");
var div2=document.createElement("div");
var div3=document.createElement("div");
var img=document.createElement("img");


newli.className="card";
newli.id="entry-text";
butto.innerText="delete";
butto.className="btn--success"
butto.className="btn"
div2.className="movie-element__image";
div2.className="movie-element__image img";
div1.className="movie-element h2";
div1.className="movie-element__info"
div3.className="movie-element p"


img.src=image.value;
div2.appendChild(img);
console.log(div2)
div1.textContent=title.value;
//div2.innerText=image.value;
div3.innerText=rating.value
newli.appendChild(div1)
newli.appendChild(div2)
newli.appendChild(div3)
ul.appendChild(newli)
newli.appendChild(butto)
//console.log(newli)
console.log(ul)

sec.style.display="none";
console.log(yes)
butto.addEventListener("click",del)

can();
cancle2.addEventListener("click",rem)
//yes.addEventListener("click",yess)
title.value=" ";
image.value=" ";
rating.value=" ";

}
function del(event){
console.log(event.target)
  d2.style.display="block";
  console.log(ul.children[0].children);
  
  yes.addEventListener("click",yess)
  function yess(){
    console.log(event.target)
    event.target.parentNode.remove();
    //sec.style.display="block";
    rem();
    
//   ul.children[i].style.display="none"
  }
  

 
}
function rem(){
  d2.style.display="none"
}
