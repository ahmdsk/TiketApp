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
                    <div class="mb-3">
                        <input type="email" class="form-control"
                            placeholder="Email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control"
                            placeholder="Password">
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" style="width: 100%">Login</button>
                    </div>
                    <div class="mt-4 text-center">
                        <p>New Members? <router-link to="/register" class="text-decoration-none">Register</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>