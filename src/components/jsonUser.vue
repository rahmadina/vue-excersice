<template>
  <div class="center">
    <h1 class="namakelas">User Name</h1>
    <h1>Test Json</h1>
    <TableComp :datas="data" :titles="titles"></TableComp>
  </div>
</template>
<script>
import axios from 'axios'
import TableComp from './TableComp.vue'
export default {
  components: { TableComp },
  data () {
    return {
      data: {},
      titles: ['name', 'username', 'email', 'fullAddress', 'company']
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      this.data = response.data
      console.log(this.data)
      for (const [key, value] of Object.entries(this.data)) {
        // console.log(`${key}: ${value}`)
        this.data[key].fullAddress = `${value.address.street} ${value.address.suite} ${value.address.city} ${value.address.zipcode}`
        this.data[key].company = `${value.company.name} ${value.company.catchPhrase} ${value.company.bs}`
      }
    })
  }
}
</script>
