import { createStore } from "vuex"
import Repository from "./repositories/RepositoryFactory"
const EventRepository = Repository.get("events")

const store = createStore({
    state: {
        events: [],
        userevents: []
    },

    actions: {
        async getEvents({ commit }) {
            commit("STORE_EVENTS", await EventRepository.get())
        },
        async getUserEvents({ commit }, id) {
            commit("STORE_USER_EVENTS", await EventRepository.getUserEvents(id))
        },
        async createEvent({ commit }, payload) {
            commit("STORE_EVENT", await EventRepository.create(payload))
        },
        async updateEvent({ commit }, { payload, id }) {
            commit("UPDATE_EVENT", await EventRepository.update(payload, id))
        },
        async deleteEvent({ commit }, id) {
            const result = await EventRepository.delete(id)
            
            if(result) {
                commit("DELETE_EVENT", id)
            }
        }
    },

    mutations: {
        STORE_EVENTS: (state, response) => {
            const { data } = response
            state.events = data
        },
        STORE_EVENT: (state, response) => {
            const { data } = response
            state.events.push(data.data)
        },
        UPDATE_EVENT: (state, response) => {
            const { data } = response
            const index = state.events.findIndex((event) => event.id == data.data.id)
            state.events[index] = data.data
        },
        DELETE_EVENT: (state, id) => {
            const index =  state.events.findIndex((event) => event.id == id)
            state.events.data.splice(index, 1)
        }
    },

    getters: {
        getEvent: (state) => (id) => {
            return state.events.data.find((event) => event.id == id)
        }
    }
})

export default store