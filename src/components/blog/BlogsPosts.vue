<template>
<h2 class="blog-page-heading">My Latest Blog Posts</h2>
<div class="row row-cols-1 row-cols-md-3 g-4">
<div v-for="post in posts" :key="post.meta.id">
    <router-link :to="`/blog/${post.fields.slug}`">
  <div class="col">
    <div class="card">
      <img :alt="post.fields.title" :src="`${post.fields.image[0].fields.file.url}`" class="card-img-top">
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">{{ post.fields.title }}</h5>
        </div>
    </div>
     </router-link>
</div>
</div>
</template>

<script>
  import { comfortable } from '@/comfortable.js'

  export default {
    name: 'blog',
    data() {
      return {
        posts: [],
        totalPosts: 0,
        loading: false
      }
    },
    methods: {
      getPosts() {
        this.loading = true;

        const options = {
          embedAssets: true,
          offset: this.posts.length
        };

        comfortable.getCollection('blogpost', options)
        .then(result => {
          this.posts.push(...result.data);
          this.totalPosts = result.meta.total;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          throw err;
        })
      }
    },
    created() {
      this.getPosts();
    }
  }
</script>

<style scoped>
a {
  color: rgb(54, 47, 47);
}
.g-4 {
    width: 85%;
    margin: auto;
}
@media screen and (min-width: 899px) {
  .g-4 {
    width: 60%;
  }
}
 .blog-page-heading {
        padding: 20px;
        padding-bottom: 0px;
        text-align: center;
        font-family: sriracha;
        font-size: 40px;
    }
</style>