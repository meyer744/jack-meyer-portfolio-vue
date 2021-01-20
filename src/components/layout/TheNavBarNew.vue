<template>
  <nav>
    <ul class="desktopMenu">
      <li>
        <a><router-link class="brand" to="/">JM</router-link></a>
      </li>
      <li class="nav-link-desktop">
        <a><router-link class="navigation-link" to="/">Home</router-link></a>
      </li>
      <li class="nav-link-desktop">
        <a
          ><router-link class="navigation-link" to="/blog">Blog</router-link></a
        >
      </li>
      <li class="nav-link-desktop">
        <button>
          <a
            class="navigation-link"
            :href="resumeLink"
            download="jackMeyerResume.pdf"
            >Download Resume</a
          >
        </button>
      </li>
    </ul>
    <div class="desktop-social-icons">
      <ul>
        <li>
          <a class="icon" href="https://www.facebook.com/meyer744/">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
            <!-- <span> - Facebook</span> -->
          </a>
        </li>
        <li>
          <a class="icon" href="https://github.com/meyer744">
            <font-awesome-icon :icon="['fab', 'github']" />
            <!-- <span> - GitHub</span> -->
          </a>
        </li>
        <li>
          <a class="icon" href="mailto:meyer.744@gmail.com">
            <font-awesome-icon :icon="['far', 'envelope']" />
            <!-- <span> - Gmail</span> -->
          </a>
        </li>
        <li>
          <a class="icon" href="https://www.linkedin.com/in/jack-v-meyer/">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            <!-- <span> - LinkedIn</span> -->
          </a>
        </li>
      </ul>
    </div>
    <div class="mobile-menu">
      <div @click="toggleShow" class="hamburger">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <a><router-link class="brand mobile" to="/">JM</router-link></a>
      <div class="mobile">
        <button>
          <a
            class="navigation-link"
            :href="resumeLink"
            download="jackMeyerResume.pdf"
            >Download Resume</a
          >
        </button>
      </div>
    </div>
    <ul v-show="show">
      <li @click="toggleShow" class="nav-link-desktop">
        <a><router-link class="navigation-link" to="/">Home</router-link></a>
      </li>
      <li @click="toggleShow" class="nav-link-desktop">
        <a
          ><router-link class="navigation-link" to="/blog">Blog</router-link></a
        >
      </li>
      <li>
        <div class="mobile-social-icons">
          <ul class="icon-list">
            <li>
              <a class="icon" href="https://www.facebook.com/meyer744/">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                <!-- <span> - Facebook</span> -->
              </a>
            </li>
            <li>
              <a class="icon" href="https://github.com/meyer744">
                <font-awesome-icon :icon="['fab', 'github']" />
                <!-- <span> - GitHub</span> -->
              </a>
            </li>
            <li>
              <a class="icon" href="mailto:meyer.744@gmail.com">
                <font-awesome-icon :icon="['far', 'envelope']" />
                <!-- <span> - Gmail</span> -->
              </a>
            </li>
            <li>
              <a class="icon" href="https://www.linkedin.com/in/jack-v-meyer/">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                <!-- <span> - LinkedIn</span> -->
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["resumeLink"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #343a40;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.hamburger {
  color: rgb(196, 195, 202);
  padding: 10px;
}

ul {
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
}

button {
  background-color: transparent;
  border-color: rgb(196, 195, 202);
  border-radius: 5px;
  border-style: solid;
  margin-left: 20px;
}

@media screen and (min-width: 900px) {
  .hamburger {
    display: none;
  }

  .mobile {
    display: none;
  }

  .mobile-social-icons {
    display: none;
  }
}

@media screen and (max-width: 899px) {
  ul {
    flex-direction: column;
    align-items: baseline;
  }

  .desktopMenu {
    display: none;
  }

  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .brand {
    padding-left: 20px;
  }

  .desktop-social-icons {
    display: none;
  }
}

li {
  padding: 5px;
}

.navigation-link {
  color: rgb(196, 195, 202);
}

.navigation-link:hover,
.navigation-link:active {
  color: #746068;
}

.router-link-active {
  color: #915d62;
}

.brand {
  font-family: "Sriracha", cursive;
  color: #ab232b !important;
  font-size: 26px;
}

.mobile-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon {
  color: white;
}

.icon:hover {
  color: #ab232b;
}

.icon-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  max-width: 200px;
  justify-content: flex-start;
}
</style>
