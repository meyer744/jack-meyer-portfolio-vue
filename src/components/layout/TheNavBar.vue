<template>
<nav class="navbar navbar-expand-lg navbar-dark sticky-top">
  <div class="container-fluid">
<router-link to="/"><a class="navbar-brand">JM</a></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div v-show="showMenu" class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link">Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" class="nav-link">Blog</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="resumeLink" download="jackMeyerResume.pdf">Download Resume</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  props: ['resumeLink'],
data() {
  return {
    showMenu: true
  };
},
methods: {

  toggleMenuFalse() {
    this.showMenu = false;
  },
  toggleMenuTrue() {
    this.showMenu = true;
  }

  }
}
</script>

<style scoped>
nav {
  background-color: #343A40;
}

.navbar-brand {
  font-family: 'Sriracha', cursive;
  color: #AB232B !important;
}

.btn {
  color: hsl(356, 43%, 52%);
  border-color: hsl(356, 43%, 52%);
}

.btn:hover {
  color: white;
  background-color: hsl(356, 43%, 52%);
  border-color: hsl(356, 43%, 52%);
}

</style>
