import VueSweetalert2 from 'vue-sweetalert2';

import BootstrapVueNext from 'bootstrap-vue-next';
import vClickOutside from "click-outside-vue3";
import VueApexCharts from "vue3-apexcharts";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxt/eslint'],
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/app.min.css',
    '@/assets/css/icons.min.css',
    'sweetalert2/dist/sweetalert2.min.css',
    'leaflet/dist/leaflet.css',
    // '@/assets/scss/config/default/app.scss',
    // '@/assets/scss/mermaid.min.css',
  ],
})