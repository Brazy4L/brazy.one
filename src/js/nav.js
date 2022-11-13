document.querySelectorAll('.link').forEach((link) => {
  if (link.href === window.location.href) {
    link.nextElementSibling.classList.toggle('active');
  }
  if (!(link.href === window.location.href)) {
    link.nextElementSibling.classList.toggle('inactive');
  }
});
