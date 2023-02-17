import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faHeart, faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'




library.add(faPersonWalking, faHeart, faDumbbell, faLinkedin, faGithub);


createApp(App)
.use(store)
.use(router)
.mount('#app')
.component('fa', FontAwesomeIcon)

