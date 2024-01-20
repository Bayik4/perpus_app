<template>
  <TempTag>
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
  </TempTag>
</template>

<script setup lang="ts">
import { IonInput, IonButton, IonItem } from "@ionic/vue";
import TempTag from "@/components/TempTag.vue";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
}

.con-login {
  margin: 50% 20px;
  box-shadow: 6px 6px 0px 1px black;
  border: 1px solid black;
}

.con-login h1 {
  font-weight: bold;
  font-size: 40px;
  text-align: center;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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

ion-button {
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
  margin: 20px 0px;
  width: 130px;
}
</style>
