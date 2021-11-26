
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
              <h2>Edit Candidate</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form">
                <v-text-field label="Candidate Name" :rules="inputRules" v-model="item.candidate_name"></v-text-field>
                <v-select :items="items" label="Phone Number" prepend-icon="mdi-phone" v-model="item.phone_number" :rules="inputRules"></v-select>
                <v-text-field label="Email Adress"  prepend-icon="mdi-email" :rules="emailRules" v-model="item.email_adress"></v-text-field>
                <v-text-field label="Location"  prepend-icon="mdi-map-marker" :rules="inputRules" v-model="item.location"></v-text-field>
                <v-textarea label=" Description"  prepend-icon="mdi-text" v-model="item.description"></v-textarea>
                <v-btn  text color="#1976d2" small class="mx-0 mt-3 mr-3" @click="update">Up date</v-btn>
                <v-btn class="mx-0 mt-3" small text @click="dialog =false">Cancel</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
   props:['item'],
  data() {
    return {
    
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      dialog: false,
      editedIndex:-1,
       editedItem: { name:'',
         location:'',
        email:'',
        phone:'',
         description:''},
      inputRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
     
    };
  },
  methods: {
    update() {
         let candidate={
        id:this.item.id,
            candidate_name: this.item.candidate_name,
            location: this.item.location,
            description:this.item.description,
            email_adress:this.item.email,
            phone_number:this.item.phone,
      }
        axios
          .put('http://localhost:3000/candidate/'+candidate.id,candidate)
           .then(res =>{
             this.candidate=this.candidate.map( c =>{
               if(res.data.id=== c.id){
                 return res.data
               }
               return c;
             })

           })
           .catch()
             candidate={
             ...this.editedItem,
          }
          this.$emit('edit-candidate',this.editedItem);
          this.dialog=false,
         this.name= "",
         this.location="",
         this.description="",
         this.email="",
         this.phone=""
        this.$emit("candidateEddited");
         
      
    },
    editItem (item) {
        this.editedIndex = this.clients.indexOf(item)
        this.editedItem = Object.assign({}, item)
      }
  },
};
</script>