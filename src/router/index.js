import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SingUp from "@/views/SingUp.vue";
import Private from "@/views/Private.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Sing-UP",
    name: "SingUP",
    component: SingUP
  },
  {
    path: "/dashboard",
    name: "Private",
    component: Private
  },

];

const router = new VueRouter({
  routes
});

export default router;
