<template>
    <div class="bg-white max-w-md rounded mt-4 m-auto p-4 overflow-hiddem shadow-lg">
        <h1 class="font-bold text-blue-600 text-5xl mb-4 text-center">Login</h1>
        <input class="appearance-none mb-4 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:outline-none focus:border-gray-500" v-model="email" type="email" placeholder="Email">
        <input class="appearance-none mb-4 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:outline-none focus:border-gray-500" v-model="password" type="password" placeholder="Password">
        <button class="p-3 px-4 font-bold text-white rounded-lg bg-blue-400 " @click="login">Login</button>
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
                        alert("El usuario se logeo bien"+user)
                        this.$router.replace('dashboard')

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