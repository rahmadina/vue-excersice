<template>
  <div class="center container-table">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th :key="i" v-for="(title, i) in titles">
            {{ title }}
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(data, i) in datas">
          <vs-td :key="a" v-for="(title, a) in titles">
            {{ data[title] }}
          </vs-td>
          <!-- <vs-td>
            <span v-html="data.symbol"></span>
          </vs-td>
          <vs-td>
            {{ data.rate }}
          </vs-td>
          <vs-td>
            {{ data.description }}
          </vs-td> -->
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>
<script>
export default {
  props: {
    datas: {
    },
    titles: {
      type: Array
    }
  },
  data: () => ({

  })
}
</script>
<style>
.container-table {
  margin-top: 50px;
}
</style>
