import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faFacebookF, faGithub, faEnvelope, faLinkedinIn)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.mount('#app');
