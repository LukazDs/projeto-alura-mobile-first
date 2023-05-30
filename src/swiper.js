import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

function makeSwiper() {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 20,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
    })
}

makeSwiper()