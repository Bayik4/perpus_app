import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "@/views/TabsPage.vue";
import LandingPage from "@/views/LandingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/landing",
    component: LandingPage,
  },
  {
    path: "/login",
    component: () => import("@/views/auth/LoginPage.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/auth/RegisterPage.vue"),
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
