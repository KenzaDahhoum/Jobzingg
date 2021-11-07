<template>

  <v-navigation-drawer v-model="drawer" app color="#22c3bb">
     <!-- I made this part in comment can you uncomment and discover it !!!!!!!!!!-->
    <!-- <v-sheet color="#e9fbfa" class="pa-4">
      <v-avatar class="mb-4" color="grey darken-1" size="64">
           <v-img aspect-ratio="30" src=""/>
               
           
      </v-avatar>

      <div>john@vuetifyjs.com</div>

    </v-sheet> -->
    <v-divider></v-divider>

    <v-list >
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
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
      links: [
        ["mdi-home", "Home"],
        ["mdi-bank-outline", "Clients"],
        ["mdi-briefcase", "Jobs"],
        ["mdi-account-multiple", "Candidates"],
        ["mdi-account-check", "Placements"],
        ["mdi-calendar-blank", "Activities"],
      ],
    };
  },
};
</script>

<style>
</style>