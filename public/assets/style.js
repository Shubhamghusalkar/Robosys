const cursor = document.querySelector(".myMouseStyle");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const speed = 0.13; // smaller = more delay, bigger = faster follow

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // interpolate position
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();
