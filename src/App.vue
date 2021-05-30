<template>
    <div class="center examplex">
      <vs-navbar color="#7d33ff" text-white square center-collapsed v-model="active">
        <template #left>
          <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
        </template>
        <vs-navbar-item :active="active == 'Resin'" id="resin">
          <router-link to="/">Resin Counter</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'bitcoin'" id="bitcoin">
          <router-link to="/bitcoin">Bitcoin</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'userJson'" id="userJson">
          <router-link to="/jsonUser">userJson</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
          license
        </vs-navbar-item>
        <template #right>
          <vs-button color="#fff" flat >Login</vs-button>
          <vs-button color="#fff" border >Get Started</vs-button>
        </template>
      </vs-navbar>
      <div id="app" class="center grid">
    <router-view/>
  </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: 'primary'
    }
  }
}
</script>

<style>
#app {}
</style>
