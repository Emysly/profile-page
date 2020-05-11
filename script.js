// gallery filter

const filterBtns = document.querySelector("#filter-btns").children;

const items = document.querySelector(".portfolio-gallery").children;

const gallery = document.querySelector(".portfolio-gallery");

const galleryItem = document.querySelectorAll(".item");

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    for (let j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

// lightbox

const closeLightbox = document.querySelector(".close-lightbox");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = lightbox.querySelector("img");

const b = document.querySelector(".buttons");

const viewButton = b.querySelector(".view");

const githubButton = b.querySelector(".github");

closeLightbox.addEventListener("click", function () {
  lightbox.style.display = "none";
});

galleryItem.forEach((element) => {
  element.querySelector(".overlay").addEventListener("click", function () {
    lightbox.style.display = "flex";
    const ligthboxImage1 = element.querySelector("img").getAttribute("src");
    lightboxImage.setAttribute("src", ligthboxImage1);
    const ligthboxImageView = element.querySelector("img").getAttribute("view");
    viewButton.setAttribute("href", ligthboxImageView);
    const ligthboxImageGithub = element
      .querySelector("img")
      .getAttribute("github");
    githubButton.setAttribute("href", ligthboxImageGithub);
  });
});

lightbox.addEventListener("click", function () {
  if (event.target != lightboxImage) {
    lightbox.style.display = "none";
  }
});

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      this.document.querySelector("header").classList.add("fixed");
    } else {
      this.document.querySelector("header").classList.remove("fixed");
    }
  }
};

// navbar

const navbar = document.querySelector(".navbar");

const a = navbar.querySelectorAll("a");

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
});
