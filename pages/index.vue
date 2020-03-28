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
            <v-btn color="primary" @click="click">
              起きたよ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  middleware: 'auth',
  methods: {
    click() {
      const date = new Date()
      const basedate = new Date()
      basedate.setHours(7);
      basedate.setMinutes(0);
      basedate.setSeconds(0);
      basedate.setMilliseconds(0);
      //console.log(date.getTime());
      //console.log(basedate.getTime());
      //console.log(date.getTime() - basedate.getTime());
      const diff = date.getTime() - basedate.getTime();
      var user = firebase.auth().currentUser;
      var uid,username;

      if (user != null) {
        uid = user.uid;  // The user's ID, unique to the Firebase
        username = user.displayName;
      }
      const dbName = basedate.getFullYear().toString() + basedate.getMonth().toString() + basedate.getDate().toString()
      //console.log(dbName)
      //console.log(uid)
      const db = firebase.firestore()
      if(diff >= 0){
        db.collection(dbName).add({
          name: username,
          id: uid,
          time:(new Date(diff).toISOString().slice(11, -1)).toString()
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
        window.location.href = "/wakeup"
      }else{
        alert("時間前だよ")
        console.log("時間前だよ")
      }
    }
  }
}
</script>
