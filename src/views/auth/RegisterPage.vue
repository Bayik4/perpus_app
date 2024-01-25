<template>
  <TempTag>
    <div class="container">
      <ion-card>
        <ion-card-header>
          <ion-card-title>REGISTER AN ACCOUNT</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <Form @submit="isSubmit">
            <ion-item>
              <field name="fullname" v-slot="{field}" rules="required">
                <ion-input v-bind="field" name="fullname" label="Full Name" label-placement="floating" placeholder="Enter your fullname"></ion-input>
              </field>
              <ErrorMessage name="fullname" class="error"/>
            </ion-item>
            <ion-item>
              <field name="email" v-slot="{field}" rules="required|email">
                <ion-input v-bind="field" type="email" name="email" label="Email" label-placement="floating" placeholder="Enter your email"></ion-input>
              </field>
              <ErrorMessage name="email" class="error"/>
            </ion-item>
            <ion-item>
              <field name="password" v-slot="{field}" rules="required">
                <ion-input v-bind="field" type="password" name="password" label="Password" label-placement="floating" placeholder="Enter your password"></ion-input>
              </field>
              <ErrorMessage name="password" class="error"/>
            </ion-item>
            <ion-item>
              <field name="confirmation" v-slot="{field}" rules="required|confirmed:@password">
                <ion-input v-bind="field" type="password" name="password" label="Repeat Password" label-placement="floating" placeholder="Enter your password again"></ion-input>
              </field>
              <ErrorMessage name="confirmation" class="error"/>
            </ion-item>
            <ion-button type="submit" class="submit">Register</ion-button>
            <ion-button @click="back" class="back">Back</ion-button>
          </Form>
        </ion-card-content>
      </ion-card>
    </div>
  </TempTag>
</template>

<script setup lang="ts">
import { IonInput, IonButton, IonItem, IonSelect, IonSelectOption, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/vue";
import TempTag from "@/components/TempTag.vue";
import { useRouter } from "vue-router";

import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import { required, confirmed, email } from '@vee-validate/rules';

defineRule('required', required);
defineRule('confirmed', confirmed);
defineRule('email', email);

const router = useRouter();

const back = () => {
  router.push("/landing");
};

const isSubmit = (data: any) => {
  alert('Data : ' + JSON.stringify(data))
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error {
  font-size: 15px;
  color: var(--ion-color-danger);
}

ion-card {
  text-align: center;
  padding: 10px;
}

ion-card-title {
  font-size: 23px;
  font-weight: bold;
  --color: var(--ion-color-dark);
}

.submit {
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
  margin: 5px;
  margin-top: 30px;
}

.back {
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
  margin-top: 30px;
}

ion-input {
  --highlight-color-focused: var(--ion-color-medium);
}
</style>
