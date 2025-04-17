// Simple typing effect for typewriter class
const text = "Web Developer | Designer | Coder";
let index = 0;

function typeEffect() {
  const typewriter = document.querySelector('.typewriter');
  if (typewriter && index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
