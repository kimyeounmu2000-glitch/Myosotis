document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu");
  const panel = document.querySelector("#site-menu");
  if (!button || !panel) return;
  const header = button.closest("header");
  const nav = button.closest("nav");
  function setOpen(open) {
    button.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    panel.classList.toggle("open", open);
    header.classList.toggle("menu-open", open);
  }
  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  nav.addEventListener("focusout", (event) => {
    if (!nav.contains(event.relatedTarget)) setOpen(false);
  });
  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  setOpen(false);
});
