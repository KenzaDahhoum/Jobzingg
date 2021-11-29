<template>
  <div>
    <v-col lg="5" cols="12" class="d-flex flex-row-reverse">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on" style="cursor: pointer">
            <v-btn small text flat>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </span>
        </template>
        <v-list width="150" class="py-0">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <div class="text-center">
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="red lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="editItem(item)"
                      >

                        <v-icon small>mdi-pencil</v-icon>
                        Edit
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Privacy Policy
                      </v-card-title>
                    <v-card-text > 
                      <v-form class="px-3" ref="form">
                           <v-text-field label="Candidate Name"  v-model="name"></v-text-field>
                           <v-select :items="items" label="Phone Number" prepend-icon="mdi-phone" ></v-select>
                           <v-text-field label="Email Adress"  prepend-icon="mdi-email" ></v-text-field>
                           <v-text-field label="Location"  prepend-icon="mdi-map-marker"></v-text-field>
                           <v-textarea label=" Description"  prepend-icon="mdi-text" ></v-textarea>
                            <v-btn  text color="#1976d2" small class="mx-0 mt-3 mr-3" @click="update">Up date</v-btn>
                            <v-btn class="mx-0 mt-3" small text @click="dialog =false">Cancel</v-btn>
                       </v-form>
                    </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                          I accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon small>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </div>
</template>
<script>
import EditCandidate from "./EditCandidate.vue";
import axios from "axios";
export default {
  components: [EditCandidate],
  props:['item'],
  data: function () {
    return {
      modal_1: false,
      name:'',
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
<style>
.c-modal {
  position: fixed;
  top: 0;
  bottom: auto;
  right: 0;
  left: auto;
  margin: auto;
  width: 50%;
  height: 100%;
  padding: 12px;
  background-color: #fff;
  z-index: 10001;
  opacity: 1;
  transition: 0.6s;
}
.bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  opacity: 1;
  transition: 0.3s;
}
#list li {
  cursor: pointer;
}
</style>