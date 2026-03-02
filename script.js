mapboxgl.accessToken = "PASTE_YOUR_MAPBOX_TOKEN_HERE";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [78, 22],
  zoom: 4,
  interactive: false
});

const scenes = {
  region: { center: [78, 22], zoom: 4 },
  memory: { center: [77, 23], zoom: 6 },
  city: { center: [77.2, 28.6], zoom: 10 },
  concrete: { center: [77.1, 28.6], zoom: 12 },
  flood: { center: [72.8, 19.0], zoom: 10 }
};

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".step[data-scene]").forEach(step => {
  ScrollTrigger.create({
    trigger: step,
    start: "top center",
    onEnter: () => {
      const scene = scenes[step.dataset.scene];
      map.flyTo({
        ...scene,
        speed: 0.4,
        curve: 1.4,
        essential: true
      });
    }
  });
});
