<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <h1>WELCOME</h1>
        <div class="btn">
          <ion-button class="lp-btn" href="/login">Sign In</ion-button>
          <ion-button class="lp-btn" href="/register">Sign Up</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from "@ionic/vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container h1 {
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 70px;
}

.btn {
  display: flex;
  flex-direction: column;
}

.lp-btn {
  --background: rgb(230, 230, 230);
  --background-hover: rgb(220, 220, 220);
  --background-activated: rgb(215, 215, 215);
  --background-focused: rgb(220, 220, 220);

  --color: black;

  --border-radius: 5px;
  /* --border-color: #000;
  --border-style: solid;
  --border-width: 0px; */

  /* --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25); */

  --ripple-color: rgb(100, 100, 100);

  --padding-top: 10px;
  --padding-bottom: 10px;
  margin: 5px;
  width: 160px;
}

.lp-btn:nth-child(2) {
  --background: transparent;
  --background-hover: rgb(220, 220, 220);
  --background-activated: rgb(215, 215, 215);
  --background-focused: rgb(220, 220, 220);

  --color: black;

  --border-radius: 5px;
  --border-color: #000;
  --border-style: solid;
  --border-width: 1px;

  /* --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25); */

  --ripple-color: rgb(100, 100, 100);

  --padding-top: 10px;
  --padding-bottom: 10px;
  margin: 5px;
  width: 160px;
}
</style>
