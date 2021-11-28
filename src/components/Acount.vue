<template>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span
          v-bind="attrs" v-on="on" style="cursor: pointer"  class="mx-5 mr-10" >
          <v-chip link>
                <v-badge dot bottom offset-y="10" offset-x="10" color="green">
                  <v-avatar size="40">
                       <img src="">
                  </v-avatar>
                </v-badge>
                <span>Kenza</span>
            </v-chip>         
        </span>
      </template>
      <v-list width="250" class="py-0">
          <v-list-item two-line>
      <v-list-item-avatar>
          <img src="" alt="">
      </v-list-item-avatar>
      <v-list-item-content>
          <v-list-item-title>
              kenza
          </v-list-item-title>
          <v-list-item-subtitle>
              Logged In
          </v-list-item-subtitle>

         </v-list-item-content>
          </v-list-item>
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
</template>
<script>
export default {
    data(){
        return{
        menus: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Setting", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout" },
      ],
        }
    }
}
</script>