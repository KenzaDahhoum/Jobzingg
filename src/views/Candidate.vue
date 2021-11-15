<template>
  <div>
      <v-snackbar v-model="snackbar" dense text type="success" :timeout="3000" top color="success">
      <strong>Candidate added </strong>successfully
      <v-icon color="success">
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-row>
      <v-col lg="12" >
        <v-flex class="d-inline-flex"> 
          <h2>Candidates</h2>
          <AddCandidate class="ml-1 mt-1"
          @candidateAdded="snackbar=true"/>
         <v-btn  text  to="/Folder" depressed  class="ml-2 mt-0">
         <v-icon left color="#22c3bb" >mdi-folder</v-icon>
         <span class="p-3">Folder</span>
         </v-btn>
        </v-flex>
      </v-col>
     <div class="text-center">
     <v-col>
        <v-btn small class="mr-1" outlined  color="#22c3bb"><v-icon>mdi-refresh</v-icon>Refresh</v-btn>
      </v-col>
      <v-col>
        <CandidateFilter class="mr-1"/>
      </v-col>
      <v-col lg="5" cols="12"  class="d-flex flex-row-reverse">
        <v-menu offset-y >
      <template v-slot:activator="{ on, attrs }" >
        <span  
          v-bind="attrs" v-on="on" style="cursor: pointer" >
          <v-chip link color="#22c3bb">
    
                <span class="act">Actions</span>
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
               :items="candidate"
               :items-per-page="5"
                 class="elevation-19"
        >
        
        </v-data-table>

       </v-col>
  
     </v-row>
  
  </div>

</template>
<script>
import CandidateFilter from '../components/CandidateFilter.vue';
import AddCandidate from '../components/AddCandidate.vue';
import axios from "axios";
export default {
  components: { AddCandidate ,CandidateFilter },
 
  name: "Job",
  data() {
    return {
      snackbar:false,
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],

      headers: [
        { text: "Candidate Name", value: "candidate_name"},
        { text: "Candidate Reference", value: "" },
        { text: "Candidate Location", value: "location" },
        { text: "Current position", value: "" },
        { text: "Current Company", value: "" },
        { text: "Notice Period", value: "" },
        { text: "Current Salary", value: "" },
        { text: "Expected Salary", value: "" },
        { text: "Candidate Owner", value: "" },
       
      ],
      candidate: []
  
    };
  },
  created(){
    axios.get("http://localhost:3000/Candidate")
  .then(response =>{
    this.candidate = response.data;
    console.log(this.candidate)
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