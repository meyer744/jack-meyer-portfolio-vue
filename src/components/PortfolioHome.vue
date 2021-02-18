<template>
  <div id="Home" class="home">
    <div className="home-container">
      <img
        class="profile-pic"
        :src="profilePic"
        height="216px"
        width="180"
        alt="Jack-Meyer"
      />
      <div class="home-right">
        <ul class="profile-blurb">
          <h2 class="profile-pic-heading">Jack Meyer</h2>
          <li class="profile-blurbs">Web Developer</li>
          <li class="profile-blurbs">Experience in Digital Marketing & IT</li>
          <li class="profile-blurbs">Proud father of two awesome kids</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profilePic"],
};
</script>

<style scoped>
.profile-pic {
  margin: auto;
  height: auto;
  width: auto;
  max-width: 225px;
  content-visibility: auto;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

.profile-pic:hover {
  transition: 0.3s ease-in-out;
  transform: scale(1.09);
}

.home {
  background-color: #494d5f;
  background-image: linear-gradient(to right, #494d5f, #af222a);
}

.home-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 800px;
  margin: auto;
  padding: 40px;
}

.home-right {
  display: flex;
  flex-direction: column;
  flex-grow: 3;
}

.profile-blurb {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0px;
}

.profile-blurbs {
  text-align: center;
  color: white;
  list-style: none;
}

.profile-pic-heading {
  color: white;
  padding-top: 10px;
  font-family: "Sriracha", cursive;
  padding-bottom: 15px;
}
</style>
