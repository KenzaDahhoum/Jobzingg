<template>
  <div>
    <v-row>
      <v-col lg="12" >
        <v-flex class="d-inline-flex"> 
          <h1>Jobs </h1>
          <Popup class="ml-1 mt-3"/>
        </v-flex>
       
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
   
      <v-col>
        <v-btn class="ref" color="#22c3bb"> <v-icon>mdi-refresh</v-icon>Refresh</v-btn>
      </v-col>
      <v-col>
        <v-btn class="fil" color="#22c3bb"> <v-icon>mdi-filter-variant</v-icon>Filters</v-btn>
      </v-col>

    </v-row>
    <v-row>
       <v-col lg="12">
         <v-data-table
               caption="" 
               :headers="headers"
               :items="desserts"
               :items-per-page="5"
                 class="elevation-1"
        >
        
        </v-data-table>

       </v-col>
     </v-row>
  </div>
</template>
<script>
import Popup from '../components/Popup.vue';
export default {
  components: { Popup },
  name: "Job",
  data() {
    return {
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],

      headers: [
        { text: "Position name", value: "name" },
        { text: "Job Client", value: "calories" },
        { text: "Job Location", value: "fat" },
        { text: "Head Account", value: "carbs" },
        { text: "Job Stage", value: "protein" },
        { text: "Minimum Salary", value: "iron" },
        { text: "Maximum Salary", value: "iron" },
        { text: "Job Owner", value: "iron" },
        { text: "Job Team", value: "iron" },
        { text: "Job Status", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fil{
  display: flex;
  flex-direction: row;
  border: 0;
  text-decoration: none;
  line-height: 17px;
  margin-left: 50%;
  margin-right: 0px;
 justify-content: end;
};
@media(max-width:1025px){
    .fil{
        margin: calc(.8rem * 1);
    }

}
.ref{
  display:flex;
  flex-direction: row;
  border: 0;
  text-decoration: none;
  line-height: 17px;
  margin-left: 110%;
  margin-right: 10px;
  justify-content: end;

};
@media(max-width:1025px){
    .ref{
        margin: calc(.8rem * 1);
    }

}


</style>