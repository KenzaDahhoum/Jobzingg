<template>
  <div  class="mt-9">
    <div class="dashboard">
      <v-subheader class="d-flex justify-space-between align-center">
        <h2>Dashboard</h2>
        <!-- <v-btn> View Order </v-btn> -->
      </v-subheader>
      <v-row>
        <v-col lg="7" cols="12">
          <v-alert dense text type="success">
             
            <strong> Login Successful </strong>Welcome to Jobzingg
            
          </v-alert>
          <v-row>
              <v-col lg="6" cols="12" v-for="(act,index) in activities" :key="index">
                <v-card elevation="2" class="rounded-lg">
                 <v-card-text class="d-flex justify-space-between align-center ">
                   <div class="">
                       <strong> {{act.title}}</strong><br>
                       <small> Last week</small>
                     </div>
                   <v-avatar :color="act.color" size="55">
                     <span class="white--text">{{act.amouts}}</span>
                   </v-avatar>
                 </v-card-text>
                </v-card>
              </v-col>
              
          </v-row>
        </v-col>
        <v-col lg="5" cols="12">
          <v-card>
            <v-card-title>Activities</v-card-title>
            <v-timeline
        align-top
        dense
      >

        <v-timeline-item
          color="teal lighten-3"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>3-4pm</strong>
            </v-col>
            <v-col>
              <strong>Design Stand Up</strong>
              <div class="text-caption mb-2">
                Hangouts
              </div>
              <v-avatar>
                <v-img
                  src=""
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src=""
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src=""
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="pink"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>12pm</strong>
            </v-col>
            <v-col>
              <strong>Lunch break</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
     <v-row>
       <v-col lg="12">
         <v-data-table
               caption="Recent Actions" 
               :headers="headers"
               :items="desserts"
               :items-per-page="5"
                 class="elevation-1"
        >
         <template v-slot:item.action> 
         <v-btn color="#36bab2">Details</v-btn>
         </template>
        </v-data-table>

       </v-col>
     </v-row>

    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data(){
    return{
      activities:[
        {title:"Candidates",color:"red",amouts:"20"},
         {title:"Jobs",color:"purple",amouts:"15"},
         {title:"Candidates",color:"indigo",amouts:"20"},
         {title:"Jobs",color:"light-blue",amouts:"15"},
      ],
      headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: 'Actions', value: 'action' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
    }
  }
};
</script>
<style scoped>
</style>