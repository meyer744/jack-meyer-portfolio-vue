<template>
  <portfolio-home
    :profile-pic="require('/src/assets/images/jack-meyer-pic.jpg')"
  ></portfolio-home>
  <section-header>Projects</section-header>
  <project-search
    v-model="searchInput"
    @input="filterProjects"
  ></project-search>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <project-card
      v-for="p in projectsFiltered"
      :key="p.title"
      :card-image="p.projPicUrl"
      :title="p.title"
      :description="p.description"
      :tech-list="p.technology"
      :live-link="p.siteUrl"
      :git-link="p.gitUrl"
      :blog-link="p.blogLink"
    ></project-card>
  </div>
  <load-more-button v-if="amountLoaded < projects.length" @click="loadMore"
    >Load More...
  </load-more-button>
  <my-resume></my-resume>
  <section-header>My Latest Blog Posts</section-header>
  <blog-posts-row></blog-posts-row>
</template>

<script>
import PortfolioHome from "./PortfolioHome.vue";
import ProjectCard from "./ProjectCard.vue";
import ProjectSearch from "./ProjectSearch.vue";
import SectionHeader from "./SectionHeader.vue";
import MyResume from "./MyResume.vue";
import BlogPostsRow from "./blog/BlogPostsRow.vue";
import LoadMoreButton from "../components/UI/LoadMoreButton.vue";

