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
              :spaceBetween="15"
              :freeMode="true"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper">
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
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 2
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 3
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 4
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 5
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="best-book">
          <h1>Best Book</h1>
          <div class="content">
            <swiper
              :slidesPerView="3"
              :spaceBetween="15"
              :freeMode="true"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper">
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
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 2
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 3
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 4
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 5
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="rekom-book">
          <h1>Recomendation Book</h1>
          <div class="content">
            <swiper
              :slidesPerView="3"
              :spaceBetween="15"
              :freeMode="true"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper">
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
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 2
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 3
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 4
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
              <swiper-slide>
                <ion-card>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <ion-card-header>
                    <ion-card-title>
                      Book 5
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    hahahahah
                  </ion-card-content>
                </ion-card>
              </swiper-slide>
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
import 'swiper/css/free-mode';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

import { FreeMode, Pagination } from 'swiper/modules';

const modules = [FreeMode, Pagination];

</script>

<style scope>
.container {
  padding: 5px;
}

.mySwiper {
  padding: 10px;
}

.popular-book h1 {
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid black;
}

.best-book h1 {
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid black;
}

.rekom-book h1 {
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px solid black;
}

ion-card {
  box-shadow: 4px 4px 0px 0px black;
  width: 200px;
}
</style>
