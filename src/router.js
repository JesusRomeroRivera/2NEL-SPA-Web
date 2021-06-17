import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Membership from "@/views/Membership";
import Login from "@/views/Login";
import SignUp from "@/views/SignUp";
import Principal from "@/views/Principal";
import RegisterDetails from "@/views/RegisterDetails";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/membership",
      name: "membership",
      component: Membership,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/principal",
      name: "principal",
      component: Principal,
    },
    {
      path: "/registerDetails/:step",
      name: "registerDetails",
      component: RegisterDetails,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },
  ],
});
