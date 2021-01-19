<template>
  <div class="post" v-if="post && author">
    <article>
        <h2 class="blog-heading">{{ post.fields.title }}</h2>
        <ul class="dateAndAuthor">
            <li class="byName">By {{ author.fields.name }}</li>
            <li>{{ post.meta.createdAt.slice(0, post.meta.createdAt.length - 14) }}</li>
        </ul>
      <div class="image">
        <img :alt="post.fields.title" :src="`${post.fields.image[0].fields.file.url}`">
      </div>
      <div class="content-wrapper">
        <!-- <h2>{{ post.fields.title }}</h2> -->
        <div class="content" v-html="post.fields.content.html"></div>
        <div class="author">
          <img :src="`${author.fields.avatar[0].fields.file.url}?w=50&h=50&fit=crop`" alt="author.fields.name"> Written by {{ author.fields.name }}
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import Comfortable from 'comfortable-javascript';
  import { comfortable } from '@/comfortable.js'
  import _ from 'lodash';
  export default {
    name: 'blogPostIndividual',
    data() {
      return {
        post: null,
        author: null,
      }
    },
    methods: {
      getPost() {
        const options = {
          embedAssets: true,
          includes: 1,
          filters: new Comfortable.Filter()
            .addAnd('slug', 'equal', this.$route.params.slug)
        };
        comfortable.getDocuments(options)
        .then(result => {
          this.post = result.data[0];
        //   this.author = _.find(result.includes.author, { meta: { id: this.post.fields.author[0].meta.id } });
          this.author = _.find(result.includes.author);
        })
        .catch(err => {
          throw err;
        })
      }
    },
    created() {
      this.getPost();
    }
  }
</script>

<style scoped>

.byName {
    color: #AB232B;
}

.dateAndAuthor {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin: auto;
    max-width: 215px;
    list-style: none;
    padding-left: 0px;
}

img {
    vertical-align: middle;
    max-width: 100%;
}

.blog-heading {
        padding: 20px;
        padding-bottom: 0px;
        text-align: center;
        font-family: sriracha;
        font-size: 40px;
    }

.post .image {
        width: 25%;
        padding: 10px;
        margin: auto;
        /* object-fit: cover; */
  }

@media screen and (max-width: 1200px) {
        .post .image {
         width: 45%
     }
 }
 
@media screen and (max-width: 675px) {
    .post .image {
         width: 90%
     }
 }

.content {
        max-width: 800px;
        margin: auto;
        padding: 20px;
    }

.author {
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
    }

    .post .author img {
        margin-top: 10px;
  }
.post .author img {
        display: inline-block;
        margin-bottom: -8px;
        margin-right: 10px;
        border-radius: 50%;
  }
  
</style>