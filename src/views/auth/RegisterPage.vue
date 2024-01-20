<template>
  <TempTag>
    <div class="container">
      <div class="subcon">
        <h1>Make An Account</h1>
        <div class="input">
          <ion-item>
            <ion-input label="Name" label-placement="floating" placeholder="Enter your name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="email" label="Email" label-placement="floating" placeholder="Enter your email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Phone Number" label-placement="floating" placeholder="Enter your phone number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-select label="Gender" label-placement="floating">
              <ion-select-option value="Male">Male</ion-select-option>
              <ion-select-option value="Female">Female</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-input label="Username" label-placement="floating" placeholder="Enter Username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="password" label="Passowrd" label-placement="floating" placeholder="Enter Password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="password" label="Repeat Passowrd" label-placement="floating" placeholder="Enter Password"></ion-input>
          </ion-item>
        </div>
        <div class="btn">
          <ion-button>Register</ion-button>
          <ion-button @click="back">Back</ion-button>
        </div>
      </div>
    </div>
  </TempTag>
</template>

<script setup lang="ts">
import { IonInput, IonButton, IonItem, IonSelect, IonSelectOption } from "@ionic/vue";
import TempTag from "@/components/TempTag.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const back = () => {
  router.push("/landing");
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

.subcon {
  border: 1px solid black;
  padding: 15px 15px 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 0px 1px black;
}

.container h1 {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}

.input {
  width: 100%;
}

.subcon .btn {
  margin-top: 10px;
  margin-bottom: 10px;
}

.subcon .btn ion-button {
  margin: 8px;
}

.subcon .btn ion-button:nth-child(1) {
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
}

.subcon .btn ion-button:nth-child(2) {
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
}
</style>
