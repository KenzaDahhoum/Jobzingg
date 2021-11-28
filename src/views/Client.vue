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
                    <span class="btnACt">Actions</span>
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
          class="elevation-1"
        >
          <template v-slot:item="row">
            <tr class="tr">
              <td class="td">
                <div class="layout">
                  <div class="align-content">
                    {{ row.item.client_name }}
                  </div>
                  <div class="cont">
                    <div class="eye">
                      <v-icon color="rgba(0,0,0,.87)" small> mdi-eye </v-icon>
                      <div class="menu"><ActionClient /></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td">{{ row.item.location }}</td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td"></td>
            </tr>
          </template>
          <!-- <template v-slot:item.actions="{ item }">
            <v-row>
              <DetailsClient class="mr-1" />
              <EditClient class="mr-1" :item="item" />

              <v-icon class="mr-1" small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </v-row>
          </template> -->
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import DetailsClient from "../components/DetailsClient.vue";
import AddClient from "../components/AddClient.vue";
import axios from "axios";
import ClientFilter from "../components/ClientFilter.vue";
//import EditClient from "../components/EditClient.vue";
import ActionClient from "../components/ActionClient.vue";
export default {
  components: {
    AddClient,
    ClientFilter,
    ActionClient,
  },
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
        { text: "Client Name", value: "client_name", divider: true },
        { text: "Job Count", value: "", divider: true },
        { text: "Client Industry", value: "", divider: true },
        { text: "Client Location", value: "location", divider: true },
        { text: "Client stage", value: "", divider: true },
        { text: "Client Owner", value: "", divider: true },
        { text: "Client Team", value: "", divider: true },
        { text: "Client Adress", value: "", divider: true },
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

