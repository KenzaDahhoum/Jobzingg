<template>
     <v-col lg="6" cols="12">
        <v-autocomplete class="search"
          append-icon="mdi-magnify"  hide-no-data
          hide-details flat dense placeholder="Search">
        </v-autocomplete>
    </v-col>
</template>

<style>
.search{
    display: block;
    background-repeat: no-repeat;
    padding: 20px;
    margin-left:20%;
    background-color: rgb(133, 177, 235);
    border-radius:3px;
    width: 70%;
    position:relative;
}
</style>