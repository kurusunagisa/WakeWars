/* eslint-disable */
<template>
  <v-app>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-container>
          <div id="firebaseui-auth-container" />
        </v-container>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  mounted () {
    const firebase = require('firebase')
    const firebaseui = require('firebaseui')
    require('firebaseui/dist/firebaseui.css')

    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    }
    const firebaseConfig = {
      apiKey: 'AIzaSyDs5OmX7cGrkGDp4d59bceaDgBtmEzVn0A',
      authDomain: 'wakewars-22423.firebaseapp.com',
      databaseURL: 'https://wakewars-22423.firebaseio.com',
      projectId: 'wakewars-22423',
      storageBucket: 'wakewars-22423.appspot.com',
      messagingSenderId: '298606668680'
    }
    firebase.initializeApp(firebaseConfig)

    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</Script>
