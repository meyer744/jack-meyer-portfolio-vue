<template>
<div>
    <ul>
  <li>
    <a href="https://www.facebook.com/meyer744/">
      <i class="fa fa-facebook" aria-hidden="true"><font-awesome-icon :icon="['fab', 'facebook-f']" /></i>
      <span> - Facebook</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/meyer744">
      <i class="fa fa-github" aria-hidden="true"><font-awesome-icon :icon="['fab', 'github']" /></i>
      <span> - GitHub</span>
    </a>
  </li>
  <li>
    <a href="mailto:meyer.744@gmail.com">
      <i class="fa fa-google-plus" aria-hidden="true"><font-awesome-icon :icon="['far', 'envelope']" /></i>
      <span> - Gmail</span>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/jack-v-meyer/">
      <i class="fa fa-linkedin" aria-hidden="true"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></i>
      <span> - LinkedIn</span>
    </a>
  </li>
  </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400');

div {
  margin:0;
  padding:50px;
  background-color: #343A40;
  font-family: 'Roboto Condensed', sans-serif;
  padding-bottom: 80px;
}

ul {
display: flex;
align-items: center;
flex-wrap: wrap;
margin: auto;
max-width: 1100px;
justify-content: center;
}

ul li {
  list-style:none;
  margin:0 5px;
  margin-right: 40px;
  padding-bottom: 40px;
} 

ul li a .fa {
  font-size: 40px;
  color: #262626;
  line-height:80px;
  transition: .5s;  
  padding-right: 14px;
}

ul li a span {
  padding:0;
  margin:0;
  position:absolute;
  top: 30px;
  color: #262626;
  letter-spacing: 4px;
  transition: .5s;
}

ul li a {
  text-decoration: none;
  display:absolute;
  display:block;
  width:210px;
  height:80px;
  background: #fff;
  text-align:left;
  padding-left: 20px;
  transform: rotate(-30deg) skew(25deg) translate(0,0);
  transition:.5s;
  box-shadow: -20px 20px 10px rgba(0,0,0,.5);
}
ul li a:before {
  content: '';
  position: absolute;
  top:10px;
  left:-20px;
  height:100%;
  width:20px;
  background: #b1b1b1;
  transform: .5s;
  transform: rotate(0deg) skewY(-45deg);
}
ul li a:after {
  content: '';
  position: absolute;
  bottom:-20px;
  left:-10px;
  height:20px;
  width:100%;
  background: #b1b1b1;
  transform: .5s;
  transform: rotate(0deg) skewX(-45deg);
}

ul li a:hover {
  transform: rotate(-30deg) skew(25deg) translate(20px,-15px);
  box-shadow: -50px 50px 50px rgba(0,0,0,.5);
}

ul li:hover .fa {
  color:#fff;
}

ul li:hover span {
  color:#fff;
}

ul li:hover:nth-child(1) a{
  background: #3b5998;
}
ul li:hover:nth-child(1) a:before{
  background: #365492;
}
ul li:hover:nth-child(1) a:after{
  background: #4a69ad;
}

ul li:hover:nth-child(2) a{
  background: #00aced;
}
ul li:hover:nth-child(2) a:before{
  background: #097aa5;
}
ul li:hover:nth-child(2) a:after{
  background: #53b9e0;
}

ul li:hover:nth-child(3) a{
  background: #dd4b39;
}
ul li:hover:nth-child(3) a:before{
  background: #b33a2b;
}
ul li:hover:nth-child(3) a:after{
  background: #e66a5a;
}

ul li:hover:nth-child(4) a{
  background: #0072b1;
}
ul li:hover:nth-child(4) a:before{
  background:  #0073b19a;
}
ul li:hover:nth-child(4) a:after{
  background:  #0073b121;
}
</style>