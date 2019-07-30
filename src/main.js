import Vue from 'vue';
import firebase from 'firebase';
import dotenv from 'dotenv';

import App from './App.vue';
import router from './router';

dotenv.config();

Vue.config.productionTip = false;

const app = '';
// Initialize Firebase
firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: `${process.env.VUE_APP_FIREBASE_APIKEY}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_FIREBASE_APIKEY}.firebaseio.com`,
  projectId: `${process.env.VUE_APP_FIREBASE_APIKEY}`,
  storageBucket: '',
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDING_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
