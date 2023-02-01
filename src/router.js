import { createRouter, createWebHistory } from "vue-router"
import store from "./store"

import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Ticket from "./views/Ticket.vue"
import User from "./views/dashboard/User.vue"

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
    },
    {
        path: "/user/:id",
        name: "user",
        component: User,
        meta: { requiresAuth: true },
        beforeEnter(to, from, next) {
            if(store.getters["isUser"] && parseInt(store.state.user.id) === parseInt(to.params.id)) {
                next();
            } else {
                next({
                    name: "login"
                })
            }
        }
    }
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
    to.matched.some((record) => {
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