export default {
  components: {
    PortfolioHome,
    ProjectCard,
    ProjectSearch,
    SectionHeader,
    MyResume,
    BlogPostsRow,
    LoadMoreButton,
  },
  name: "home",
  computed: {
    projectsFiltered() {
      let initialProjects = [];
      for (let i = 0; i < this.amountLoaded; i++) {
        if (this.amountLoaded < this.projects.length) {
          initialProjects.push(this.projects[i]);
        } else {
          initialProjects = this.projects;
        }
      }

      if (this.searchInput === "") {
        return initialProjects;
      } else {
        let filtered = this.projects.filter(
          (project) =>
            project.title
              .toLowerCase()
              .includes(this.searchInput.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(this.searchInput.toLowerCase())
        );
        return filtered;
      }
    },
  },
  methods: {
    filterProjects() {
      console.log(this.projectsFiltered);
    },
    loadMore() {
      this.amountLoaded++;
      console.log(this.amountLoaded);
    },
  },
  data() {
    return {
      searchInput: "",
      amountLoaded: 3,
      projects: [
        {
          category: "Vue",
          title: "Portfolio V2 Vue App",
          description:
            "This portfolio was done with Vue.js 3, and features a blog connected via a headless CMS",
          technology: [
            "vue.js",
            "vue router",
            "javascript",
            "html",
            "css",
            "headless CMS",
          ],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2021/02/portfolio-v2-pic.jpg",
          gitUrl: "https://github.com/meyer744/jack-meyer-portfolio-vue",
        },
        {
          category: "Nuxtjs",
          title: "Refine Manufacturing Nuxt.js Site",
          description:
            "This website was built using Nuxt.js, and utizes Storyblok headless CMS for content management",
          technology: [
            "nuxt.js",
            "nuxt router",
            "javascript",
            "html",
            "css",
            "headless CMS",
          ],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2021/04/Refine-manufacturing.png",
          siteUrl: "https://www.refinemanufacturing.com/",
          gitUrl: "https://github.com/meyer744/refine-manufacturing",
        },
        {
          category: "Vue",
          title: "Vue 3 Weather App",
          description:
            "This app uses the Geolocation API to get location, and the OpenWeatherMap API. It also has the option to search by city or zip",
          technology: [
            "vue.js",
            "javascript",
            "html",
            "css",
            "OpenWeatherMap API",
            "Geolocation API",
          ],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2021/02/weather-app.jpg",
          siteUrl: "https://elated-colden-69d0cd.netlify.app",
          gitUrl: "https://github.com/meyer744/weather-app",
        },
        {
          category: "Vue",
          title: "Fizz Buzz Vue App",
          description:
            "The classic coding interview challege, made with Vue.js. It allows you to select a range(with error validation), and then displays the results on execution.",
          technology: ["vue.js", "javascript", "html", "css"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2021/02/fiizz-buzz.jpg",
          siteUrl: "https://blissful-ramanujan-c13b16.netlify.app",
          gitUrl: "https://github.com/meyer744/fizz-buzz",
        },
        {
          category: "React",
          title: "Portfolio V1 React App",
          description:
            "This is a React.js project. It includeds a projects section, and a working contact form that uses Google Firebase",
          technology: [
            "react.js",
            "react bootstraps",
            "javascript",
            "html",
            "css",
            "firebase",
          ],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/Portfolio-Page-Pic.jpg",
          siteUrl: "https://meyer744.github.io/jack-meyer-portfolio/",
          gitUrl: "https://github.com/meyer744/jack-meyer-portfolio",
        },
        {
          category: "React",
          title: "Oscar Winners React App",
          description:
            "This is a simple React.js project that I created following an online tutorial. It utilizes react router, and a data file to dynamically populate the content.",
          technology: ["react.js", "react router", "javascript"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/Oscars-App.jpg",
          siteUrl: "https://meyer744.github.io/oscars-app",
          gitUrl: "https://github.com/meyer744/oscars-app",
        },
        {
          category: "Power-Apps",
          title: "Text-To-Speech Tool",
          description:
            "This text-to-speech generation tool uses Azure Services text-to-speech Rest API, a Microsoft Power Apps Flow, and Microsft Forms to save a .wav file to a SharePoint site.",
          technology: [
            "text-to-speech API",
            "Rest API",
            "Power Apps",
            "Mirosoft Forms",
            "SharePoint",
          ],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2021/02/Power-apps-text-to-speech.jpg",
          blogLink: "/blog/azure-text-to-speech-API",
        },
        {
          category: "WordPress",
          title: "Striker Bows WordPress Site",
          description:
            "This is a wordpress site that I created for a local client",
          technology: ["html", "css", "wordpress"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/striker-bows-wordpress2.jpg",
          siteUrl: "https://strikerbows.com/",
        },
        {
          category: "WordPress",
          title: "Area Electric WordPress Site",
          description:
            "This is a wordpress site that I created for a local client",
          technology: ["html", "css", "wordpress"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/areaelectric-wordpress.jpg",
          siteUrl: "https://areaelectric.com/",
        },
        {
          category: "WordPress",
          title: "OVIS WordPress Site",
          description:
            "This is a wordpress site that I created for a local client",
          technology: ["html", "css", "wordpress"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/ovis-worpdress.jpg",
          siteUrl: "https://ohiovalleyintegration.com/",
        },
        {
          category: "WordPress",
          title: "Regal Plumbing WordPress Site",
          description:
            "This is a wordpress site that I created for a local client",
          technology: ["html", "css", "wordpress"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/regal-plumbing-wordpress.jpg",
          siteUrl: "https://www.regalmechanical.com/",
        },
        {
          category: "WordPress",
          title: "Nitro Roofing WordPress Site",
          description:
            "This is a wordpress site that I created for a local client",
          technology: ["html", "css", "wordpress"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/nitro-roofing-wordpress.jpg",
          siteUrl: "https://www.nitroroofing.com/",
        },
        {
          category: "WordPress",
          title: "Pete Deluke & Associates WordPress Site",
          description:
            "This is a wordpress site that I created for a local client",
          technology: ["html", "css", "wordpress"],
          projPicUrl:
            "https://emlaunch.com/wp-content/uploads/2020/06/pete-deluke-wordpress.jpg",
          siteUrl: "https://petedelukeandassociates.com/about/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  margin: auto;
  max-width: 1300px;
  padding: 8px;
  padding-top: 0px;
  margin-bottom: 60px;
}
</style>
