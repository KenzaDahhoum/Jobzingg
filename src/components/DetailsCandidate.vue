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
        color="rgba(0,0,0,.87)"
      >
        mdi-eye
      </v-icon>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="#1976d2"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>View Candidate</v-toolbar-title>
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
            <v-card-title>
          <h4>Details Candidate</h4>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Client name"  ></v-text-field>
            <v-text-field label="Website"  ></v-text-field>
            <v-text-field label="Location" ></v-text-field>
          </v-form>
        </v-card-text>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
     <v-col md="5">
        <v-card class="pa-2" cols="auto" outlined tile>
            <v-card-title>
                <h4>Skills</h4>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
             <v-flex justify="center"> 
                  <AddSkills class="ml-7 mt-1"/>
             </v-flex>
                </v-form>
            </v-card-text>
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
import AddSkills from './AddSkills.vue'
  export default {
  components: { AddSkills },
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
