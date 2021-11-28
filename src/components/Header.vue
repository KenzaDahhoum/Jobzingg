<template>
  <v-app-bar color="#1976d2" elevation="5" fixed class="header">
    <v-app-bar-nav-icon  color="white" @click="$emit('handeDrawer')" class="icon"></v-app-bar-nav-icon>
    <v-toolbar-title class="title">Title</v-toolbar-title>
    <v-spacer />
     <SearchHeader/>
    <v-spacer />
     <Notification/>
     <Acount />
     
  </v-app-bar>
</template>
     
<script>
import SearchHeader from './SearchHeader.vue'
import Acount from './Acount.vue';
import Notification from './Notification.vue';
export default {
  components: { Notification, Acount , SearchHeader},
  name: "Header",
  data() {
    return {
   

   
    };
  },
};
</script>

<style>
.title{
  font-family: initial;
  color: white;
}
.header{
  display: block;
  margin-right: 0%;
  margin-bottom:initial;
}

</style>