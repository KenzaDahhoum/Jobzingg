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
      <strong>Candidate added </strong>successfully
      <v-icon color="success"> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>
    <v-row class="tab">
      <div class="addClient">
        <v-col class="col-lg-12">
          <v-flex class="d-inline-flex">
            <h2 class="ml-2 mt-2">Candidates</h2>
            <AddCandidate
              class="ml-1 mt-3"
              @add-candidate="addcandidate"
              @candidateAdded="snackbar = true"
            />


          </v-flex>
        </v-col>
      </div>
      <div class="link">
         <div class="menuInfo">
         <LinkCandidate class="tocan"/>
         <LinkFolder class="tofol"/>
        </div>
      </div>

      <div class="tools">
        <v-col class="col-lg-12">
          <div class="testetstetetetete">
            <v-btn small class="ref" outlined color="#1976d2"
            ><v-icon small>mdi-refresh</v-icon>Refresh</v-btn>

          <CandidateFilter class="fltr" />
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
          :items="candidate"
          :items-per-page="10"
          class="elevation-1"
        >
         <template v-slot:item="row">
            <tr class="tr">
              <td class="td">
                <div class="layout">
                  <div class="align-content">
                    {{ row.item.candidate_name }}
                  </div>
                  <div class="cont">
                    <div class="eye">
                      <!-- <DetailsCandidate/> -->
                      <Modal/>
                      <!-- <v-icon color="rgba(0,0,0,.87)" small> mdi-eye </v-icon> -->
                      <div class="menu"><ActionCandidate :item="item"/></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="td"></td>
              <td class="td">{{ row.item.location }}</td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td"></td>
            </tr>
          </template>
          <!-- <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <template v-slot:item.actions="{ item }">
            <v-row>
              <DetailsCandidate />
              <EditCandidate class="mr-1" :item="item" />

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
import AddCandidate from "../components/AddCandidate.vue";
import CandidateFilter from "../components/CandidateFilter.vue";
//import EditCandidate from "../components/EditCandidate.vue";
import axios from "axios";
import LinkCandidate from '../components/LinkCandidate.vue'
//import DetailsCandidate from "../components/DetailsCandidate.vue";
import LinkFolder from "../components/LinkFolder.vue";
import ActionCandidate from '../components/ActionCandidate.vue';
//import DetailsCandidate from '../components/DetailsCandidate.vue';
import Modal from '../components/Modal.vue';
export default {
  components: {
    AddCandidate,
    CandidateFilter,
     LinkFolder,
    ActionCandidate,
    LinkCandidate,
    // DetailsCandidate,
    Modal,

  },

  name: "Job",
  data() {
    return {
      snackbar: false,
      Index: -1,
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],
      headers: [
        { text: "Candidate Name", value: "candidate_name" , divider:true},
        { text: "Candidate Reference", value: "" , divider:true},
        { text: "Candidate Location", value: "location" , divider:true },
        { text: "Current position", value: "" , divider:true },
        { text: "Current Company", value: "" , divider:true },
        { text: "Notice Period", value: "" , divider:true},
        { text: "Current Salary", value: "" , divider:true},
        { text: "Expected Salary", value: "" , divider:true},
        { text: "Candidate Owner", value: "" , divider:true},
      ],
      candidate: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/candidate").then((response) => {
      this.candidate = response.data;
      console.log(this.candidate);
    });
  },

  methods: {
    deleteItem(item) {
      confirm("are you delete this ?") && this.candidate.splice(this.Index, 1);
      console.log("delete data");
      axios
        .delete("http://localhost:3000/candidate/" + item.id)
        .then((response) => {
          console.log(response);
        });
    },
    addcandidate(candidate) {
      this.candidate = [...this.candidate, candidate];
    },
  },
};
</script>
<style scoped>
.link{
    width: 100%;
}
.tocan{
    padding-left: 8px !important;
    margin-right: 0% !important;
}
.tofol{
    margin-left: 0px !important;
    margin-right: 0px !important;
}
</style>
