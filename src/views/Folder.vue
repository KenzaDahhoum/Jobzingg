<template>
 <div>
<v-row>
     <v-col lg="12" >
        <v-flex class="d-inline-flex"> 
          <h2> ALL Folders</h2>
          <CreateFolder class="ml-1 mt-1"/>
        </v-flex>
        </v-col>
</v-row>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Owner
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="folder in Folders"
          :key="folder.name"
        >
          <td>{{ folder.name }}</td>
          <td>{{ folder.Owner }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
 </div>
</template>
<script>
import CreateFolder from '../components/CreateFolder.vue'
export default {
  components: { CreateFolder },
  data(){
      return{
          Folders:[
              {
               name: "Fils1",
              Owner: "Owener1",
              }
             

          ],
      }
  }
}
</script>