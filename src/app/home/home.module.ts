import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NgxUsefulSwiperModule
    ]
})
export class HomeModule { }

