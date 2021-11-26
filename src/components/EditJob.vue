
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
              <h2>Edit Job</h2>
          </v-card-title>
          <v-card-text > 
              <v-form class="px-3" ref="form">
                 <v-text-field label="Position name"  prepend-icon="mdi-briefcase" :rules="inputRules" v-model="item.position_name"></v-text-field>
                 <v-select :items="items" label="Client" prepend-icon="mdi-bank-outline"  :rules="inputRules" v-model="item.Client"></v-select>
                <v-text-field label="Location"  prepend-icon="mdi-map-marker" :rules="inputRules" v-model="item.location"></v-text-field>
                <v-text-field label="Headcount" prepend-icon="mdi-account-box-multiple" v-model="item.headacount"></v-text-field>
                  <v-select :items="items" label="Contract Details" prepend-icon="mdi-file-document-edit"  :rules="inputRules" v-model="item.contract_details"></v-select>
                <v-text-field label="Maximum Salary" prepend-icon="mdi-currency-usd" :rules="inputRules" v-model="item.Maximum_Salary"></v-text-field>
                <v-text-field label="Minimum Salary"  prepend-icon="mdi-currency-usd" :rules="inputRules" v-model="item.Minimum_Salary"></v-text-field>
                <v-textarea label="Job Description"  prepend-icon="mdi-text" v-model="item.Job_description"></v-textarea>
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
       editedItem: { 
           name:'',
            client:'',
            location:'',
            headacount:'',
            contract:'',
            max:'',
            min:'',
            description:''},
      inputRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
     
    };
  },
  methods: {
    update() {
         let job={
        id:this.item.id,
              position_name: this.name,
              Client:this.client,
              location: this.location,
              headacount:this.headacount,
              contract_details:this.contract,
              Maximum_Salary:this.max,
              Minimum_Salary:this.min,
             Job_description:this.description,
      }
        axios
          .put('http://localhost:3000/job/'+job.id,job)
           .then(res =>{
             this.job=this.job.map( j =>{
               if(res.data.id=== j.id){
                 return res.data
               }
               return j;
             })

           })
           .catch()
             job={
             ...this.editedItem,
          }
          this.$emit('edit-job',this.editedItem);
          this.dialog=false,
         this.name= "",
         this.location="",
         this.description="",
         this.client="",
         this.headacount="",
         this.contract="",
         this.max="",
         this.min="",
        this.$emit("jobEddited");
         
      
    },
    editItem (item) {
        this.editedIndex = this.jobs.indexOf(item)
        this.editedItem = Object.assign({}, item)
      }
  },
};
</script>