<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link class="navbar-brand" to="/">TiketApp</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                    </li>

                    <!-- If Login -->
                    <li class="nav-item">
                        <router-link to @click="redirect" class="nav-link" aria-current="page" v-if="loggedIn">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/add" class="nav-link" aria-current="page" v-if="isAdmin">Add Event</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to @click="logout" class="nav-link" aria-current="page" v-if="loggedIn">Logout</router-link>
                    </li>

                    <!-- If Not Login -->
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" aria-current="page" v-if="!loggedIn">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" aria-current="page" v-if="!loggedIn">Register</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Navbar',
    setup() {
        const store = useStore()
        const logout = async () => {
            await store.dispatch("logout")
        }

        return {
            loggedIn: computed(() => store.state.loggedIn),
            logout,
            isAdmin: store.getters["isAdmin"]
        }
    }
}
</script>