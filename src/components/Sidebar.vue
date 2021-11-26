<template>

  <v-navigation-drawer v-model="drawer" app color="#f1f4f8" class="sidbar" >
  
    <v-list >
      <v-list-item v-for="item in items" :key="item.title"
       link
       :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
         
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  
  name: "Sidebar",
  props:['drawer'],
  data() {
    return {
      items: [
       {title:'Home', icon:'mdi-home',path:'/'},
       {title:'Client', icon:'mdi-bank-outline',path:'/Client'},
       {title:'Jobs', icon:'mdi-briefcase',path:'/Job'},
       {title:'Candidates', icon:'mdi-account-multiple',path:'/Candidate'},
       {title:'Placements', icon:'mdi-account-check',path:'/Placement'},
       {title:'Activities', icon:'mdi-calendar-blank',path:'/Activitie'},
      ],
    };
  },
};
</script>

<style>
.sidbar{
  padding: 0;
  margin-top: 4.8%;
}
</style>