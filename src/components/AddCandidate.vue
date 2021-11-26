<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
      <v-btn  color="#1976d2" small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon></v-btn>
         </template>
      <v-card>
          <v-card-title>
              <h2>Create Candidate</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                <v-text-field label="Candidate Name" :rules="inputRules" v-model="name"></v-text-field>
                <v-select :items="items" label="Phone Number" prepend-icon="mdi-phone" v-model="phone" :rules="inputRules"></v-select>
                <v-text-field label="Email Adress"  prepend-icon="mdi-email" :rules="emailRules" v-model="email"></v-text-field>
                <v-text-field label="Location"  prepend-icon="mdi-map-marker" :rules="inputRules" v-model="location"></v-text-field>
                <v-textarea label=" Description"  prepend-icon="mdi-text" v-model="description"></v-textarea>
                <v-btn  text color="#1976d2" small  class="mx-0 mt-3 mr-3" @click="submit">Contenue</v-btn>
                <v-btn class="mx-0 mt-3" small text @click="dialog =false">Cancel</v-btn>
              </v-form>
          </v-card-text>
          
      </v-card>
    </v-dialog>
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    data(){
        
return{
    
      dialog: false,
      name:"",
      phone:"",
      email:"",
      location:"",
      description:"",
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
           submit() {
      if (this.name == "" || this.location == "") {
        return this.inputRules;
      } else {
        axios
          .post("http://localhost:3000/candidate", {
            candidate_name: this.name,
            phone_number:this.phone,
            location: this.location,
            email_adress:this.email,
            description:this.description,
            
          })
          .then((res) => {
            console.log(res);
          });
          this.$emit('add-candidate')
         this.dialog=false,
         this.name= "",
         this.location="",
         this.description="",
         this.email=""
         this.phone=""

        this.$emit("candidateAdded");
         
      }
    },
              
        
    }}
</script>