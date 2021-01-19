import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import BlogPosts from "@/components/blog/BlogsPosts.vue";
import BlogPostsIndividual from "@/components/blog/BlogPostsIndividual.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    redirects: '/jack-meyer-portfolio-vue/',
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
  routes,
});

export default router;