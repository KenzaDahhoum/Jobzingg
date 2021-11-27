<template>
  <v-data-table :headers="headers" :items="search_result" class="tet">
    <template v-slot:item="row">
      <tr>
        <td>{{ row.item.no }}</td>
        <td>
          {{ row.item.result }}
          <v-btn small text><v-icon small>mdi-heart</v-icon></v-btn>
        </td>

        <td>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="pink"
            @click="onButtonClick(row.item)"
          >
            <v-icon dark>mdi-heart</v-icon>
          </v-btn>
        </td>
      </tr>
      <tr></tr>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: "position name", value: "no" },
        { text: "result", value: "result" },
        { text: "good", value: "good" },
      ],
      search_result: [
        { no: 0, result: "name" },
        { no: 2, result: "bbb" },
      ],
    };
  },
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
  },
};
</script>
<style scoped>
.tet {
  margin-top: 5%;
}
</style>