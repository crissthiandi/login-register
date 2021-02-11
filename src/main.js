import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import firebase from 'firebase'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCXeTtO5yho2y1TM-Ev2QHKMEpBCllabFY",
    authDomain: "data4all2.firebaseapp.com",
    databaseURL: "https://data4all2.firebaseio.com",
    projectId: "data4all2",
    storageBucket: "data4all2.appspot.com",
    messagingSenderId: "819788457185",
    appId: "1:819788457185:web:44c4b7362c9fd05ef303a0",
    measurementId: "G-EWK3XYT3VD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
