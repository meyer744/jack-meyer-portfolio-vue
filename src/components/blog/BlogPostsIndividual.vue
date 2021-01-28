<template>
<div v-if="loading" class="loading">
<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
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
        <div class="content" v-html="post.fields.content.html"></div>
        <div class="author">
          <div class="social-icons">
          <ul class="social-links">
            <li>
              <a class="icon facebook" :href="'https://www.facebook.com/sharer/sharer.php?u=https://www.jackvmeyer.com/blog/' + post.fields.slug" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
            </li>
            <li>
              <a class="icon twitter" :href="'https://twitter.com/intent/tweet?url=https://www.jackvmeyer.com/blog/' + post.fields.slug" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </li>
            <li>
              <a class="icon linked-in" :href="'https://www.linkedin.com/shareArticle?mini=true&url=https://www.jackvmeyer.com/blog/' + post.fields.slug" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </li>
            <li>
              <a class="icon mail" :href="'mailto:?&subject=&body=https://www.jackvmeyer.com/blog/' + post.fields.slug">
                <font-awesome-icon :icon="['far', 'envelope']" />
              </a>
            </li>
          </ul>
        </div>
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
        loading: false,
      }
    },
    methods: {
      getPost() {
        this.loading = true;
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
          this.loading = false;
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

.social-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
}

.icon {
  padding: 10px;
}
.linked-in {
  color: #0072b1;
}
.facebook {
  color: #16A4FB;
}
.twitter {
  color: #1DA1F2;
}
.mail {
  color: #343A40;
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