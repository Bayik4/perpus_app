<template>
  <ion-page>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Courier New", Courier, monospace;
}
</style>
