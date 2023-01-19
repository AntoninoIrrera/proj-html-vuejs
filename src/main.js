import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

import { faLock } from '@fortawesome/free-solid-svg-icons'






library.add(faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGooglePlusG, faLock)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
