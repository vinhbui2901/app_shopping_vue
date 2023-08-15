import { createApp } from 'vue';
import App from './App.vue';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AppModal from './components/app_modal/AppModal.vue';

const app = createApp(App);

app.component("app-modal",AppModal);

app.mount('#app');
