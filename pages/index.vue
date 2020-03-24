<template>
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
          <v-btn @click="signIn">signIn</v-btn>
+          <p>isAuthenticated: {{ isAuthenticated }}</p>
          <v-btn color="primary" nuxt to="/wakeup">
            起きたよ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('user', ['signIn'])
  }
}
</script>
