<template>
    <div class="text-center">
        <div class="contianer p-5">
            <div class="p-5">
                <h1>User Dashboard</h1>
            </div>
        </div>
        <div class="container pb-5">
            <div class="row pb-5">
                <div class="col-md-6">
                    <Counter title="Total Events" :value="10" />
                </div>
                <div class="col-md-6">
                    <Counter title="Total Amount Spent" :value="10" symbol="Rp." />
                </div>
            </div>
        </div>
        <div class="container py-5">
            <h3 class="pb-5">All Events</h3>
            <div class="row pb-5">
                <div class="col-md-12">
                    <div class="card">
                        <EventTable :events="userevents" :isAdmin="false" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from '../../components/Counter.vue'
import EventTable from '../../components/EventTable.vue'
import { computed } from 'vue'
import { mapState, useStore } from 'vuex'

export default {
    name: "User",
    components: {
        Counter, EventTable
    },
    setup() {
        const store = useStore()
        const getUserEvents = () => store.dispatch("getUserEvents", store.state.user.id)
        const userevents = computed(() => store.state.userevents)

        getUserEvents()

        return {
            getUserEvents,
            userevents
        }
    }
}
</script>