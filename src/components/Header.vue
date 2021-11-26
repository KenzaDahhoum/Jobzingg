<template>
  <v-app-bar color="#1976d2" elevation="2" fixed class="header">
    <v-app-bar-nav-icon  color="white" @click="$emit('handeDrawer')" class="icon"></v-app-bar-nav-icon>
    <v-toolbar-title class="title">Title</v-toolbar-title>
    <v-spacer />
    <v-col lg="6" cols="12">
      <v-form class="search">
        <v-autocomplete class="sh"
          append-icon="mdi-magnify" dense placeholder="Search">
        </v-autocomplete>
      </v-form>
    </v-col>
    <v-spacer />
    <v-menu offset-y absolute class="notif">
      <template v-slot:activator="{ on, attrs }">
        <span
          v-bind="attrs"
          v-on="on"
          style="cursor: pointer"
          class="mx-5 mr-10"
        >
          <v-badge offset-x="10" offset-y="10" color="red" content="4">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
      </template>

    <v-list three-line width="250">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
    </v-list>
    </v-menu>
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
  </v-app-bar>
</template>
     
    

<script>
export default {
  name: "Header",
  data() {
    return {
      menus: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Setting", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout" },
      ],

      items: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--#1976d2">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--#1976d2 ">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--#1976d2">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
      ],
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
.search{
    display: block;
    background-repeat: no-repeat;
    padding: 0;
    margin-left: 50px;
    background-color: rgb(133, 177, 235);
    box-sizing: inherit;
    border-radius: 5px;
    width: 70%;
    position:relative;
}
.notif{
  display: block;
  background-color: aliceblue;
}

</style>