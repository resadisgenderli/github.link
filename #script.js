const btn=document.querySelector(".btn");

btn.addEventListener("click",function(e){
e.preventDefault();
alert("Müraciət göndərildi!");
});

const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link){

link.addEventListener("mouseenter",function(){
this.style.color="#2563eb";
});

link.addEventListener("mouseleave",function(){
this.style.color="black";
});

});

const statBoxes=document.querySelectorAll(".stat-box");

statBoxes.forEach(function(box){

box.addEventListener("mouseenter",function(){
this.style.transform="scale(1.05)";
this.style.transition="0.3s";
});

box.addEventListener("mouseleave",function(){
this.style.transform="scale(1)";
});

});

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>20){
navbar.style.boxShadow="0 2px 10px rgba(0,0,0,0.1)";
}else{
navbar.style.boxShadow="none";
}

});