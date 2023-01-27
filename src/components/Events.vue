<template>
    <div class="row pb-5">
        <Event v-for="(event, i) in events" :key="i" :event="event" />
    </div>
</template>

<script>
import { computed } from 'vue'
import Event from './Event.vue'
import { useStore } from 'vuex'

export default {
    name: 'Events',
    components: { Event },
    setup() {
        const store = useStore()
        return {
            events: computed(() => store.state.events.data)
        }
    }
}
</script>