document.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    left: dets.x - 10,
    top: dets.y - 10
  })
})

function animation() {
  gsap.from(".container section h2", {
    y: -10,
    duration: 1.2,
    ease: "power3.out"
  });
  
  gsap.from("nav", {
    y: -100,
    duration: 1.2,
    ease: "power3.out"
  });
  
  gsap.from("header h1, header h4", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 1,
    stagger: 0.5
  });
  
  gsap.fromTo(".landing-button", 
    { scale: 0.5, opacity: 0 }, 
    { 
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 2,
      repeat: -1,
      yoyo: true
    }
  );
  
  gsap.from("section h2, section h4", {
    scrollTrigger: {
      trigger: "section",
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });
}

animation()

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const skill = document.getElementById('skill').value;
  const portfolio = document.getElementById('portfolio').value.trim();
  
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  
  if (!name || !email || !skill || !portfolio) {
    alert('Please fill in all fields.');
    return;
  }
  
  if (!urlPattern.test(portfolio)) {
    alert('Please enter a valid URL.');
    return;
  }
  
  window.location.href = 'landing.html';
});

