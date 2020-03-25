<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      src="https://lh3.googleusercontent.com/66O6rNE-SBLXKtS2ixPPwEOfcJ0r0MkGzb5Kq_6OYdnkVQQEOK6x8rVIavFIc1zZE85ZVees2q3TS0Xooo-GJrZ2ItSBXA7WlYpk-y1MyjffDtyIbJ6W11-qhqfA7HcHnhwlcP_wDqJX-q6UWAUQPtienCMZb7HP8Vgp6rTa2psJu139yJgfxt1xDSM9OQvQZfKbZOkXRfMc_xfY9M_kM_JzY7VkQCr1DcWYSceue-b5rs6SEMlrKNbmJuV-dTFFITGKXlb-o9vqkZLDLJR8qGBRap7PDQYGF4rQm903hAObSE9AJjgTxnXxMjuSj0pBqEbKzsdH-kVhppLVu60820-Ra3rjM6nYtTW1ykNTsEYI2EAPAAosfxRD0nak_s5PP2XSR-YDUdRRipQgibYTAkarpkaZ5OF3qD1IOsSqyl_MHh0YJoeFWiRboEBlSLkiuDyzr0C3WhNSUMdpL9SZintX1_kSbfFSJaGDnZXm5oKlPBtFYdEQH4CJlZbT2cEifsz-FC9yF_qveJS1VSYFDOqJEXep4DxySMeJMk2gccB7M4t4zdDZ4VylFQVzixvQMRwA0b9scIip3_AYgAJXSGdJqt2YJVi9foq3cL8QRjc4oJ4g_5BAuqfekKTKZe4YPoINNJb8O5xqtpPi6OpzayWcZFPF2GcNadt4ok-Gc9-crGLRycn8GVAxwEY=s250-k-rw-no"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar src="https://lh3.googleusercontent.com/66O6rNE-SBLXKtS2ixPPwEOfcJ0r0MkGzb5Kq_6OYdnkVQQEOK6x8rVIavFIc1zZE85ZVees2q3TS0Xooo-GJrZ2ItSBXA7WlYpk-y1MyjffDtyIbJ6W11-qhqfA7HcHnhwlcP_wDqJX-q6UWAUQPtienCMZb7HP8Vgp6rTa2psJu139yJgfxt1xDSM9OQvQZfKbZOkXRfMc_xfY9M_kM_JzY7VkQCr1DcWYSceue-b5rs6SEMlrKNbmJuV-dTFFITGKXlb-o9vqkZLDLJR8qGBRap7PDQYGF4rQm903hAObSE9AJjgTxnXxMjuSj0pBqEbKzsdH-kVhppLVu60820-Ra3rjM6nYtTW1ykNTsEYI2EAPAAosfxRD0nak_s5PP2XSR-YDUdRRipQgibYTAkarpkaZ5OF3qD1IOsSqyl_MHh0YJoeFWiRboEBlSLkiuDyzr0C3WhNSUMdpL9SZintX1_kSbfFSJaGDnZXm5oKlPBtFYdEQH4CJlZbT2cEifsz-FC9yF_qveJS1VSYFDOqJEXep4DxySMeJMk2gccB7M4t4zdDZ4VylFQVzixvQMRwA0b9scIip3_AYgAJXSGdJqt2YJVi9foq3cL8QRjc4oJ4g_5BAuqfekKTKZe4YPoINNJb8O5xqtpPi6OpzayWcZFPF2GcNadt4ok-Gc9-crGLRycn8GVAxwEY=s250-k-rw-no" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/">Wake Wars</v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-side-icon @click.stop="navBar = !navBar"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/login">Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ranking',
          to: '/ranking'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Wake Wars'
    }
  }
}
</script>
