<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
      <v-btn  color="#22c3bb" small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon></v-btn>
         </template>
      <v-card>
          <v-card-title>
              <h2>Create Client</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                <v-text-field label="Client Name" :rules="inputRules"></v-text-field>
                <v-text-field label="Website" prepend-icon="mdi-web" :rules="inputRules"></v-text-field>
                <v-text-field label="Location"  prepend-icon="mdi-map-marker" :rules="inputRules"></v-text-field>
              
                <v-textarea label="Job Description"  prepend-icon="mdi-text"></v-textarea>
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
     items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
 dialog: false,
 title:'',
 content:'',
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
         
    }
}
</script>