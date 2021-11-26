<template>
  <div>
    <v-row class="tab">
      <v-div class="container">
        <v-col>
        <v-flex class="d-inline-flex"> 
          <h2 class="ml-2 mt-2"> Placements </h2>
        </v-flex>
      </v-col>
      </v-div>
      
      <div class="text-center">
      <v-col>
        <PlacementFilter class="fltr"/>
      </v-col>
       <v-col lg="5" cols="12" class="d-flex flex-row-reverse" >
        <v-menu offset-y >
      <template v-slot:activator="{ on, attrs }">
        <span  
          v-bind="attrs" v-on="on" style="cursor: pointer">
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
         <v-data-table
               caption="" 
               :headers="headers"
               :items="Placements"
               :items-per-page="5"
                 class="elevation-19"
        >
        
        </v-data-table>

       </v-col>
     </v-row>
  </div>
</template>
<script>
import PlacementFilter from '../components/PlacementFilter.vue'
import axios from "axios";

export default {
  components: { PlacementFilter },
  name: "Placement",
  data() {
    return {
    
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],

      headers: [
        { text: "Candidate name", value: "candidate_name" },
        { text: "Position name", value: "position_name" },
        { text: "Client name", value: "Client" },
        { text: "Type Contract", value: "" },
        { text: "Contract Duration", value: "" },
       
      ],
      Placements: [],
    };
  },
    created(){
    axios.get("")
  .then(response =>{
    this.Placements = response.data;
    console.log(this.Placements)
  })
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
 display: inline-flex;
  flex-direction: row;
  border: 1;
  text-decoration: none;
  line-height: 17px;
  margin-left: 60%;
  margin-right: 0%;
 justify-content: end;
}
.fltr{
   margin-left:239% ;
  
}
.sp{
  color: #fff;
}
.d-flex {
  margin-left: 160px;
}


</style>