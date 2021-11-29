<template>
  <div class="tabs">
    <div class="container">
      <div class="slider">
        <button text flat to="/Folder" depressed class="ml-2 mt-0 button_action_header">
          <v-icon x-small color="#1976d2">mdi-account-multiple</v-icon>
          <span class="p-3">Candidate</span>
        </button>
        
      </div>
    </div>
  </div>
</template>


<style scoped>
.p-3 {
  font-family: Roboto, sans-serif !important;
  font-size: x-small;
}

.tabs {
  display: flex;
}
.slider {
  bottom: 0px;
  margin: 0 !important;
}
</style>