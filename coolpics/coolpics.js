const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("nav");
const viewer = document.querySelector(".viewer");
const viewerImg = viewer.querySelector("img");
const closeViewer = document.querySelector(".close-viewer");
const galleryImages = document.querySelectorAll(".gallery img");

document.addEventListener("DOMContentLoaded", () => {
  viewer.style.position = "fixed";
  viewer.style.top = "0";
  viewer.style.left = "0";
  viewer.style.width = "100vw";
  viewer.style.height = "100vh";
  viewer.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  viewer.style.display = "none";
  viewer.style.justifyContent = "center";
  viewer.style.alignItems = "center";

  viewerImg.style.maxWidth = "80%";
  viewerImg.style.maxHeight = "80%";

  closeViewer.style.position = "absolute";
  closeViewer.style.top = "10px";
  closeViewer.style.right = "10px";
  closeViewer.style.fontSize = "24px";
  closeViewer.style.background = "none";
  closeViewer.style.color = "white";
  closeViewer.style.border = "none";
  closeViewer.style.cursor = "pointer";
});

function toggleMenu() {
  navMenu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

function openViewer(event) {
  viewerImg.src = event.target.src.replace("-sm", "-full"); // Ensure full image loads
  viewer.style.display = "flex";
}

galleryImages.forEach(img => img.addEventListener("click", openViewer));

function closeImageViewer() {
  viewer.style.display = "none";
}
closeViewer.addEventListener("click", closeImageViewer);
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) closeImageViewer();
});
