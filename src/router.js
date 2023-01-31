import { createRouter, createWebHistory } from "vue-router"
import store from "./store"

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

router.beforeEach((to, from, next) => {
    to.matched.some((record) => {
        console.log("record: "+record)
        return record.meta.requiresAuth
    })

    if(to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.state.loggedIn) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router