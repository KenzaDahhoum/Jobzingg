<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
       <v-btn  color="#1976d2" small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon></v-btn>
         </template>
       <v-card>
          <v-card-title>
              <h2>Create Job</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                <v-text-field label="Position name"  prepend-icon="mdi-briefcase" :rules="inputRules" v-model="name"></v-text-field>
                
                 <v-select :items="items" label="Client" prepend-icon="mdi-bank-outline"  :rules="inputRules" v-model="client"></v-select>
                <v-text-field label="Location"  prepend-icon="mdi-map-marker" :rules="inputRules" v-model="location"></v-text-field>
                <v-text-field label="Headcount" prepend-icon="mdi-account-box-multiple" v-model="headacount"></v-text-field>
                  <v-select :items="items" label="Contract Details" prepend-icon="mdi-file-document-edit"  :rules="inputRules" v-model="contract"></v-select>

                <v-text-field label="Maximum Salary" prepend-icon="mdi-currency-usd" :rules="inputRules" v-model="max"></v-text-field>

                <v-text-field label="Minimum Salary"  prepend-icon="mdi-currency-usd" :rules="inputRules" v-model="min"></v-text-field>

                <v-textarea label="Job Description"  prepend-icon="mdi-text">
                  
               </v-textarea>
                <v-btn color="#1976d2" small text class="mx-0 mt-3 mr-3" @click="submit">Contenue</v-btn>
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
  
    
 items: ['CDI', 'CDD', 'Stage'],
 dialog: false,
 name:"",
 client:"",
 location:"",
 headacount:"",
 contract:"",
 max:"",
 min:"",
 description:"",
 inputRules:[value => !!value || 'Required.', value => (value && value.length >= 3) || 'Min 3 characters',],
 }
    },
    methods:{
                  submit() {
      if (this.name == "" || this.location == "" ||this.min ==""|| this.client== ""|| this.headacount =="" || this.contract=="" ||this.max=="") {
        return this.inputRules;
      } else {
        axios
          .post("http://localhost:3000/job", {
            position_name: this.name,
            Client:this.client,
            location: this.location,
            headacount:this.headacount,
            contract_details:this.contract,
            Maximum_Salary:this.max,
            Minimum_Salary:this.min,
            Job_description:this.description,
            
          })
          .then((res) => {
            console.log(res);
          });
          this.$emit('add-job');
          this.dialog=false,
         this.name= "",
         this.location="",
         this.description="",
         this.email=""
         this.phone=""

        this.$emit("JobAdded");
         
      }
    },
         
    }
}
</script>