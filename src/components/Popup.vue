<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
      <v-btn  color="#22c3bb" small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon></v-btn>
         </template>
      <v-card>
          <v-card-title>
              <h2>Create Job</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                <v-text-field label="Position name"  prepend-icon="mdi-briefcase" :rules="inputRules"></v-text-field>
                
                 <v-select :items="items" label="Client" prepend-icon="mdi-bank-outline"  :rules="inputRules"></v-select>
                <v-text-field label="Location"  prepend-icon="mdi-map-marker" :rules="inputRules"></v-text-field>
                <v-text-field label="Headcount" prepend-icon="mdi-account-box-multiple"></v-text-field>
                  <v-select :items="items" label="Contrat Details" prepend-icon="mdi-file-document-edit"  :rules="inputRules"></v-select>

                <v-text-field label="Maximum Salary" prepend-icon="mdi-currency-usd" :rules="inputRules"></v-text-field>

                <v-text-field label="Minimum Salary"  prepend-icon="mdi-currency-usd" :rules="inputRules"></v-text-field>

                <v-textarea label="Job Description"  prepend-icon="mdi-text">
        
  <!-- <v-toolbar dense>
    <v-overflow-btn  :items="dropdown_font" label="Select font" hide-details class="pa-0"></v-overflow-btn>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-divider vertical></v-divider>
      <v-overflow-btn :items="dropdown_edit" editable label="Select size" hide-details class="pa-0" overflow ></v-overflow-btn>
      <v-divider vertical></v-divider>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="toggle_multiple" color="primary" dense group multiple>
        <v-btn :value="1" text><v-icon>mdi-format-bold</v-icon></v-btn>
        <v-btn :value="2" text><v-icon>mdi-format-italic</v-icon></v-btn>
        <v-btn :value="3" text><v-icon>mdi-format-underline</v-icon></v-btn>
        <v-btn :value="4" text><v-icon>mdi-format-color-fill</v-icon></v-btn>
      </v-btn-toggle>
      <div class="mx-4"></div>
      <v-btn-toggle v-model="toggle_exclusive" color="primary" dense group>
        <v-btn :value="1" text><v-icon>mdi-format-align-left</v-icon></v-btn>
          <v-btn :value="2" text ><v-icon>mdi-format-align-center</v-icon></v-btn>
        <v-btn :value="3" text> <v-icon>mdi-format-align-right</v-icon></v-btn>
        <v-btn :value="4" text >  <v-icon>mdi-format-align-justify</v-icon></v-btn>
      </v-btn-toggle>
    </template>
  </v-toolbar> -->

                </v-textarea>
                <v-btn color="#22c3bb" class="mx-0 mt-3 mr-3" @click="submit">Contenue</v-btn>
                <v-btn class="mx-0 mt-3" @click="Exit">Cancel</v-btn>
              </v-form>
          </v-card-text>
    
         
      </v-card>
    </v-dialog>
    </div>
    
</template>

<script>
export default {
    data(){
        
return{
  
    
    items: ['CDI', 'CDD', 'Stage'],
 dialog: false,
 title:'',
 content:'',
 inputRules:[value => !!value || 'Required.', value => (value && value.length >= 3) || 'Min 3 characters',],
 }
    },
    methods:{
           submit(){
                 console.log(this.title)
             },
         
    }
}
</script>