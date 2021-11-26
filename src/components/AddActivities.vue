<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
       <v-btn  color="#1976d2" small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon></v-btn>
         </template>
       <v-card>
          <v-card-title>
              <p>Create Activity</p>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                <v-text-field label="Add Title *"   :rules="inputRules" v-model="title"></v-text-field>
                 <v-div class="selector">
                     <v-btn color="#1976d2"  text class="ml-1 mt-2 mr-0"> <v-icon x-small>mdi-phone</v-icon>Call</v-btn>
                     <v-btn color="#1976d2"  text class="ml-1 mt-2 mr-0="> <v-icon x-small>mdi-door-open</v-icon>MEETING</v-btn>
                     <v-btn color="#1976d2" text class="ml-0 mt-2 mr-0">  <v-icon x-small>mdi-clipboard-text</v-icon> TASK</v-btn>
                     <v-btn color="#1976d2"  text class="ml-0 mt-2 mr-0"> <v-icon x-small>mdi-email</v-icon> EMAIL</v-btn>
                     <v-btn color="#1976d2"  text class="ml-0 mt-2 mr-0"> <v-icon x-small>mdi-clipboard-account</v-icon> INTERVIEW</v-btn>
                 </v-div>
                 <v-div class="content">
                       <v-div class="date"><DateActivity /></v-div>
                              <span class="to">to</span>
                       <v-div class="time1"><TimeActivity/></v-div>
                        <v-div class="time2"><TimeActivity/></v-div>
                        <v-span class="between">(...)</v-span>
                 </v-div>
                 <v-checkbox label="Share with guests"></v-checkbox>
                 <v-divider></v-divider>
                 <v-text-field label="Location" prepend-icon="mdi-map-marker"></v-text-field>
                 <v-combobox label="Related to" prepend-icon="mdi-file-tree"></v-combobox>
                 <v-autocomplete auto-select-first label="Assigneess" prepend-icon="mdi-clipboard-account"></v-autocomplete>
                <v-autocomplete auto-select-first label="Attendees" prepend-icon="mdi-ticket-account"></v-autocomplete>
                                  <v-checkbox class="bbc" label="Invite us a BBC"></v-checkbox>
                       <v-text-field label="Online Meeting URL" prepend-icon="mdi-video"></v-text-field>
               <v-textarea label="Description"  prepend-icon="mdi-text">
                  
               </v-textarea>
                <v-btn color="#1976d2" small text class=" mt-3 mr-3" @click="submit">Save</v-btn>
                 
              </v-form>
          </v-card-text>
      </v-card>
    </v-dialog>
    </div>
    
</template>

<script>
import axios from "axios";
import DateActivity from './DateActivity.vue';
import TimeActivity from './TimeActivity.vue'
export default {
  components: { DateActivity, TimeActivity },
    data(){
        
return{
          picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

    
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
<style scoped>

.selector{
    display: inline-flex;
    margin: 0%;
    box-shadow: none;
    border-radius: 2px;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    white-space: nowrap;
    border-right: 1px solid transparent;
    border-radius: 2px 00 2px;
    justify-content: center;
    min-width: auto;
    width: auto;
    padding: 0px;
    opacity: .4;
    border-radius: 0;

}
.content{
    display: flex;
    position: relative;
    width: auto;
    outline: none;
    transition:.3s;
    box-sizing: inherit;
    background-repeat: no-repeat;
    align-items: center;
    border-radius: 0;
    display: flex;

}
.date{
    min-width: 0;
    padding: 0%;
    margin-left:1%;
    
}
.time1{
    min-width: 0;
    padding: 0;
    margin-left:-20%;
    width: auto;
}
.to{
    font-size: .875rem;
    margin-top: 3%;
    margin-left: 5%;
}
.time2{
    min-width: 0;
    padding: 0;
    margin-left:-9%;
    width: auto;
}
.between{
    min-width: 0;
    padding: 0;
    margin-left:-10%;
    margin-top: 4%;
    width: auto;

}
.bbc{
    display: flex;
    flex: 1 0 100%;
    min-width: 0;
    min-height: 30px;
    color: inherit;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    padding:0;
    margin-left: 10%;
    margin-top: inherit;
}

</style>