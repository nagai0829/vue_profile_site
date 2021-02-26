import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Font awesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import {
//     faUser,
//     faSignOutAlt,
//     faEllipsisV
// } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(
//     faUser,
//     faSignOutAlt,
//     faEllipsisV
// )

// Vue.component('fa', FontAwesomeIcon)

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

const VModal = window["vue-js-modal"].default
Vue.use(VModal);
Vue.use(firestorePlugin)

firebase.initializeApp({
    apiKey: "AIzaSyBpfpEsWgTZHQSMbStjjGwn4gek1jfOxvU",
    authDomain: "whisperer-5e60a.firebaseapp.com",
    databaseURL: "https://whisperer-5e60a-default-rtdb.firebaseio.com",
    projectId: "whisperer-5e60a",
    storageBucket: "whisperer-5e60a.appspot.com",
    messagingSenderId: "518866607398",
    appId: "1:518866607398:web:669b9b57ff677f840635e7",
    measurementId: "G-11KPDTGN21"
})

export const db = firebase.firestore()
export const auth = firebase.auth()


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')