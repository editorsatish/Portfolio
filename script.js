// ===============================
// SATISH PORTFOLIO SCRIPT
// ===============================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        nav.classList.remove("active");

        const icon = document.querySelector(".menu-btn i");

        if(icon){
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(8,12,20,.95)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(10,14,22,.9)";
header.style.boxShadow="none";

}

});

// ===============================
// Back To Top Button
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Active Navigation
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.2
});

document.querySelectorAll(".service-card,.project-card,.testimonial-card,.client-card,.contact-card,.box").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s";

observer.observe(el);

});

// ===============================
// Animated Counters
// ===============================

const counters=document.querySelectorAll(".counter-box h2");

counters.forEach(counter=>{

const updateCounter=()=>{

const text=counter.innerText.replace("+","").replace("M","");
const target=parseFloat(text);

let current=Number(counter.getAttribute("data-count"))||0;

let increment=target/80;

if(current<target){

current+=increment;

counter.setAttribute("data-count",current);

if(counter.innerText.includes("M")){

counter.innerText=current.toFixed(1)+"M+";

}else{

counter.innerText=Math.ceil(current)+"+";

}

setTimeout(updateCounter,20);

}else{

if(counter.innerText.includes("M")){

counter.innerText=target+"M+";

}else{

counter.innerText=target+"+";

}

}

};

updateCounter();

});

// ===============================
// Portfolio Hover Glow
// ===============================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 60px rgba(37,99,235,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

});

});

// ===============================
// Hero Typing Effect
// ===============================

const heroTitle=document.querySelector(".hero-left h4");

if(heroTitle){

const text="Professional Video Editor";

heroTitle.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

}

// ===============================
// Footer Year
// ===============================

const year=document.querySelector(".copyright");

if(year){

const currentYear=new Date().getFullYear();

year.innerHTML=`© ${currentYear} Tadi Kumar Satish Reddy. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully");
// Portfolio Filter

const filterButtons=document.querySelectorAll(".filter-btn");

const projects=document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

projects.forEach(project=>{

if(filter==="all"){

project.style.display="block";

}else if(project.classList.contains(filter)){

project.style.display="block";

}else{

project.style.display="none";

}

});

});

});