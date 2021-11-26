<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
       <v-btn  color="#1976d2" rounded small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon>Add Skills
       </v-btn>
         </template>
       <v-card>
          <v-card-title>
              <h3>Skills</h3>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                  <v-select :items="items" label="" prepend-icon="mdi-lightbulb-on"  :rules="inputRules" v-model="contract"></v-select> 
                  <v-row>
                <v-col class="pa-12">
                        <v-range-slider :tick-labels="seasons" :value="[0, 1]" min="0"  max="3" ticks="always" tick-size="4">
             <template v-slot:thumb-label="props">
                <v-icon dark>
                  {{ season(props.value) }}
               </v-icon>
             </template>
            </v-range-slider>
           </v-col>
      </v-row>
                <v-btn color="#1976d2" small text class="mx-0 mt-3 mr-3" @click="submit">Save</v-btn>
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
  seasons: [
        'Level 0',
        'Level 1',
        'Level 2',
        'Level 3',
      ],
      icons: [
        'numeric-0',
        'numeric-1',
        'numeric-2',
        'numeric-3',
      ],
  
    
 items: ['php', 'javascript', 'Sql'],
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
          .post("http://localhost:3000/Job", {
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
          this.dialog=false,
         this.name= "",
         this.location="",
         this.description="",
         this.email=""
         this.phone=""

        this.$emit("candidateAdded");
         
      }
    },
      season (val) {
        return this.icons[val]
      },
    }
}
</script>