// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "Light Mode";
    } else {
      themeToggle.textContent = "Dark Mode";
    }
  });
}

// Print CV
const printBtn = document.getElementById("printBtn");

if (printBtn) {
  printBtn.addEventListener("click", () => {
    window.print();
  });
}

// Download CV (simple version)
const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");

    // Replace this with your real CV PDF file
    link.href = "Sreng_Sreymean_CV.pdf";

    link.download = "Sreng_Sreymean_CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Smooth Scroll (extra improvement)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});