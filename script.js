// ===============================
// SATISH PORTFOLIO JAVASCRIPT
// ===============================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Fade Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},
{
threshold:0.2
});

document.querySelectorAll(".card,.project").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="all .8s ease";

observer.observe(el);

});

// ===============================
// Typewriter Effect
// ===============================

const text = "Professional Video Editor";

const heading = document.querySelector(".hero-content h1");

let i = 0;

function typing(){

if(i < text.length){

heading.innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

if(heading){

heading.innerHTML="";

typing();

}

// ===============================
// Hero Image Rotation
// ===============================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mouseover",()=>{

heroImage.style.transform="scale(1.05) rotate(3deg)";
heroImage.style.transition=".4s";

});

heroImage.addEventListener("mouseout",()=>{

heroImage.style.transform="scale(1) rotate(0deg)";

});

}

// ===============================
// Portfolio Button Animation
// ===============================

document.querySelectorAll(".project a").forEach(btn=>{

btn.addEventListener("mouseover",()=>{

btn.style.background="#0b3d91";

});

btn.addEventListener("mouseout",()=>{

btn.style.background="#1565c0";

});

});

// ===============================
// Scroll to Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="25px";
topButton.style.bottom="25px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#1565c0";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Console Message
// ===============================

console.log("Welcome to Satish Portfolio");