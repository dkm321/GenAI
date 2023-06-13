import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import VueGtag from 'vue-gtag'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router';

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives
  })
  
app.use(VueGtag, {
    config: { id: "G-9KH1TRP68P" }
  });

app.use(vuetify).use(router);
app.mount('#app')