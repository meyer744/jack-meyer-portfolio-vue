import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import BlogPosts from "@/components/blog/BlogsPosts.vue";
import BlogPostsIndividual from "@/components/blog/BlogPostsIndividual.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/jack-meyer-portfolio-vue/",
    redirects: "/",
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPosts,
  },
  {
    path: "/blog/:slug",
    name: "blogPostIndividual",
    component: BlogPostsIndividual,
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;