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
            <v-btn nuxt to="/login">signIn</v-btn>
            <v-btn color="primary" nuxt to="/wakeup">
              起きたよ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
</script>
