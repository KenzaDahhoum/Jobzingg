<template>
  <div class="tabs">
    <v-div class="container">
      <v-div class="slider">
        <button
          text
          to="/Folder"
          depressed
          class="ml-2 mt-0 button_action_header"
        >
          <v-icon x-small color="#1976d2">mdi-folder</v-icon>
          <span class="p">Folder</span>
        </button>
      </v-div>
    </v-div>
  </div>
</template>



<style scoped>
.tabs {
  display: flex;
}
.slider {
  bottom: 0px;
  margin: 0 !important;
}
.p {
  font-family: Roboto, sans-serif !important;
  font-size: x-small;
}
</style>