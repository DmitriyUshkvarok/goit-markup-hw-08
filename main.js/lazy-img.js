const lazyImg = document.querySelectorAll('img[loading="lazy"]');

lazyImg.forEach((imeg) => {
  imeg.addEventListener("load", onImageLoadet);
});

function onImageLoadet() {
  event.target.classList.add("appear");
}
