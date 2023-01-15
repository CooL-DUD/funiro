const swiperAbout = new Swiper('.swiperAbout', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    parallax: true,
    loopAdditionalSlides: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-paginationAbout',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-nextAbout',
        prevEl: '.swiper-button-prevAbout',
    },
});
const swiperIns = new Swiper('.swiperIns', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    parallax: true,
    loopAdditionalSlides: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-paginationIns',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-nextIns',
        prevEl: '.swiper-button-prevIns',
    },
});
const swiperTips = new Swiper('.swiperTips', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    parallax: true,
    slidesPerView: 1,
    breakpoints: {
      728: {
          slidesPerView: 3
      }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-paginationTips',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-nextTips',
        prevEl: '.swiper-button-prevTips',
    },
});