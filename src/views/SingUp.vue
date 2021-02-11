<template>
    <div>
        <h1>Sing Up</h1>
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="singUp">Sing in</button>
    </div>
</template>

<script>
    export default {
        name: 'SingUp',
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