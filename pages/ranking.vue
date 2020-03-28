<template>
<v-app>
  <v-layout >
    <v-flex xs12 sm8 md6>
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in ranking" :key="item.time">
            <td>{{ item.id }}</td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-flex>
  </v-layout>
</v-app>
</template>

<script>
  import firebase from '@/plugins/firebase'
  export default {
    data: () => ({
      dense: false,
      fixedHeader: false,
      height: 300,
      //ranking: [],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
      ranking : [],
    }),
    async asyncData ({ store, params }) {{
      const db = firebase.firestore()
      var rank = []
      db.collection("rank").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots]
          ///console.log(doc.id, " => ", doc.data());
          rank.push(doc.data())
        });
      });
      return {ranking: rank}
    }
  }
}
</script>
