const mapImage = document.getElementById("map-image");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const mapFile = entry.target.dataset.map;
      const zoom = entry.target.dataset.zoom || 1;

      // fade out slightly
      mapImage.style.opacity = 0;

      setTimeout(() => {
        mapImage.src = `images/maps/${mapFile}`;
        mapImage.style.transform = `scale(${zoom})`;
        mapImage.style.opacity = 1;
      }, 300);
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".step").forEach((step) => {
  observer.observe(step);
});
