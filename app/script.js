document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);
});

var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");
var modalImg = document.getElementById("modalImage");
var body = document.body;
var isModalOpen = false;

function openModal(imgSrc) {
  modal.style.display = "flex";
  modalImg.src = imgSrc;

  body.classList.add('modal-open');
  modalContent.classList.add('modal-enlarged');

  var closeSpan = document.createElement("span");
  closeSpan.className = "close";
  closeSpan.innerHTML = "&times;";
  closeSpan.onclick = closeModal;
  modalContent.appendChild(closeSpan);

  isModalOpen = true;
}

function closeModal() {
  modal.style.display = "none";
  body.classList.remove('modal-open');
  modalContent.classList.remove('modal-enlarged');

  var closeSpan = document.querySelector(".close");
  if (closeSpan) {
    modalContent.removeChild(closeSpan);
  }

  isModalOpen = false;
}