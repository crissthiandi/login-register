<template>
    <div>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login'
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