<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="container">
        <div class="popular-book">
          <h1>Popular Book</h1>
          <div class="content">
            <swiper
              :slidesPerView="3"
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="Pagination">
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 1
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage,
        IonHeader,
        IonToolbar, 
        IonTitle, 
        IonContent,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle } from "@ionic/vue";

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css/pagination';

import 'swiper/css';

import '@ionic/vue/css/ionic-swiper.css';

import { Pagination } from 'swiper/modules';


</script>

<style scoped>
.container {
  border: 1px solid black;
}

.popular-book .content {
  display: flex;
}

ion-card {
  margin: 5px;
}
</style>
