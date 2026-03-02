const mapImage = document.getElementById("map-image");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const mapFile = entry.target.dataset.map;
        if (mapFile) {
          mapImage.style.opacity = 0;
          setTimeout(() => {
            mapImage.src = `images/maps/${mapFile}`;
            mapImage.style.opacity = 1;
          }, 300);
        }
      }
    });
  },
  {
    threshold: 0.6,
  }
);

document.querySelectorAll(".step").forEach((step) => {
  observer.observe(step);
});
