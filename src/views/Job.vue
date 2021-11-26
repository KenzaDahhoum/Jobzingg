<template>
  <div>
      <v-snackbar v-model="snackbar" dense text type="success" :timeout="3000" top color="success">
      <strong> Job added </strong>successfully
      <v-icon color="success">
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-row class="tab">
         <v-div class="container">
              <v-col>
            <v-flex class="d-inline-flex"> 
          <h2 class="ml-2 mt-2"> Jobs </h2>
          <AddJob class="ml-1 mt-3"
          @add-job="addjob"
         @JobAdded="snackbar=true"/>
           </v-flex>
          </v-col>
      </v-div>
      <div class="text-center">
      <v-col>
        <v-btn small class="ref" outlined  color="#1976d2" ><v-icon small>mdi-refresh</v-icon>Refresh</v-btn>
      </v-col>
      <v-col>
        <JobFilter class="fltr"/>
      </v-col>
       <v-col lg="5" cols="12" class="d-flex flex-row-reverse">
        <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span  
          v-bind="attrs" v-on="on" style="cursor: pointer" >
          <v-btn small link color="#1976d2">
                <span class="sp">Actions</span>
          </v-btn>         
        </span>
      </template>
      <v-list width="150" class="py-0">
        <v-list-item v-for="(menu,index) in menus" :key="index" link>
          <v-list-item-icon>
              <v-icon>{{menu.icon}}</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
     </v-menu>
      </v-col>
      </div>
    </v-row>
    <v-row>
       <v-col lg="12">
         <v-data-table caption="" :headers="headers" :items="jobs" :items-per-page="5" class="elevation-1" >
          <template v-slot:item="row">
       <tr class="tr">
          <td class="td">
            <v-div>
              <v-div class="layout">
                <v-div class="align-content">
                  <v-div class="tool">
                      {{row.item.position_name}}
                  </v-div>
                </v-div>
                <v-div class="cont">
                    <v-div class="eye"><v-icon color="rgba(0,0,0,.87)" small>mdi-eye</v-icon></v-div>
                </v-div>
                 <v-div class="align-act">
                   <v-div class="menu"><ActionJob/></v-div>  
                 </v-div>
                 
              </v-div>
              
            </v-div>
         </td>
            <td class="td">{{row.item.Client}}</td>
            <td class="td">{{row.item.loction}}</td>
            <td class="td">{{row.item.headacount}}</td>
            <td class="td">{{row.item.Minimum_Salary}}</td>
            <td class="td">{{row.item.Maximun}}</td>
            <td class="td"></td>
            <td class="td"></td>
            <td class="td"></td>
       </tr>

          </template>
            <!-- <template v-slot:item.actions="{ item }">
             <v-row>
           <DetailsClient class="mr-1"/>
            <EditJob class="mr-1"
       :item="item" />
         
       <v-icon class="mr-1"
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
             </v-row>
        </template> -->
        </v-data-table>

       </v-col>
     </v-row>
  </div>
</template>
<script>
import JobFilter from '../components/JobFilter.vue'
import axios from "axios";
import AddJob from '../components/AddJob.vue';
// import EditJob from '../components/EditJob.vue';
import ActionJob from '../components/ActionJob.vue'
export default {
  components: {AddJob ,JobFilter, ActionJob},
  name: "Job",
  data() {
    return {
      Index:-1,
      editedItem:{
            name:'',
            client:'',
            location:'',
            headacount:'',
            contract:'',
            max:'',
            min:'',
            description:''
      },
      defaultItem:{
            name:'',
            client:'',
            location:'',
            headacount:'',
            contract:'',
            max:'',
            min:'',
            description:''
      },
      snackbar:false,
      dialogDelete:false,
      menus: [
        { title: "Edit", icon: "mdi-pencil" },
        { title: "Export", icon: "mdi-tray-arrow-down" },
      ],

      headers: [
        { text: "Position name", value: "position_name",class:'sty'},
        { text: "Job Client", value: "Client" },
        { text: "Job Location", value: "loction" },
        { text: "Head Account", value: "headacount" },
        { text: "Minimum Salary", value: "Minimum_Salary" },
        { text: "Maximum Salary", value: "Maximum_Salary" },
        { text: "Job Owner", value: "" },
        { text: "Job Team", value: "" },
        { text: "Job Status", value: "" },
        //  { text: 'Actions', value: 'actions', sortable: false },  
      ],
      jobs: [],
    };
  },
   watch:{
    dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created(){
    axios.get("http://localhost:3000/job")
  .then(response =>{
    this.jobs = response.data;
    console.log(this.jobs)
  })
  },
  methods:{ 
     deleteItem(item){
      this.jobs.splice(this.Index,1)
      this.dialogDelete = true
      console.log('delete data');
      axios.delete('http://localhost:3000/job/'+item.id)
      .then(response=>{
        console.log(response);
      })
  },
   deleteItemConfirm () {
        this.jobs.splice(this.Index, 1)
        this.closeDelete()
      },
         closeDelete () {
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.Index = -1
        })
      },
    addjob(job){
    this.jobs = [...this.jobs ,job]

  },
  },
};
</script>

<style scoped>
.container{
    max-width: 100%;
    flex: 1 1 100%;
    margin-top: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: 50px;
    width: 100%;
    margin-left: -2%;
    padding: 0 0 !important;
    background-color:#f1f4f8;
    border-bottom: 1px solid #d4d6da;
}
.tab{
  margin-top:2%;
  display:flex;
  position: relative;
  widows: 70%;
  margin-right: -5%;
}
.fltr{
  margin-left:-40% ;
  margin-right: -160%;
}
.ref{
  margin-right: -150%;
  
}
.sp{
  color:#fff
}
.d-flex{
  margin-right: -10%;
  
}
.layout{
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    
}
.align-content{
  width: calc(100% - 76px);
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(100%,1fr));
  align-content: center;
  
}
.tool{
  display: initial;
  background-repeat:no-repeat ;
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  
}
.cont{
    width: 26px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(100%,1fr));
    align-content: center;
    flex: 1 1 auto;
}
.tr:nth-of-type(even){
  background-color:#f1f4f8;
}
.td{
  border-right: 1px solid #d4e0f0;
}
.sty{
  background-color:#d4e0f0;
}
.eye{
     background: transparent;
    box-shadow: none!important;
    border-radius: 50%;
    justify-content: center;
    min-width: 0;
    color: rgba(0,0,0,.87);
    background-color: transparent!important;
    font-size: 13px;
    height: 28px;
    display: inline-flex;
    flex: 0 1 auto;
    position: relative;
    margin-left:50px;
    margin-right:-20px;
}
.align-act{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(100%,1fr));
    align-content: center;
    flex: 1 1 auto;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}
.menu{
  display: grid;
  vertical-align: middle;
  background-repeat: no-repeat;
    padding: 0;
    margin-left:120%;
    box-sizing: inherit;
    align-items: center;
    cursor: pointer;
    height: inherit;
    position: relative;
   width: 28px;
   color: rgba(0,0,0,.87);
}
.text-center{
 display: flex;
  flex-direction: row;
  border: 1;
  text-decoration: none;
  line-height: 17px;
  margin-left: 60%;
  margin-right: 0%;
 justify-content: end;
}

</style>