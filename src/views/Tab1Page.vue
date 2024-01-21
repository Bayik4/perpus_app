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
      <div class="content">
        <div class="pop-books">
          <h1>Popular Books</h1>
          <div class="container-content">
            <div class="card">
              <div class="card-header">
                <h3>Book1</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book2</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book3</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book4</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book5</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="rk-books">
          <h1>Recomendation Books</h1>
          <div class="container-content">
            <div class="card">
              <div class="card-header">
                <h3>Book1</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book2</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book3</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book4</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3>Book5</h3>
              </div>
              <div class="card-body">
                <p>gambar</p>
              </div>
              <div class="card-footer">
                <h5>Rp. 10.000,-</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue";
</script>

<style scoped>
.content {
  /* border: 1px solid black; */
  margin: 5px;
}

.pop-books h1 {
  border-bottom: 2px solid black;
}

.rk-books h1 {
  border-bottom: 2px solid black;
}

.container-content {
  /* border: 1px solid black; */
  margin: 5px;
  display: flex;
  overflow-x: scroll;
}

.card {
  border: 1px solid black;
  width: 120px;
  border-radius: 5px;
  margin: 10px;
}

.card-header {
  padding: 3px 5px;
}

.card .card-body {
  height: 80px;
  width: 100px;
  padding: 10px;
  text-align: center;
}

.card .card-footer {
  text-align: end;
  padding: 3px 5px;
}
</style>
