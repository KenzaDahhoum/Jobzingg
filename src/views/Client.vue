<template>
  <div>
    <v-snackbar v-model="snackbar" dense text type="success" :timeout="3000" top color="success">
      <strong>Client added </strong>successfully
      <v-icon color="success">
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-row>
      <v-col lg="12" >
        <v-flex class="d-inline-flex"> 
          <h2>Clients </h2>
          <AddClient class="ml-1 mt-1"
          @clientAdded="snackbar=true"/>
        </v-flex>
      </v-col>
      <div class="text-center">
     <v-col>
        <v-btn small class="mr-1" outlined  color="#22c3bb"><v-icon>mdi-refresh</v-icon>Refresh</v-btn>
      </v-col>
      <v-col>
        <ClientFilter class="mr-1"/>
      </v-col>
       <v-col lg="5" cols="12"  class="d-flex flex-row-reverse">
        <v-menu offset-y >
      <template v-slot:activator="{ on, attrs }" >
        <span  
          v-bind="attrs" v-on="on" style="cursor: pointer" >
          <v-chip link color="#22c3bb" class="act">
    
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
         <v-data-table  caption="" :headers="headers" :items="clients" :items-per-page="5" class="elevation-19">
         </v-data-table>
       </v-col>
  
     </v-row>
  
  </div>

</template>
<script>
import   AddClient from '../components/AddClient.vue';
import axios from "axios";
import ClientFilter from '../components/ClientFilter.vue'
export default {
  components: { AddClient , ClientFilter },
  name: "Job",
  data() {
    return {
      snackbar:false,
      
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],

      headers: [
        { text: "Client Name", value: "client_name"},
        { text: "Job Count", value: "" },
        { text: "Client Industry", value: "" },
        { text: "Client Location", value: "location" },
        { text: "Client stage", value: "" },
        { text: "Client Owner", value: "" },
        { text: "Client Team", value: "" },
        { text: "Client Adress", value: "" },
       
      ],
      clients: [],
    };
  },
  created(){
    axios.get("http://localhost:3000/Client")
  .then(response =>{
    this.clients = response.data;
    console.log(this.clients)
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

</style>