<template>
  <h2 class="blog-page-heading">My Latest Blog Posts</h2>
  <div v-if="loading" class="loading">
<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  <div class="row row-cols-1 row-cols-md-3">
  <div v-for="post in posts" :key="post.meta.id">
  <div class="col mb-4">
    <div class="card">
      <router-link :to="`/blog/${post.fields.slug}`">
        <div class="card w-100 h-100"> <img
              :alt="post.fields.title"
              :src="`${post.fields.image[0].fields.file.url}`"
              class="card-img-top"
            />
          <div class="card-body">
          </div>
          <h5 class="card-title text-center">{{ post.fields.title }}</h5>
        </div>
      </router-link>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import { comfortable } from "@/comfortable.js";

export default {
  name: "blog",
  data() {
    return {
      posts: [],
      totalPosts: 0,
      loading: false,
    };
  },
  methods: {
    getPosts() {
      this.loading = true;

      const options = {
        embedAssets: true,
        offset: this.posts.length,
      };

      comfortable
        .getCollection("blogpost", options)
        .then((result) => {
          this.posts.push(...result.data);
          this.totalPosts = result.meta.total;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          throw err;
        });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style scoped>
a {
  color: rgb(54, 47, 47);
}
.card {
  margin: auto;
}

.row {
  padding: 15px;
  margin: 0;
  min-height: 100vh;
}

.blog-page-heading {
  padding: 20px;
  padding-bottom: 0px;
  text-align: center;
  font-family: sriracha;
  font-size: 40px;
}

/* loading styles */

.loading {
  display: flex;
  margin: auto;
  align-content: center;
  justify-content: center;
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: 40px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #343A40;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
