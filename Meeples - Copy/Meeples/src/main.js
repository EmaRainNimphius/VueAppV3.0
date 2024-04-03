import { createApp } from 'vue'

// added for quasar
import { Quasar } from 'quasar'

// import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'
import router from './router'

// import personal scss
import "../src/scss/_variables.scss";

// import bootstrap bundle
import "bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App)

// added for quasar
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.use(router)


app.mount('#app')
