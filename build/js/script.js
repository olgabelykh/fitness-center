"use strict";

(function () {
  var instructorsSlider = document
    .querySelector("#instructors")
    .querySelector(".swiper-container");

  if (!instructorsSlider) {
    return;
  }

  var instructorsSwiper = new Swiper(instructorsSlider, {
    slidesPerView: "auto",
    spaceBetween: 40,
    loopedSlides: 8,
    loop: true,
    loopFillGroupWithBlank: true,
    updateOnWindowResize: true,

    navigation: {
      nextEl: ".slider--instructors .slider__button--next",
      prevEl: ".slider--instructors .slider__button--prev",
    },
  });
})();

(function () {
  var reviewsSlider = document
    .querySelector("#reviews")
    .querySelector(".swiper-container");

  if (!reviewsSlider) {
    return;
  }

  var reviewsSwiper = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    loopedSlides: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    updateOnWindowResize: true,

    navigation: {
      nextEl: ".slider--reviews .slider__button--next",
      prevEl: ".slider--reviews .slider__button--prev",
    },
  });
})();
