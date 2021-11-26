<template>
  <div>
      <v-snackbar v-model="snackbar" dense text type="success" :timeout="3000" top color="success">
      <strong>Candidate added </strong>successfully
      <v-icon color="success">
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-row  class="tab">
      <div class="container">
      <v-col>
        <v-flex class="d-inline-flex"> 
          <h2 class="ml-2 mt-2">Candidates</h2>  
          <AddCandidate class="ml-1 mt-3"
          @add-candidate="addcandidate"
          @candidateAdded="snackbar=true"/>
        </v-flex>
      </v-col>
      </div>
     <MenuCandidate />
      <div class="text-center">
     <v-col>
        <v-btn small class="ref" outlined  color="#1976d2"><v-icon small>mdi-refresh</v-icon>Refresh</v-btn>
      </v-col>
      <v-col>
        <CandidateFilter class="fltr"/>
      </v-col>
      <v-col lg="5" cols="12"  class="d-flex flex-row-reverse">
        <v-menu offset-y  >
      <template v-slot:activator="{ on, attrs }" >
        <span  
          v-bind="attrs" v-on="on" style="cursor: pointer" >
          <v-btn small link color="#1976d2">
    
                <span class="sp">Actions</span>
          </v-btn>         
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
         <v-data-table caption="" :headers="headers" :items="candidate" :items-per-page="5" class="elevation-5">
           <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
           <template v-slot:item.actions="{ item }">
             <v-row>
         <DetailsCandidate/>
      <EditCandidate class="mr-1"
        :item="item"
        

        />
     
       <v-icon class="mr-1"
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
             </v-row>
        </template>
        </v-data-table>

       </v-col>

     </v-row>

  </div>
</template>
<script>
import AddCandidate from '../components/AddCandidate.vue';
import CandidateFilter from '../components/CandidateFilter.vue';
import EditCandidate from '../components/EditCandidate.vue';
import axios from "axios";
import DetailsCandidate from '../components/DetailsCandidate.vue';
import MenuCandidate from '../components/MenuCandidate.vue'
export default {
  components: { AddCandidate ,CandidateFilter,EditCandidate, DetailsCandidate , MenuCandidate },
 
  name: "Job",
  data() {
    return {
      snackbar:false,
      Index:-1,
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
        { text: 'Actions', value: 'actions', sortable: false },  
      ],
      candidate: []

    };
  
  },
  created(){
    axios.get("http://localhost:3000/candidate")
  .then(response =>{
    this.candidate = response.data;
    console.log(this.candidate)
  })
  },

  methods:{
     deleteItem(item){
      confirm('are you delete this ?')&& this.candidate.splice(this.Index,1)
      console.log('delete data');
      axios.delete('http://localhost:3000/candidate/'+item.id)
      .then(response=>{
        console.log(response);
      })

  },
    addcandidate(candidate){
      this.candidate=[...this.candidate,candidate]
    }
  }
};
</script>

<style scoped>
.container{
  
    max-width: 100%;
    flex: 1 1 100%;
    margin-top: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: 50px;
    width: 100%;
    margin-left: -2%;
    padding: 0 0 !important;
    background-color:#f1f4f8;
    border-bottom: 1px solid #d4d6da;
}
.tab{
margin-top:2%;
  display:flex;
  position: relative;
  widows: 70%;
  margin-right: -5%;
}
.text-center{
  display:flex;
  flex-direction: row;
  border: 1;
  text-decoration: none;
  line-height: 17px;
  margin-left: 60%;
  margin-right: -20%;
  margin-top:0%;
  justify-content: end;
}
.fltr{
  margin-left:-40% ;
  margin-right: -160%;
}
.ref{
  margin-right: -150%;
  
}
.d-flex{
  margin-right: -10%;
}

.sp{
  color:#fff
}

</style>