<template>
  <div class="grid container-hello">
    <vs-row align="center" justify="center">
      <h1>{{ msg }}</h1>
    </vs-row>
    <vs-row align="center">
      <vs-col w="3">
        Your last resin value :
      </vs-col>
      <vs-col w="2">
          <div class="content-inputs">
      <vs-input
        label-placeholder="Resin"
        v-model="lastresin"
      />
    </div>
      </vs-col>
    </vs-row>
    <vs-row align="center">
      <vs-col w="3">
        Your last online time:
      </vs-col>
      <vs-col w="4">
        <vs-input type="date" v-model="futuredate1" label="">
        </vs-input>
      </vs-col>
      <vs-col w="4">
        <vs-input type="time" v-model="timelastonline" label=""/>
      </vs-col>
    </vs-row>
    <vs-row align="center">
      <vs-col w="3">
      Your resin time to full :
      </vs-col>
      <vs-col w="2">
        {{fullresin}} Hours
        {{resultdate}}
      </vs-col>
    </vs-row>
    <vs-row align="center" justify="center">
        <vs-button
        circle
        color="warn"
        gradient
        @click="countResin()"
      >
        Calculate <i class="bx bxs-bell-ring"></i>
      </vs-button>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Welcome to Your Resin Counter',
      value: '',
      index: 1,
      lastresin: 0,
      timelastonline: '',
      fullresin: 0,
      resultdate: 0,
      futuredate1: ''
    }
  },
  methods: {
    countResin () {
      const resultmin = ((160 - this.lastresin) * 8)
      const resulthour = ((160 - this.lastresin) * 8) / 60
      this.fullresin = resulthour
      const currentdate = new Date()
      const futuredate = new Date(currentdate.getTime() + (resultmin * 6000))
      this.resultdate = this.mydate(futuredate)
      this.futuredate1 = this.testdate(futuredate)
    },
    mydate (resultdate) {
      const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augst', 'September', 'October', 'November', 'December']
      const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const currdate = resultdate.getDate()
      const currMonth = resultdate.getMonth()
      const currYear = resultdate.getFullYear()
      const resultdatetime = `${dayName[resultdate.getDay()]} , ${currdate} ${monthName[currMonth]} ${currYear} , ${resultdate.getHours()}:${resultdate.getMinutes()}:${resultdate.getSeconds()}`
      return resultdatetime
    },
    testdate (futuredatedate) {
      const futdate = futuredatedate.getDate()
      const futmon = (futuredatedate.getMonth() < 10 ? '0' + futuredatedate.getMonth() : futuredatedate.getMonth())
      const futYear = futuredatedate.getFullYear()
      const resultfutdate = `${futYear}-${futmon}-${futdate}`
      return resultfutdate
    }
  }
}
</script>
<style>
.container-hello {
  margin-top: 50px;
}
</style>
