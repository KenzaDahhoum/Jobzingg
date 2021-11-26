<template>
  <v-row justify="center" >

    <v-dialog
      v-model="dialog"
      halfscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="mr-1"
        small
        @click="Show(item)" 
        v-on="on"
        v-bind="attrs"
      >
        mdi-eye
      </v-icon>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>View Details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
       <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
      no-gutters
    >
       <v-col md="5">
        <v-card class="pa-2" cols="auto" outlined tile>
           View Client
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
     <v-col md="5">
        <v-card
          class="pa-2"
          cols="auto"
          outlined
          tile
        >
          .col-md-5
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
       <v-col md="5">
        <v-card
          class="pa-2"
          cols="auto"
          outlined
          tile
        >
          .col-md-5
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
        <v-col md="5">
        <v-card
          class="pa-2"
          cols="auto"
          outlined
          tile
        >
          .col-md-5
        </v-card>
      </v-col>
    </v-row>
  </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

   <script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
         items: ["Foo", "Bar", "Fizz", "Buzz"],
      editedIndex:-1,
     editedItem:{ name:'',
     location:'',
     website:'',
     description:''},
      }
    },
  }
</script>
