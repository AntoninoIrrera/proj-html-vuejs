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

import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import { faSortDown } from '@fortawesome/free-solid-svg-icons'

import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { faStar } from '@fortawesome/free-solid-svg-icons'

import { faClock } from '@fortawesome/free-solid-svg-icons'

import { faShare } from '@fortawesome/free-solid-svg-icons'

import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import { faPinterest } from '@fortawesome/free-brands-svg-icons'

import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'












library.add(faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faInstagram, 
faGooglePlusG, faLock, faBasketShopping, faSortDown, faAngleUp, faCaretLeft, 
faCaretRight, faStar, faClock, faShare, faYoutube, faPinterest, faCopyright,
faCirclePlay)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
