import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faHeart, faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPersonWalking, faHeart, faDumbbell, faLinkedin, faGithub);

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')