import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import BlogPosts from "@/components/blog/BlogsPosts.vue";
import BlogPostsIndividual from "@/components/blog/BlogPostsIndividual.vue";
import Four0FourPage from "@/components/Four0FourPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/jack-meyer-portfolio-vue/",
    component: HomePage,
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
  },
  { path: '/:pathMatch(.*)*', 
    component: Four0FourPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;