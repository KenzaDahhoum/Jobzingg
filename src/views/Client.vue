<template>
  <div class="layout_content">
    <v-snackbar
      v-model="snackbar"
      dense
      text
      type="success"
      :timeout="3000"
      top
      color="success"
    >
      <strong> Client added </strong>successfully
      <v-icon color="success"> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>

    <v-row class="tab">
      <div class="addClient">
        <v-col class="col-lg-12">
          <v-flex class="d-inline-flex">
            <h2 class="ml-2 mt-2">Clients</h2>
            <AddClient
              class="ml-1 mt-3"
              @add-client="addclient"
              @clientAdded="snackbar = true"
            />
          </v-flex>
        </v-col>
      </div>

      <div class="tools">
        <v-col class="col-lg-12">
          <div class="testetstetetetete">
            <v-btn small class="ref" outlined color="#1976d2"
              ><v-icon small>mdi-refresh</v-icon>Refresh</v-btn
            >
            <ClientFilter class="fltr" />

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on" style="cursor: pointer">
                  <v-btn small link color="#1976d2">
                    <span class="sp">Actions</span>
                  </v-btn>
                </span>
              </template>
              <v-list width="150" class="py-0">
                <v-list-item v-for="(menu, index) in menus" :key="index" link>
                  <v-list-item-icon>
                    <v-icon>{{ menu.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
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
          :items="clients"
          :items-per-page="5"
          class="elevation-2"
        >
          <template v-slot:item.actions="{ item }">
            <v-row>
              <DetailsClient class="mr-1" />
              <EditClient class="mr-1" :item="item" />

              <v-icon class="mr-1" small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import DetailsClient from "../components/DetailsClient.vue";
import AddClient from "../components/AddClient.vue";
import axios from "axios";
import ClientFilter from "../components/ClientFilter.vue";
import EditClient from "../components/EditClient.vue";
export default {
  components: { AddClient, ClientFilter, EditClient, DetailsClient },
  name: "Job",

  data() {
    return {
      Index: -1,
      snackbar: false,
      editItem: {
        client_name: "",
        location: "",
      },
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],
      headers: [
        { text: "Client Name", value: "client_name" },
        { text: "Job Count", value: "" },
        { text: "Client Industry", value: "" },
        { text: "Client Location", value: "location" },
        { text: "Client stage", value: "" },
        { text: "Client Owner", value: "" },
        { text: "Client Team", value: "" },
        { text: "Client Adress", value: "" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      clients: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/client").then((response) => {
      this.clients = response.data;
      console.log("Client Data", this.clients);
    });
  },
  methods: {
    deleteItem(item) {
      confirm("are you delete this ?") && this.clients.splice(this.Index, 1);
      console.log("delete data");
      axios
        .delete("http://localhost:3000/client/" + item.id)
        .then((response) => {
          console.log(response);
        });
    },
    addclient(client) {
      this.clients = [...this.clients, client];
    },
  },
};
</script>

<style scoped>
.text-center {
  display: inline-flex;
  flex-direction: row;
  border: 1;
  text-decoration: none;
  line-height: 17px;
  margin-left: 60%;
  margin-right: 0%;
  margin-block-end: 0px;
  justify-content: end;
}
.sp {
  color: #fff;
}
.fltr {
  margin-left: -40%;
  margin-right: -160%;
}
.ref {
  margin-right: -150%;
}
.d-flex {
  margin-right: -10%;
}
</style>