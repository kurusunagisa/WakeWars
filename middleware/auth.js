import firebase from '@/plugins/firebase'
export default function({ }) {
  firebase.auth().onAuthStateChanged(function (user) {
   //console.log(firebase.auth().currentUser)
    if (user) {
      console.log('sign in')
    } else {
      console.log('not sign in') // No user is signed in.
      window.location.href = "/login"
    }
  })
}
