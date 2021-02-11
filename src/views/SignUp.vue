<template>
    <div>
        <h1>Sign Up</h1>
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="SignUp">Sing in</button>
    </div>
</template>

<script>
    export default {
        name: 'SignUp',
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            SignUp(){
                firebase.auth().createUserWithEmailAndPassword(email, password)

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>