// Random code I used for practising different concepts
// - basic Javascript
// - DOM Manipulation
// - Advanced Javascript

///////////////////////////////////////////////////////////

// Forked a previous mini-project I did to Play with

///////////////////////////////////////////////////////////


const container = document.getElementById('container');
const img = document.querySelector('img');


// const amen = prompt("Name:")
//console.log(amen)

container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";

})

container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = 'center center';
    img.style.transform = "scale(1)";
})