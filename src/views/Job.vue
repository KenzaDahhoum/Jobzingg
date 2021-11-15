<template>
  <div>
      <v-snackbar v-model="snackbar" dense text type="success" :timeout="3000" top color="success">
      <strong>Job added </strong>successfully
      <v-icon color="success">
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-row>
      <v-col lg="12" >
        <v-flex class="d-inline-flex"> 
          <h2> Jobs </h2>
          <Popup class="ml-1 mt-1"
         @candidateAdded="snackbar=true"/>
        </v-flex>
       
      </v-col>
   
      <div class="text-center">
     <v-col>
        <v-btn small class="mr-1" outlined  color="#22c3bb" ><v-icon>mdi-refresh</v-icon>Refresh</v-btn>
      </v-col>
      <v-col>
        <JobFilter class="mr-1"/>
      </v-col>
       <v-col lg="5" cols="12" >
        <v-menu offset-y >
      <template v-slot:activator="{ on, attrs }" class="d-flex flex-row-reverse">
        <span  
          v-bind="attrs" v-on="on" style="cursor: pointer" >
          <v-chip link color="#22c3bb">
    
                <span>Actions</span>
            </v-chip>         
        </span>
      </template>
      <v-list width="150" class="py-0">
        <v-list-item v-for="(menu,index) in menus" :key="index" link>
          <v-list-item-icon>
              <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
     </v-menu>
      </v-col>
      </div>

    </v-row>
    <v-row>
       <v-col lg="12">
         <v-data-table
               caption="" 
               :headers="headers"
               :items="Jobs"
               :items-per-page="5"
                 class="elevation-19"
        >
        
        </v-data-table>

       </v-col>
     </v-row>
  </div>
</template>
<script>
import JobFilter from '../components/JobFilter.vue'
import axios from "axios";
import Popup from '../components/Popup.vue';
export default {
  components: { Popup ,JobFilter },
  name: "Job",
  data() {
    return {
      snackbar:false,
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],

      headers: [
        { text: "Position name", value: "position_name" },
        { text: "Job Client", value: "Client" },
        { text: "Job Location", value: "loction" },
        { text: "Head Account", value: "headacount" },
        { text: "Job Stage", value: "" },
        { text: "Minimum Salary", value: "Minimum_Salary" },
        { text: "Maximum Salary", value: "Maximum_Salary" },
        { text: "Job Owner", value: "" },
        { text: "Job Team", value: "" },
        { text: "Job Status", value: "" },
      ],
      Jobs: [],
    };
  },
    created(){
    axios.get("http://localhost:3000/Job")
  .then(response =>{
    this.Jobs = response.data;
    console.log(this.Jobs)
  })
  }
};
</script>

<style scoped>
.text-center{
 display: flex;
  flex-direction: row;
  border: 1;
  text-decoration: none;
  line-height: 17px;
  margin-left: 60%;
  margin-right: 0%;
 justify-content: end;
};
@media(max-width:1025px){
    .fil{
        margin: calc(.8rem * 1);
    }
};
@media(max-width:1025px){
    .ref{
        margin: calc(.8rem * 1);
    }

}


</style>