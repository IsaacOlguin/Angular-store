import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  imagenes: string[] = [
    '../../../assets/images/banner-1.jpg',
    '../../../assets/images/banner-2.jpg',
    '../../../assets/images/banner-3.jpg',
  ];

  configuracion: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    /*breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },*/
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true
  };

  constructor() {}

  ngOnInit(): void {}
}
