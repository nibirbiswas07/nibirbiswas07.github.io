// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.remove("active");
  });
});

const emailCopy = document.getElementById("email-copy");

if (emailCopy) {
  const toast = emailCopy
    .closest(".social-item")
    .querySelector(".copy-toast");

  emailCopy.addEventListener("click", (e) => {
    e.preventDefault(); // stops smooth-scroll hijack

    navigator.clipboard.writeText("biswasnibir618@gmail.com");

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  });
}

// Open modal
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal (button or overlay)
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', e => {
    if (
      e.target.classList.contains('modal-overlay') ||
      e.target.classList.contains('modal-close')
    ) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});