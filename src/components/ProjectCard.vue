<template>
<div class="col">
<div class="card w-100 h-100 cards shadow-lg" style="width: 18rem;">
  <img :src="cardImage" class="card-img-top proj-pic" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text project-description">{{description}}</p>
    <h3 className="tech-list-heading">Technologies Used</h3>
        <ul class="tech-listed">
            <li v-for="tech in techList" :key="tech" class="tech-list-item">#{{ tech }}&nbsp;</li>
        </ul>
        <div class="card-links">
    <a :href="liveLink" class="btn btn-link text-nowrap">Live Preview</a>
    <a v-if="gitLink != null" :href="gitLink" class="btn btn-link text-nowrap">Git Repository</a>
        </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['cardImage', 'techList', 'title', 'description', 'liveLink', 'gitLink']
}
</script>

<style scoped>
.proj-pic {
  max-width: max-content;
  height: 250px;
  margin-bottom: 10px;
  object-fit: cover;
}

.tech-listed {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  font-family: 'Sriracha', cursive;
  padding-left: 0px;
}

.tech-list-item {
  font-size: 14px;
}

.tech-list-heading {
  text-align: center;
  font-size: 20px;
  font-weight: 700px;
  margin-top: 12px;
}

.cards {
  border: 2px solid #494D5F;
  border-radius: 15px;
  padding: 30px;
  margin: 20px 0 20px;
  transition: 0.3s ease-in-out;
  max-width: 390px;
  margin: auto;
}

.cards:hover {
  transition: 0.3s ease-in-out;
  transform: scale(1.03);
}

.project-description {
  margin: auto;
  max-width: 250px;
  text-align: center;
}

.card-title {
  font-family: 'Sriracha', cursive;
  font-size: 20px;
  color: #494D5F !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 300px;
  text-align: center;
}

.card-links {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
.row-cols-md-3>* {
  flex: 1 1 360px;
}
}
</style>