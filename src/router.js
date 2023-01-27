import { createRouter, createWebHistory } from "vue-router"

import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Ticket from "./views/Ticket.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/events/:id",
        name: "events",
        component: Ticket,
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router