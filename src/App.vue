<template>
  <v-app id="inspire">
   <Header  @handeDrawer="drawer =!drawer" />
   <Sidebar :drawer="drawer"/>
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
       <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
  export default {
  components: { Header, Sidebar },
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: true,
     
    }),
  }
</script>