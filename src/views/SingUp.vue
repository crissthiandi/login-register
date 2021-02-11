<template>
    <div>
        <h1>Sing Up</h1>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button @click="singUp">Sing in</button>
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
            singUp(){

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>