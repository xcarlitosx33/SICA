import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Login from "./pages/Login.vue";
import Registro from "./pages/Registro.vue";
import RecuperarPassword from "./pages/RecuperarPassword.vue";
import ConfirmacionEnvio from "./pages/ConfirmacionEnvio.vue";
import DashboardAdministrativo from "./pages/DashboardAdministrativo.vue";

import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
  meta?: { title?: string; description?: string };
}

const routes: Route[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { title: "Login - SICA" },
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
    meta: { title: "Registro - SICA" },
  },
  {
    path: "/recuperar",
    name: "RecuperarPassword",
    component: RecuperarPassword,
    meta: { title: "Recuperar contraseña - SICA" },
  },
  {
    path: "/confirmacion",
    name: "ConfirmacionEnvio",
    component: ConfirmacionEnvio,
    meta: { title: "Confirmación de envío - SICA" },
  },
  {
    path: "/dashboard",
    name: "DashboardAdministrativo",
    component: DashboardAdministrativo,
    meta: { title: "Dashboard Administrativo - SICA" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "SICA";

  if (metaDesc) {
    addMetaTag(metaDesc);
  }

  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;