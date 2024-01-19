<template>
  <ion-page>
    <ion-content>
      <div class="con-login">
        <h1>Login</h1>
        <div class="input">
          <ion-item class="user">
            <ion-input label="Username" label-placement="floating" placeholder="Enter Username" class="input-login" :maxlength="20"></ion-input>
          </ion-item>
          <ion-item class="pass">
            <ion-input type="password" label="Password" label-placement="floating" placeholder="Enter Password" class="input-login" :maxlength="20"></ion-input>
          </ion-item>
          <ion-button class="login">Login</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton, IonItem } from "@ionic/vue";
</script>

<style>
ion-input.input-login {
  --background: transparent;
  --color: black;
  --placeholder-color: black;
  --placeholder-opacity: 0.8;
  --highlight-color-focused: black;

  --padding-bottom: 10px;
  --padding-top: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
}

ion-item.user {
  margin-bottom: 20px;
}
</style>
