(()=>{document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".timeline"),n={root:null,rootMargin:"0px",threshold:1.1},e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){const n=t.target.querySelector(".date-content"),s=t.target.querySelector(".timeline-content");n.classList.contains("hidden-left")&&(n.classList.remove("hidden-left"),n.classList.add("slide-in-left")),s.classList.contains("hidden-left")&&(s.classList.remove("hidden-left"),s.classList.add("slide-in-left")),n.classList.contains("hidden-right")&&(n.classList.remove("hidden-right"),n.classList.add("slide-in-right")),s.classList.contains("hidden-right")&&(s.classList.remove("hidden-right"),s.classList.add("slide-in-right")),e.unobserve(t.target)}})},n);t.forEach(t=>{e.observe(t)})})})()