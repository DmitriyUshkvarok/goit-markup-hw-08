(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrops: document.querySelectorAll(".back-drop-modal"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  window.addEventListener("keydown", onEscKeyPress);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      refs.modal.classList.add("is-hidden");
      document.body.classList.toggle("modal-open");
    }
  }

  window.onclick = function (e) {
    for (const backdrop of refs.backdrops) {
      if (e.target === backdrop) {
        backdrop.classList.add("is-hidden");
        document.body.classList.toggle("modal-open");
        console.log(e);
      }
    }
  };
})();
