<!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
// ====================== Loading & AOS ======================
window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "none";
  AOS.init({ duration: 1000 });
  typeLoopHero();
  typeAbout();
  typeCV();
  typeSidebar();
  initParticles();
  initSwiper();
  initTilt();
  setYear();
});

// ====================== Sidebar toggle ======================
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

// ====================== Cursor Glow ======================
const cursor = document.getElementById("cursor-glow");
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// ====================== Hero Typewriter ======================
const subtitle = document.getElementById("typewriter");
const heroTexts = ["Web Developer", "UI Designer", "Freelancer", "Html","Style css","java script"];
let i = 0, j = 0, current = "", del = false;
function typeLoopHero() {
  if (i < heroTexts.length) {
    if (!del && j <= heroTexts[i].length) current = heroTexts[i].substring(0, j++);
    else if (del && j >= 0) current = heroTexts[i].substring(0, j--);
    subtitle.textContent = current;
    if (j === heroTexts[i].length + 1) { del = true; setTimeout(typeLoopHero, 1000); return; }
    if (del && j === 0) { del = false; i = (i + 1) % heroTexts.length; }
    setTimeout(typeLoopHero, del ? 80 : 120);
  }
}

// ====================== About Typewriter ======================
const aboutEl = document.getElementById("aboutText");
const aboutText = "Halo, saya Dimas Putra Pratama, seorang Web Developer yang fokus pada pembuatan website modern, interaktif, dan responsif. Saya memiliki pengalaman dalam HTML, CSS, JavaScript, dan framework populer untuk membangun aplikasi web yang tidak hanya fungsional tetapi juga menarik secara visual.Saya percaya bahwa setiap proyek adalah kesempatan untuk belajar hal baru dan menghadirkan solusi kreatif bagi pengguna. Dengan kemampuan problem solving dan ketelitian dalam coding, saya berkomitmen untuk menghadirkan hasil kerja yang berkualitas tinggi.Selain itu, saya juga aktif mempelajari teknologi terbaru, seperti framework frontend, backend development, dan optimasi performa website, agar selalu siap menghadapi tantangan di dunia digital yang terus berkembang.Keahlian Utama:Web Development: HTML, CSS, JavaScript, React, Node.js Desain Responsif & UI/UXPengembangan aplikasi interaktif dan animasi web Optimasi performa website dan SEO dasar Saya selalu bersemangat untuk bekerja dalam tim maupun proyek personal, dengan tujuan menciptakan pengalaman digital yang memuaskan pengguna dan sesuai standar profesional.";
let idx = 0;
function typeAbout() {
  if (idx < aboutText.length) {
    aboutEl.textContent += aboutText.charAt(idx++);
    setTimeout(typeAbout, 30);
  }
}

// ====================== CV Typewriter ======================
const cvEl = document.getElementById("cvText");
const cvFull = "About Me Halo, saya Dimas Putra Pratama, seorang Web Developer dan Software Enthusiast dengan pengalaman dalam membangun aplikasi web modern yang responsif dan user-friendly. Saya memiliki keahlian dalam HTML, CSS, JavaScript, dan berbagai framework seperti React.js dan Node.js, serta pengalaman dalam mengelola database dan backend untuk mendukung aplikasi yang scalable.Saya selalu berfokus pada solusi kreatif dan efisiensi kode, dengan perhatian besar terhadap detail, keamanan, dan performa. Saya senang belajar teknologi terbaru dan menerapkannya untuk menyelesaikan masalah nyata. Selain itu, saya juga terbiasa bekerja secara tim maupun independen untuk mencapai target proyek yang diinginkan.Visi saya adalah mengembangkan produk digital yang inovatif, berkualitas tinggi, dan memberikan pengalaman terbaik bagi pengguna.";
let cvIdx = 0;
function typeCV() {
  if (cvIdx < cvFull.length) {
    cvEl.textContent += cvFull.charAt(cvIdx++);
    setTimeout(typeCV, 35);
  }
}

// ====================== Sidebar Typewriter ======================
function typeSidebar() {
  document.querySelectorAll(".typewriter").forEach(el => {
    const txt = el.dataset.text;
    let k = 0;
    function loop() {
      if (k < txt.length) {
        el.textContent += txt.charAt(k++);
        setTimeout(loop, 40);
      }
    }
    loop();
  });
}

// ====================== Confetti ======================
function launchConfetti() {
  confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
}

// ====================== Share ======================
function shareSite() {
  if (navigator.share) {
    navigator.share({ title: "Portfolio Dimz Dev", url: window.location.href });
  } else {
    alert("Browser tidak mendukung share API");
  }
}

// ====================== Click Sound ======================
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
function playClick() { clickSound.play(); }

// ====================== Project Filter ======================
function filterProjects(cat, ev) {
  const items = document.querySelectorAll(".project-item");
  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  ev.target.classList.add("active");
  items.forEach(item => {
    item.style.display = (cat === "all" || item.dataset.category === cat) ? "block" : "none";
  });
}

// ====================== Modal Project ======================
function openModal(title, img) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalImage").src = img;
  document.getElementById("projectModal").classList.add("active");
}
function closeModal() { document.getElementById("projectModal").classList.remove("active"); }

// ====================== Swiper Carousel ======================
function initSwiper() {
  new Swiper('.swiper', {
    pagination: { el: '.swiper-pagination' },
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false }
  });
}

// ====================== Tilt Effect ======================
function initTilt() {
  VanillaTilt.init(document.querySelectorAll(".project-item"), { max: 15, speed: 300, glare: true, "max-glare": 0.4 });
}

// ====================== Particles.js ======================
function initParticles() {
  const hero = document.getElementById("hero");
  const particlesDiv = document.createElement("div");
  particlesDiv.id = "particles-js";
  particlesDiv.style.position = "absolute";
  particlesDiv.style.top = "0";
  particlesDiv.style.left = "0";
  particlesDiv.style.width = "100%";
  particlesDiv.style.height = "100%";
  hero.appendChild(particlesDiv);

  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#3b82f6" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 4, random: true },
      line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}

// ====================== Analytics (contoh) ======================
console.log("Analytics: Portfolio dibuka pada " + new Date().toLocaleString());
// Scroll otomatis ke #hero setelah 4 detik
setTimeout(() => {
  document.querySelector("#hero").scrollIntoView({behavior:"smooth"});
}, 4000);
// ====================== Animate Skill Progress ======================
const skillCards = document.querySelectorAll(".skill-card .bar");
let skillsPlayed = false;

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const pos = skillsSection.getBoundingClientRect().top;
  if (pos < window.innerHeight - 100 && !skillsPlayed) {
    skillsPlayed = true;
    skillCards.forEach(bar => {
      bar.style.width = bar.classList.contains("html") ? "95%" :
                        bar.classList.contains("css") ? "90%" :
                        bar.classList.contains("js") ? "85%" :
                        bar.classList.contains("react") ? "80%" : "75%";
    });
  }
});
// ====================== Modal Skill ======================
function openSkill(title, img, desc) {
  document.getElementById("skillTitle").textContent = title;
  document.getElementById("skillImage").src = img;
  document.getElementById("skillDesc").textContent = desc;
  document.getElementById("skillModal").classList.add("active");
}
function closeSkill() {
  document.getElementById("skillModal").classList.remove("active");
}
</script>
