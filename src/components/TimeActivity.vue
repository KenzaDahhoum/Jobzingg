<template>
<v-row>
<v-col cols="11" sm="5" >
      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
    </v-row>
</template>
<script>
export default {
    data(){
        return{
           menu: false,
        }
    }
}
</script>
<style scoped>

</style>