<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tablet 📱</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div class="content-container">
      <p class="text">Aplicación desarrollada con la tecnología de <strong>Vue</strong> y <strong>Ionic</strong></p>
        <div class="image-container">
        <br>
        <br>
          <img src="https://vuejs.org/images/logo.png" alt="Vue.js Logo" class="logo">
          <img src="https://www.eenda.com/static/media/images/blog/que-es-ionic-y-por-que-debo-programar-mis-aplicaciones-moviles-con-esta-herramienta-post.webp" alt="Ionic Logo" class="logo">
        </div>
    
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 100px; /* Ajusta el tamaño del logo según lo necesites */
  margin: 0 10px; /* Ajusta el espacio entre las imágenes */
}

.text {
  font-size: 18px;
  color: #3498db; /* Color azul */
  font-weight: bold;
}
</style>