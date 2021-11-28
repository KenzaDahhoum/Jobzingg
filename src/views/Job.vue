<template>
  <div class="layout_content">
    <v-snackbar
      v-model="snackbar"
      dense
      text
      type="success"
      :timeout="3000"
      top
      color="success">

      <strong> Job added </strong>successfully
      <v-icon color="success"> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>
    <v-row class="tab">
      <div class="addClient">
        <v-col class="col-lg-12">
          <v-flex class="d-inline-flex">
            <h2 class="ml-2 mt-2">Jobs</h2>
            <AddJob
              class="ml-1 mt-3"
              @add-job="addjob"
              @JobAdded="snackbar = true"
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
            <JobFilter class="fltr" />

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
          :items="jobs"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item="row">
            <tr class="tr">
              <td class="td">
                  <div class="layout">
                    <div class="align-content">
                      {{ row.item.position_name }}
                    </div>
                    <div class="cont">
                      <div class="eye">
                        <v-icon color="rgba(0,0,0,.87)" small>
                          mdi-eye
                          </v-icon>
                           <div class="menu"><ActionJob /></div>
                      </div>
                    </div>
                  
                  </div>
              </td>
              <td class="td">{{ row.item.Client }}</td>
              <td class="td">{{ row.item.loction }}</td>
              <td class="td">{{ row.item.headacount }}</td>
              <td class="td">{{ row.item.Minimum_Salary }}</td>
              <td class="td">{{ row.item.Maximun }}</td>
              <td class="td"></td>
              <td class="td"></td>
              <td class="td"></td>
            </tr>
          </template>
          <!-- <template v-slot:item.actions="{ item }">
             <v-row>
           <DetailsClient class="mr-1"/>
            <EditJob class="mr-1"
       :item="item" />
         
       <v-icon class="mr-1"
        small
        @click="deleteItem(item)"
      >
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
import JobFilter from "../components/JobFilter.vue";
import axios from "axios";
import AddJob from "../components/AddJob.vue";
// import EditJob from '../components/EditJob.vue';
import ActionJob from "../components/ActionJob.vue";
export default {
  components: { AddJob, JobFilter, ActionJob },
  name: "Job",
  data() {
    return {
      Index: -1,
      editedItem: {
        name: "",
        client: "",
        location: "",
        headacount: "",
        contract: "",
        max: "",
        min: "",
        description: "",
      },
      defaultItem: {
        name: "",
        client: "",
        location: "",
        headacount: "",
        contract: "",
        max: "",
        min: "",
        description: "",
      },
      snackbar: false,
      dialogDelete: false,
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],

      headers: [
        { text: "Position name", value: "position_name", divider: true },
        { text: "Job Client", value: "Client", divider: true },
        { text: "Job Location", value: "loction", divider: true },
        { text: "Head Account", value: "headacount", divider: true },
        { text: "Minimum Salary", value: "Minimum_Salary", divider: true },
        { text: "Maximum Salary", value: "Maximum_Salary", divider: true },
        { text: "Job Owner", value: "", divider: true },
        { text: "Job Team", value: "", divider: true },
        { text: "Job Status", value: "", divider: true },
        //  { text: 'Actions', value: 'actions', sortable: false },
      ],
      jobs: [],
    };
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    axios.get("http://localhost:3000/job").then((response) => {
      this.jobs = response.data;
      console.log(this.jobs);
    });
  },
  methods: {
    deleteItem(item) {
      this.jobs.splice(this.Index, 1);
      this.dialogDelete = true;
      console.log("delete data");
      axios.delete("http://localhost:3000/job/" + item.id).then((response) => {
        console.log(response);
      });
    },
    deleteItemConfirm() {
      this.jobs.splice(this.Index, 1);
      this.closeDelete();
    },
    closeDelete() {
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.Index = -1;
      });
    },
    addjob(job) {
      this.jobs = [...this.jobs, job];
    },
  },
};
</script>
