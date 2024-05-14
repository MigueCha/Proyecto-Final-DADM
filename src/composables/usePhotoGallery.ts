import { ref, onMounted, watch } from 'vue'; 
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'; 
import { Filesystem, Directory } from '@capacitor/filesystem'; 
import { Preferences } from '@capacitor/preferences';