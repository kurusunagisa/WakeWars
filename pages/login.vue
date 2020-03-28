/* eslint-disable */
//ログインから戻ったときにアラート(successかerror)を出したい
<template>
  <v-app>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card>
          <v-card-title  class="headline">
            ログイン
          </v-card-title>
        </v-card>
          <v-container>
            <v-btn @click="googleLogin">googleでログイン</v-btn>
          </v-container>
            <v-container>
            <v-btn @click="googleLogout">ログアウト</v-btn>
          </v-container>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  middleware: '',
  mounted () {
    /*const firebase = require('firebase')
    const firebaseui = require('firebaseui')
    require('firebaseui/dist/firebaseui.css')

    const uiConfig = {
      signInSuccessUrl: '/login',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)*/
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("sign in")
      } else {
        console.log("not sign in")// No user is signed in.
      }
    });
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    googleLogout(){
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
        console.log("sign out")
      }).catch(function(error) {
        // An error happened.
        console.log("error")
      });
    }
  },
  async authstate (user){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var uid = user.uid
      } else {
        // User is signed out.
        // ...
      }
    });
  }
}
</Script>
