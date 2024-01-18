<template>
    <ion-page>
        <ion-content>
            <div class="container">
                <ion-item>
                    <ion-input label="Username" label-placement="floating" placeholder="Enter Username"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label="Password" type="password" label-placement="floating" placeholder="Enter Username"></ion-input>
                </ion-item>
                <ion-item class="btn">
                    <ion-button class="btn-login" shape="round">Login</ion-button>
                    <ion-button class="btn-reg" shape="round">Register</ion-button>
                </ion-item>
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
    IonInput, 
    IonItem,
    IonButton} from '@ionic/vue';
</script>

<style>
    .container {
        border: 1px solid black;
        width: 300px;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ion-button {
        width: 100px;
    }

    .btn {
        border: 1px solid black;    
    }
    
</style>

