<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
      <v-btn  color="#22c3bb" small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon></v-btn>
         </template>
      <v-card>
          <v-card-title>
              <h2>Create Candidate</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                <v-text-field label="Candidate Name" :rules="inputRules"></v-text-field>
                <v-select :items="items" label="Phone Number" prepend-icon="mdi-phone"  :rules="inputRules"></v-select>
                <v-text-field label="Email Adress"  prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
                <v-text-field label="Location"  prepend-icon="mdi-map-marker" :rules="inputRules"></v-text-field>
                <v-textarea label=" Description"  prepend-icon="mdi-text"></v-textarea>
                <v-btn  text color="#22c3bb" type="submit" class="mx-0 mt-3 mr-3">Contenue</v-btn>
                <v-btn class="mx-0 mt-3" @click="dialog =false">Cancel</v-btn>
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
    
      dialog: false,
      title:'',
      content:'',
     emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
    items: ['+212','+94','+42'],
     

 inputRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
 }
    },
   

    methods:{
           submit(){
                 
                 console.log(this.title)
             },
              
        
    }}
</script>