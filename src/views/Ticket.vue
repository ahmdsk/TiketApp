<template>
  <h1>Tess {{ event.title }}</h1>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    name: 'Ticket',
    setup() {
      const store = useStore()
      const route = useRoute()
      const event = computed(() => store.getters.getEvent(route.params.id))

      return { event }
    }
}
</script>