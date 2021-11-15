<template>
    <div class="Popup">
     <v-dialog max-width="600px" v-model="dialog">
         <template v-slot:activator="{on , attrs}">
      <v-btn  color="#22c3bb" small icon v-on="on" v-bind="attrs"><v-icon>mdi-plus-circle</v-icon></v-btn>
         </template>
      <v-card>
          <v-card-title>
              <h2>Create Folders</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form"> 
                <v-text-field label="Name" :rules="inputRules"></v-text-field>
                <v-textarea label="Description"  ></v-textarea>
                <v-btn  text color="#22c3bb" small @click="save" class="mx-0 mt-3 mr-3">Save</v-btn>
                <v-btn text class="mx-0 mt-3" small @click="dialog =false">Cancel</v-btn>
              </v-form>
          </v-card-text>

      </v-card>
    </v-dialog>
    </div>
 </template>
<script>
import axios from "axios";
export default {
    data(){
        
      return{
          name:"",
          description:"",
    
      dialog: false,
      inputRules:[ value => !!value || 'Required.',
                 value => (value && value.length >= 3) || 'Min 3 characters',]
            }
        },
      methods:{
           save() {
      if (this.name == "" || this.description == "") {
         return this.inputRules;
      } else {
        axios
          .post("http://localhost:3000/Folders", {
            folder_name: this.name,
            description: this.description,
          })
          .then((res) => {
            console.log(res);
          });
          this.dialog=false,
          this.name= "",
          this.description="",

        this.$emit("folderAdded");
         
      }
    },
      }
}
</script>
<style scoped>
</style>
    