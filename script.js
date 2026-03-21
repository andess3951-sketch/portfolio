const container = document.getElementById("projectsContainer");
const counter = document.getElementById("projectCounter");

const totalProjects = document.querySelectorAll(".card").length;
counter.innerText = totalProjects;

function scrollProjects(direction) {
    container.scrollLeft += direction * 300;
}

// rolagem automática estilo Netflix
setInterval(() => {
    container.scrollLeft += 260;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
    }
}, 4000);
const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

elementos.forEach(el => observer.observe(el));

