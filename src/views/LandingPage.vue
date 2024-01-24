<template>
  <TempTag>
    <div class="container">
      <h1>WELCOME</h1>
      <div class="btn">
        <ion-button class="lp-btn" @click="loginPage">Sign In</ion-button>
        <ion-button class="lp-btn" @click="registerPage">Sign Up</ion-button>
      </div>
    </div>
  </TempTag>
</template>

<script setup lang="ts">
import { IonButton } from "@ionic/vue";
import TempTag from "@/components/TempTag.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const loginPage = () => {
  router.push("/login");
};

const registerPage = () => {
  router.push("/register");
};
</script>

<style scoped>
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
  --background: var(--ion-color-light);
  --background-hover: var(--ion-color-medium-shade);
  --background-activated: var(--ion-color-medium-tint);
  --background-focused: var(--ion-color-medium-tint);

  --color: var(--ion-color-dark);

  --border-radius: 5px;
  --border-color: var(--ion-color-dark);
  --border-style: solid;
  --border-width: 1px;

  /* --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25); */

  --ripple-color: var(--ion-color-medium);

  --padding-top: 10px;
  --padding-bottom: 10px;
  margin: 5px;
  width: 160px;
}

.lp-btn:nth-child(2) {
  --background: var(--ion-color-dark-contrast);
  --background-hover: rgb(220, 220, 220);
  --background-activated: rgb(215, 215, 215);
  --background-focused: rgb(220, 220, 220);

  --color: var(--ion-color-dark);

  --border-radius: 5px;
  --border-color: var(--ion-color-dark);
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
