<template>
    <div>
        <h1>Sign Up</h1>
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="SignUp">Sing Up</button>
    </div>
</template>

<script>
    import firebase from "firebase";
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

                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then((user) => {
                        // Signed in
                        // ...
                        alert("El usuario se creo de forma satisfactoria"+user)
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        alert("Error"+errorCode+errorMessage)
                        // ..
                    });

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>