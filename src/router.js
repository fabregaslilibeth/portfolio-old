import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Svg from "./components/Svgs.vue";

const routes = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home,
    // },
    //   {
    //     path: "/portfolio/skills",
    //     name: "Skills",
    //     component: Skills,
    //   },

    //   {
    //     path: "/portfolio/projects",
    //     name: "Projects",
    //     component: Projects,
    //   },

    //   {
    //     path: "/portfolio/about",
    //     name: "About",
    //     component: About,
    //   },

    //   {
    //     path: "/portfolio/contact",
    //     name: "Contact",
    //     component: Contact,
    //   },

    //   {
    //     path: "/portfolio/svg",
    //     name: "Svg",
    //     component: Svg,
    //   },
];

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    },
    history: createWebHistory(),
    routes,
});

export default router;