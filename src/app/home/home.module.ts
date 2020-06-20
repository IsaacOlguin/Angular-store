import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgxUsefulSwiperModule
    ]
})
export class HomeModule { }

