import MainPage from "@/App";
// import Logout from "@/components/LogOut";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    /* {
        path: '/forum/logout',
        component: Logout
    }, */
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router