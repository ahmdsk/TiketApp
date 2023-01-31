<template>
    <div class="row justify-content-center align-items-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body p-5">
                    <div class="card-title text-center">
                        <h3>Login</h3>
                        <p>Equipped with the cutting edge features that make a 21st Century Ticketing Platform.</p>
                    </div>
                    <hr>
                    <form @submit.prevent="login">
                        <div class="form-group mb-3">
                            <input type="email" name="email" v-model="email" class="form-control" placeholder="Email">
                            <span class="text-danger">
                                {{ emailError }}
                            </span>
                        </div>
                        <div class="form-group mb-3">
                            <input type="password" name="password" v-model="password" class="form-control"
                                placeholder="Password">
                            <span class="text-danger">
                                {{ passwordError }}
                            </span>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary" style="width: 100%">Login</button>
                        </div>
                    </form>
                    <div class="mt-4 text-center">
                        <p>New Members? <router-link to="/register" class="text-decoration-none">Register</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { object, string } from 'yup'
import { useForm, useField } from 'vee-validate'
import { ref } from 'vue'

export default {
    name: 'Login',
    setup() {
        const store = useStore()
        const router = useRouter()
        const schema = object({
            email: string().required().email(),
            password: string().required().min(5)
        })

        useForm({
            validationSchema: schema,
        })

        const { value: email, errorMessage: emailError } = useField("email")
        const { value: password, errorMessage: passwordError } = useField("password")

        const user = ref({})

        const login = async () => {
            try {
                await store.dispatch("login", {
                    email: email.value,
                    password: password.value
                })

                if(store.state.loggedIn && store.getters["isAdmin"]) {
                    return router.push("/admin")
                } else {
                    return router.push({
                        name: "user",
                        params: { id: store.state.user.id }
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }

        return {
            login, user, emailError, passwordError, email, password
        }
    }
}
</script>