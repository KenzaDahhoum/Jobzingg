<template>
    <div class="tabs">
        <v-div class="container">
            <v-div class="slider">
             <v-div class="accent">
            <v-btn  text  to="/Folder" depressed  class="ml-2 mt-0">
         <v-icon left color="#1976d2" >mdi-folder</v-icon>
         <span class="p-3">Folder</span> 
         </v-btn>
             </v-div>
            </v-div>
  
        </v-div>
      
    </div>
</template>



<style scoped>
.tabs{
    margin: 0 !important;
    overflow: hidden;
    contain: content;
    display: flex;
    background-repeat: no-repeat;
    padding:0px ;
    height: 2px;
    width: 100%;
    

}
.accent{
    background-color: #82b1ff !important;
    border-color: #82b1ff !important;
}
.slider{
    bottom: 0px;
    margin: 0 !important;
    position: absolute;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    padding: 0px;
    margin: 0px;
    background-repeat: no-repeat;
    box-sizing: inherit;
}
.container{
    transform: translateX(0px);
    height: 38px !important;
    flex: 1 0 auto;
    display: flex;
    list-style-type: none;
    transition-property: transform;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.86 ,0,.07,1);
    transition-delay: 0s;
    white-space: nowrap;
    position: relative;

}
/* display: inline;
list-style: "none"; */
</style>