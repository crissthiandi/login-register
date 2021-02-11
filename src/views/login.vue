<template>
    <div>
        <h1>Login page</h1>
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
    import firebase from 'firebase';

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
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then((user) => {
                        // Signed in
                        // ...
                        alert("El usuario se creo de forma satisfactoria"+user)
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>