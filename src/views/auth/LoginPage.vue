<template>
  <TempTag>
    <div class="container">
      <ion-card>
        <ion-card-header>
          <ion-card-title>LOGIN</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <Form @submit="isSubmit">
            <ion-item>
              <field name="username" v-slot="{field}" rules="required|alpha_num">
                <ion-input v-bind="field" name="username" label="Username" label-placement="floating" placeholder="Enter your username"></ion-input>
              </field> 
              <ErrorMessage name="username" class="error"/>
            </ion-item>
            <ion-item>
              <field name="password" v-slot="{field}" rules="required|alpha_num">
                <ion-input v-bind="field" name="password" label="Password" label-placement="floating" placeholder="Enter your password"></ion-input>
              </field> 
              <ErrorMessage name="password" class="error"/>
            </ion-item>
            <ion-button type="submit">Login</ion-button>
          </Form>
        </ion-card-content>
      </ion-card>
    </div>
  </TempTag>
</template>

<script setup lang="ts">
import { IonInput, IonButton, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/vue";
import { useRouter } from "vue-router";
import TempTag from "@/components/TempTag.vue";

import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import { required, alpha_num } from "@vee-validate/rules";

defineRule('required', required);
defineRule('alpha_num', alpha_num);

const router = useRouter();

const isSubmit = (data: any) => {
  alert('Data : ' + JSON.stringify(data));

  router.push("/tabs/tab1");
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
  position: absolute;
  top: 40px;
  font-size: 15px;
  color: var(--ion-color-danger);
}

ion-card {
  text-align: center;
  padding: 5px;
}

ion-card-title {
  font-size: 50px;
  font-weight: bold;
  margin: 20px 0px;
  --color: var(--ion-color-dark);
}

ion-button {
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
  margin-top: 20px;
}

ion-input {
  --highlight-color-focused: var(--ion-color-medium);
}
</style>
