<template>
    <div>
        <h1>Login</h1>
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            login(){

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>