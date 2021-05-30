<template>
  <div class="center">
    <TableComp :datas="time" :titles="titles"></TableComp>
  </div>
</template>
<script>
import axios from 'axios'
import TableComp from './TableComp.vue'
export default {
  components: { TableComp },
  data () {
    return {
      time: {},
      titles: ['code', 'symbol', 'rate', 'description']
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        this.time = response.data.bpi
      })
  },
  arr: () => ({
  })
}
</script>
