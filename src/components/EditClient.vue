<template>
  <div class="Popup">
    <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-bind="attrs"
        small
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      </template>
      <v-card>
        <v-card-title>
          <h2>Edit Client</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Client name" :rules="inputRules" v-model="item.client_name"  ></v-text-field>
            <v-text-field label="Website" prepend-icon="mdi-web" v-model="item.website" :rules="inputRules"></v-text-field>
            <v-text-field label="Location" prepend-icon="mdi-map-marker" :rules="inputRules" v-model="item.location"></v-text-field>
            <v-textarea label="Description" prepend-icon="mdi-text" v-model="item.description"></v-textarea>
            <v-btn color="#1976d2" text small class="mx-0 mt-3 mr-3"  @click="update">Update</v-btn>
            <v-btn class="mx-0 mt-3" text small @click="dialog = false">Cancel</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
    props: ['item'],
  data() {
    return {
    
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      dialog: false,
      editedIndex:-1,
     editedItem:{ name:'',
     location:'',
     website:'',
     description:''},
      inputRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",],
    
    };
  },
  // },
  // // mounted : {
  // //    edititem(){
  // //     this.editedItem.name = this.item.client_name;
  // //     this.editedItem.website = this.item.website;
  // //     this.editedItem.location = this.item.location;
  // //     this.editedItem.description = this.item.description;
     
  // //   }
  // // },
 methods:{
   update() {
         let client={
        id:this.item.id,
            client_name: this.item.client_name,
            location: this.item.location,
            description:this.item.description,
            website:this.item.website,
            
      }
        axios
          .put('http://localhost:3000/client/'+client.id,client)
           .then(res =>{
             this.client=this.client.map( cl =>{
               if(res.data.id=== cl.id){
                 return res.data
               }
               return cl;
             })

           })
           .catch()
             client={
             ...this.editedItem,
          }
          this.$emit('edit-client',this.editedItem);
          this.dialog=false,
         this.name= "",
         this.location="",
         this.description="",
         this.website="",
        
        this.$emit("clientEddited");
         
      
    },
    editItem (item) {
        this.editedIndex = this.clients.indexOf(item)
        this.editedItem = Object.assign({}, item)
      }
  },

};
</script>