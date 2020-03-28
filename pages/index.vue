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
  data: () => ({
    ranking: []
    }),
  methods: {
    click() {
      /*const response = this.$axios.$post("https://www.amazon.co.jp")
        .then( response => {
          window.location.href = "/login"
        })
        .catch( error => {
          window.location.href = "/ranking"
        })*/
      var user = firebase.auth().currentUser;
      var uid,username;

      if (user != null) {
        uid = user.uid;  // The user's ID, unique to the Firebase
        username = user.displayName;
      }
      console.log(uid)
      const db = firebase.firestore()
      const date = new Date()
      const basedate = new Date()
      basedate.setHours(7);
      basedate.setMinutes(0);
      basedate.setSeconds(0);
      basedate.setMilliseconds(0);
      console.log(date.getTime());
      console.log(basedate.getTime());
      console.log(date.getTime() - basedate.getTime());
      if(date.getTime() - basedate.getTime() > 0){
        db.collection("rank").add({
          name: username,
          id: uid,
          time: date.getTime()
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      }else{
        //時間前ページに移動する
        alert("時間前だよ")
        console.log("時間前だよ")
      }
      var ranking
      db.collection("rank").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots]
          console.log(doc.id, " => ", doc.data());
        });
        ranking = querySnapshot.docs
        console.log(querySnapshot.docs)
      });
      this.ranking = ranking
      console.log("this" , this.ranking)
    //window.location.href = "/wakeup"
    }
  }
}
</script>
