//右上にログインボタンを追加したい
<template>
  <v-app>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card>
          <v-card-title class="headline">
            Wake Wars
          </v-card-title>
          <v-card-text>
            <p>朝7時に起きてね</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/wakeup">
              起きたよ
            </v-btn>
            <v-btn @click="click">クリック</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  methods: {
    click() {
      /*const response = this.$axios.$post("https://www.amazon.co.jp")
        .then( response => {
          window.location.href = "/login"
        })
        .catch( error => {
          window.location.href = "/ranking"
        })*/
      const db = firebase.firestore()
      db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }
  }
}
</script>
