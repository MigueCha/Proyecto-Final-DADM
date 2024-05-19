<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-title class="toolbar-title">
          <img src="https://raw.githubusercontent.com/JenniferAw26/VueJs-ShoppingCart/main/md/img/Itgam_banner.jpg" alt="Logo" class="toolbar-logo">
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="custom-content">
      <ion-tabs>
        <ion-tab-bar slot="bottom" class="custom-tab-bar">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="phonePortrait" class="icon-style color-1"/>
            <ion-label class="label-style color-2">Phone</ion-label>
          </ion-tab-button>
            
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="laptop" class="icon-style color-3"/>
            <ion-label class="label-style color-2">Portátil</ion-label>
          </ion-tab-button>
          
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="tabletPortrait" class="icon-style color-1"/>
            <ion-label class="label-style color-2">Tablet</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { phonePortrait, laptop, tabletPortrait } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      phonePortrait,
      laptop,
      tabletPortrait,
    }
  }
}
</script>

<style scoped>
/* Ajustes de estilo */
.toolbar-logo {
  max-width: 600px; /* Tamaño máximo de la imagen */
  max-height: 400px; /* Tamaño máximo de la imagen */
  margin: auto; /* Centrar la imagen horizontalmente */
  display: block; /* Ajustar el comportamiento del elemento */
}

/* Paleta de colores y otros estilos (mantenidos sin cambios) */
:root {
  --ion-color-primary: #3498db;
  --ion-color-secondary: #2ecc71;
  --ion-color-tertiary: #9b59b6;
  --ion-color-success: #82e0aa;
  --ion-color-warning: #f1c40f;
  --ion-color-danger: #e74c3c;
  --ion-color-light: #ffffff; /* Fondo blanco */
  --ion-color-medium: #95a5a6;
  --ion-color-dark: #34495e;
}

.custom-toolbar {
  --background: var(--ion-color-light);
  background-color: var(--ion-color-light);
  display: flex;
  justify-content: center;
  align-items: center;
}

.toolbar-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.custom-content {
  --background: var(--ion-color-light);
  background-color: var(--ion-color-light);
}

.custom-tab-bar {
  --background: var(--ion-color-light);
  background-color: var(--ion-color-light);
  border-top: 1px solid var(--ion-color-medium);
}

ion-tab-button {
  color: var(--ion-color-dark);
}

ion-tab-button.ion-selected {
  color: var(--ion-color-primary);
}

.icon-style {
  font-size: 24px;
}

.label-style {
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

/* Colores personalizados */
.color-1 { color: var(--ion-color-primary); }
.color-2 { color: var(--ion-color-dark); }
.color-3 { color: var(--ion-color-secondary); }
</style>
