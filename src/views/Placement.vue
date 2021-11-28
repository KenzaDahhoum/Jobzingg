<template>
  <div class="layout_content">
    <v-row class="tab">
      <v-div class="addClient">
        <v-col>
        <v-flex class="d-inline-flex"> 
          <h2 class="ml-2 mt-2"> Placements </h2>
        </v-flex>
      </v-col>
      </v-div>
      <div class="tools">
      <v-col class="col-lg-12">
        <div class="testetstetetetete">
              <PlacementFilter class="fltr"/>
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
        </div>
      </v-col>
      </div>
    </v-row>
    <v-row class="tab">
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
        { text: "Candidate name", value: "candidate_name", divider:true },
        { text: "Position name", value: "position_name" , divider:true},
        { text: "Client name", value: "Client" , divider:true},
        { text: "Type Contract", value: "" , divider:true},
        { text: "Contract Duration", value: "" , divider:true},
       
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

