<template>
  <Navbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  setup() {
    const store = useStore()
    const dispatchEvents = () => store.dispatch("getEvents")
    dispatchEvents()
    return {}
  }
}
</script>

<style>
  #app {
    font-family: 'Poppins', sans-serif;
  }
</style>