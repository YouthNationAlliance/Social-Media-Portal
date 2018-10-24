<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="600"
      scrollable
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Click Me
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
        <span>Connect with us on social media</span>
        </v-card-title>

        <v-card-text style="height: 500px;">

        <img src="../assets/modal.png" style="width: 550px"/>

        <v-list two-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
          >
            {{ item.header }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :inset="item.inset"
            :key="index"
          ></v-divider>

          <v-list-tile
            v-else
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        items: [
         {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
           title: 'Visit us online',
           subtitle: "www.ynalliance.ca"
         },
         { divider: true, inset: true },
         {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
           title: 'Facebook',
           subtitle: "@teamyna"
         },
         { divider: true, inset: true },
         {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
           title: 'Instagram',
           subtitle: "@teamyna"
         }
       ]
      }
    }
  }
</script>
