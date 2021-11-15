<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
      
        <v-btn small :v-on="on" v-bind="attrs" outlined color="#22c3bb" @click="dialog=true"><v-icon>mdi-filter-variant</v-icon>Filters</v-btn>
         </template>
      <v-card>
          <v-card-title>
              <h2>Add Filter</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form">
                <v-text-field label="Filter"></v-text-field>
                
                <v-btn color="#22c3bb" class="mx-0 mt-3 mr-3" small text @click="Filter">Filter</v-btn>
                 <v-btn class="mx-0 mt-3" @click="dialog =false" small text >Reset</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
    </v-dialog>
    </div>
    
</template>
<script>
export default {
   data(){
       return {
          dialog:false,
       }
   }
}
</script>