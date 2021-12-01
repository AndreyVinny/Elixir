const swiper = new Swiper('.services-slider', {
  navigation: {
    nextEl: '.swiper-button-next-service',
    prevEl: '.swiper-button-prev-service',
  },
  pagination: {
    el: '.swiper-pagination-service',
    clickable: true,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  mousewheel: {
      sensitivity: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1720: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

const swiper_master = new Swiper('.master-slider', {
  pagination: {
    el: '.swiper-pagination-master',
    clickable: true,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  mousewheel: {
      sensitivity: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});


const swiper_gallery = new Swiper('.gallery-slider', {
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  mousewheel: {
      sensitivity: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1720: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
})