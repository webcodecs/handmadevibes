import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
import precognition from 'laravel-precognition-alpine';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin([collapse, focus, morph, persist, precognition])
Alpine.start()

// Initialize Swiper for article sliders
document.addEventListener('DOMContentLoaded', () => {
    const articleSwipers = document.querySelectorAll('.article-swiper');

    articleSwipers.forEach((swiperElement) => {
        new Swiper(swiperElement, {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 24,
            loop: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: swiperElement.parentElement.querySelector('.swiper-button-next'),
                prevEl: swiperElement.parentElement.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: swiperElement.parentElement.querySelector('.swiper-pagination'),
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
            },
        });
    });
});
