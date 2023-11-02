import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/auth";

export enum RoutesEnum {
  HOME = "HOME",
  LOGIN = "LOGIN",
  CATEGORY = "CATEGORY",
  USERS = "USERS",
  TODO_LIST = "TODO_LIST",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RoutesEnum.HOME,
      component: HomeView,
      meta: { auth: true },
    },
    {
      path: "/login",
      name: RoutesEnum.LOGIN,
      component: () => import("../views/LoginView.vue"),
      meta: { layout: "empty", auth: false },
    },
    {
      path: "/category",
      name: RoutesEnum.CATEGORY,
      component: () => import("@/views/category/IndexView.vue"),
      // meta: { auth: true }
    },
    {
      path: "/users",
      name: RoutesEnum.USERS,
      component: () => import("@/views/user/IndexView.vue"),
      // meta: { auth: true }
    },
    {
      path: "/todo-list",
      name: RoutesEnum.TODO_LIST,
      component: () => import("@/views/TodoList.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.auth) {
    next();
    return;
  }

  if (to.meta.auth) {
    const authStore = useAuthStore();

    if (authStore.getIsLoggedIn()) {
      next();
    } else {
      next({ name: RoutesEnum.LOGIN });
    }
  }
});

export default router;
