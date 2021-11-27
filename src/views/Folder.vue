<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      dense
      text
      type="success"
      :timeout="3000"
      top
      color="success"
    >
      <strong>Folder added </strong>successfully
      <v-icon color="success"> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>
    <v-row class="mt-8">
      <v-col lg="12">
        <v-flex class="d-inline-flex">
          <h2>ALL Folders</h2>
          <NewFolder class="ml-1 mt-1" @folderAdded="snackbar = true" />
        </v-flex>
      </v-col>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="folder in Folders" :key="folder.id">
            <td>{{ folder.folder_name }}</td>
            <td>{{ folder.Owner }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import axios from "axios";
import NewFolder from "../components/NewFolder.vue";
export default {
  components: { NewFolder },
  data() {
    return {
      snackbar: false,
      name: "",
      description: "",
      Folders: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/Folders").then((response) => {
      this.Folders = response.data;
      console.log(this.Folders);
    });
  },
};
</script>