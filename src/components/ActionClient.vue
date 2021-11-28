<template>
     <v-col lg="5" cols="12"  class="d-flex flex-row-reverse">
        <v-menu offset-y >
      <template v-slot:activator="{ on, attrs }" >
        <span  
          v-bind="attrs" v-on="on" style="cursor: pointer" >
          <v-btn small text flat >
                <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>         
        </span>
      </template>
     <v-list width="150" class="py-0">
        <v-list-item >
          <v-list-item-icon>
              <v-icon small>mdi-pencil</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>Edit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
              <v-icon small>mdi-delete</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>Delete</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
     </v-menu>
      </v-col>
</template>
<script>
import EditClient from './EditJob.vue'
export default {
    components:[EditClient],
    data(){
        return{
      
        }
    }
}
</script>