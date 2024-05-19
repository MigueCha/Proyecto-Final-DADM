<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vue Camera App 📷</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="content-container">
        <p class="text">Selecciona el icono de cámara 📷 y captura este momento 🎉</p>
        <ion-grid>
          <ion-row>
            <ion-col size="6" :key="photo" v-for="photo in photos">
              <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-fab vertical="bottom" horizontal="center" slot="fixed">
            <ion-fab-button @click="takePhoto()">
              <ion-icon :icon="camera"></ion-icon>
            </ion-fab-button>
        </ion-fab>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { camera } from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { usePhotoGallery, Photo } from '@/composables/usePhotoGallery';

export default  {
  name: 'Tab2',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonGrid, IonRow, IonCol, IonImg },
  setup() {
    const { takePhoto, photos, showActionSheet } = usePhotoGallery();
    return {
      camera, takePhoto, photos, showActionSheet 
    }
  }
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

.text {
  font-size: 18px;
  color: #3498db; /* Color azul */
  font-weight: bold;
  margin-bottom: 20px; /* Ajuste el margen inferior */
}

/* Ajuste la posición del botón */
ion-fab {
  position: absolute;
  bottom: 80px; /* Cambia la posición vertical */
}
</style>


