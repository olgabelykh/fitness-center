"use strict";

(function () {
  var instructorsSlider = document.querySelector("#instructors").querySelector(".swiper-container");

  if (!instructorsSlider) {
    return;
  }

  var instructorsSwiper = new Swiper(instructorsSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    loopedSlides: 8,
    loop: true,
    loopFillGroupWithBlank: true,
    updateOnWindowResize: true,

    navigation: {
      nextEl: ".instructors-slider .slider__button--next",
      prevEl: ".instructors-slider .slider__button--prev",
    },

    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: "auto",
        spaceBetween: 40,
      },
    },
  });
})();

(function () {
  var reviewsSlider = document.querySelector("#reviews").querySelector(".swiper-container");

  if (!reviewsSlider) {
    return;
  }

  var reviewsSwiper = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    loopedSlides: 3,
    loop: true,

    navigation: {
      nextEl: ".reviews-slider .slider__button--next",
      prevEl: ".reviews-slider .slider__button--prev",
    },
  });
})();

(function () {
  var membershipTabs = document.querySelector("#membership-tabs");

  if (!membershipTabs) {
    return;
  }

  membershipTabs.querySelectorAll(".membership__tab-item").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      var activeTab = membershipTabs.querySelector(".membership__tab-item--active");
      if (item.isSameNode(activeTab)) {
        return;
      }
      activeTab.classList.remove("membership__tab-item--active");
      item.classList.add("membership__tab-item--active");

      var activeListId = activeTab.querySelector("a").getAttribute("href");
      var newActiveListId = item.querySelector("a").getAttribute("href");

      var activeList = document.querySelector(activeListId);
      activeList.classList.remove("membership__list--active");
      var newActiveList = document.querySelector(newActiveListId);
      newActiveList.classList.add("membership__list--active");
    });
  });
})();
