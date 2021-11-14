<template>
  <div class="Popup">
    <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#22c3bb" small icon v-on="on" v-bind="attrs"
          ><v-icon>mdi-plus-circle</v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <h2>Create Client</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Client name" :rules="inputRules" v-model="name" ></v-text-field>
            <v-text-field label="Website" prepend-icon="mdi-web" v-model="website" :rules="inputRules"></v-text-field>
            <v-text-field label="Location" prepend-icon="mdi-map-marker" :rules="inputRules" v-model="location"></v-text-field>
            <v-textarea label="Description" prepend-icon="mdi-text" v-model="description"></v-textarea>
            <v-btn color="#22c3bb" class="mx-0 mt-3 mr-3"  @click="submit">Contenue</v-btn>
            <v-btn class="mx-0 mt-3" @click="dialog = false">Cancel</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      dialog: false,
      name: "",
      location: "",
      website:"",
      description:"",
      inputRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      if (this.name == "" || this.location == "") {
        return this.inputRules;
      } else {
        axios
          .post("http://localhost:3000/folder", {
            client_name: this.name,
            location: this.location,
            description:this.description,
            website:this.website
          })
          .then((res) => {
            console.log(res);
          });
          this.dialog=false,
         this.name= "",
         this.location="",
         this.description="",
         this.website=""

        this.$emit("clientAdded");
         
      }
    },
  },
};
</script>