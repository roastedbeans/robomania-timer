window.onload = function () {
  Particles.init({
    // normal options
    selector: ".background",
    color: "#1460ed",
    maxParticles: 80,
    speed: 0.3,
    connectParticles: true,
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 50,
          color: "#1460ed",
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 30,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 5,

          // disables particles.js
        },
      },
    ],
  });
};
