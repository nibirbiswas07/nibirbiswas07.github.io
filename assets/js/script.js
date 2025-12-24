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

// ============================
// MODAL HANDLING (WITH BACK BUTTON SUPPORT)
// ============================

// Open modal
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);

    if (!modal) return;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // Push history state (for mobile back button)
    history.pushState({ modalOpen: true }, '');
  });
});

// Close modal helper
function closeModal(modal) {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
}

// Close modal (button or overlay click)
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', e => {
    if (
      e.target.classList.contains('modal-overlay') ||
      e.target.classList.contains('modal-close')
    ) {
      closeModal(modal);

      // Go back only if modal added history
      if (history.state && history.state.modalOpen) {
        history.back();
      }
    }
  });
});

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      closeModal(modal);

      if (history.state && history.state.modalOpen) {
        history.back();
      }
    });
  }
});

// Handle browser back button (mobile)
window.addEventListener('popstate', () => {
  document.querySelectorAll('.modal-overlay.active').forEach(modal => {
    closeModal(modal);
  });
});

