<template>
    <div id="Resume">    
    <h2 class="resume-container-heading">My Resume</h2>
        <div class="resume-container">
                <div class="resume-left">
                <h3 class="resume-header">PROFESSIONAL SUMMARY:</h3>
                <p class="summary">I am a highly motivated digital marketer, and self-taught web developer. 
                  I have a passion for working with variety of web based Technologies.
                  I am currently focusing on Vue.js, and have developed this portfolio with Vue 3.</p>
                <h3 class="resume-header">WORK HISTORY</h3>
                    <div class="resume-section">
                <h3 class="resume-company-header">Emerson Climate Technologies</h3>
                <h3 class="resume-location-header">Sidney, Ohio - IT Analyst</h3>
                <p class="resume-dates">April 2017 - April 2019, Jan 2020 - PRESENT</p>
                    <ul class="resume-list">
                        <!-- <li class="resume-list-item">AV/ IT  support to end-users of all levels</li>
                        <li class="resume-list-item">Troubleshooting basic networking issues</li> -->
                        <li class="resume-list-item">SharePoint site development, and Content Management</li>
                        <li class="resume-list-item">Developed a text-to-speech generator using an Azure rest API</li>
                    </ul>
                    </div>
                    <div class="resume-section">
                <h3 class="resume-company-header">HVAC Direct</h3>
                <h3 class="resume-location-header">Troy, Ohio - SEM Specialist</h3>
                <p class="resume-dates">April 2019 - September 2019</p>
                    <ul class="resume-list">
                        <!-- <li class="resume-list-item">Management of pay per click accounts</li> -->
                        <li class="resume-list-item">Magento web design/ development</li>
                        <li class="resume-list-item">Conversion rate optimization - A/B testing</li>
                        <li class="resume-list-item">Installation of conversion tracking scripts</li>
                        <li class="resume-list-item">Automated bidding script implementation</li>
                    </ul>
                    </div>
                    <div class="resume-section">
                <h3 class="resume-company-header">EM Launch</h3>
                <h3 class="resume-location-header">Minster, Ohio - Co-Founder</h3>
                <p class="resume-dates">January 2018 - PRESENT</p>
                    <ul class="resume-list">
                        <li class="resume-list-item">Wordpress website design/ development</li>
                        <li class="resume-list-item">CSS & HTML customizations</li>
                        <!-- <li class="resume-list-item">Digital marketing services</li> -->
                        <li class="resume-list-item">Google tag manager deployment</li>
                        <li class="resume-list-item">Google analytics site integration</li>
                    </ul>
                    </div>
                </div>
                    <div class="resume-right">
                    <h3 class="resume-header">RELEVANT SKILLS</h3>
                    <div class="resume-section">
                        <ul class="resume-list">
                            <li class="resume-list-item">SEO/ SEM</li>
                            <li class="resume-list-item">Google Analytics</li>
                            <li class="resume-list-item">Google Ads </li>
                            <li class="resume-list-item">Google Tag Manager</li>
                            <li class="resume-list-item">WordPress</li>
                            <li class="resume-list-item">Graphic Design</li>
                            <li class="resume-list-item">Adobe Suite</li>
                            <li class="resume-list-item">CSS & HTML</li>
                            <li class="resume-list-item">JavaScript</li>
                            <li class="resume-list-item">Bootstraps</li>
                            <li class="resume-list-item">Vue.js</li>
                            <li class="resume-list-item">React.js</li>
                            <li class="resume-list-item">GitHub</li>
                            <li class="resume-list-item">Rest API integration</li>
                            <li class="resume-list-item">Headless CMS integration</li>
                            <li class="resume-list-item">Command line/ Terminal</li>
                        </ul>
                    </div>
                    <h3 class="resume-header">EDUCATION AND COURSES</h3>
                    <div class="resume-section">
                <h3 class="resume-company-header">Edison Coummunity College</h3>
                <h3 class="resume-location-header">Associate Degree</h3>
                <h3 class="resume-location-header">Network Computer Management</h3>    
                <p class="resume-dates">GRADUATED: January 2017</p>
                    </div>
                    <div class="resume-section">
                <h3 class="resume-company-header">Ohio State University</h3>
                <h3 class="resume-location-header">Bachelor's Degree</h3>
                <h3 class="resume-location-header">Communications</h3>
                <p class="resume-dates">GRADUATED: June 2011</p>
                    </div>
                    <div class="resume-section">
                <h3 class="resume-company-header">Udemy</h3>
               <a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/"><h3 class="resume-location-header">Vue - The Complete Guide</h3></a>
                <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8691788?start=225"><h3 class="resume-location-header">The Complete Web Developer in 2019</h3></a> 
                <a href="https://www.udemy.com/course/javascript-basics-for-beginners/"><h3 class="resume-location-header">JavaScript For Beginners</h3></a>  
                    </div>
                    </div>
        </div>
    </div>
</template>

<style scoped>
.summary {
  max-width: 400px;
  font-size: 15px
}
.resume-container-heading {
  font-family: 'Sriracha', cursive;
  color: white;
  padding-top: 60px;
  margin-bottom: 20px;
  text-align: center;
}

.resume-container {
  border: solid 1px #dee2e6;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  max-width: 920px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 40px;
}

.resume-left {
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  margin-left: 20px;
  margin-right: 20px;
}

.resume-right {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  margin-left: 20px;
  margin-right: 20px;
}

.resume-list {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}

.resume-list-item {
  margin-left: 15px;
  text-align: left;
  list-style-type: circle !important;
  max-width: 350px;
}

.resume-header {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  font-size: 20px;
  font-family: 'Sriracha', cursive;
  color: #494D5F !important;
}

.resume-company-header  {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  font-size: 16px;
  color: #007bff;
}

.resume-location-header  {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  font-size: 16px;
  color: #494D5F;
}

.resume-dates  {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  font-size: 12px;
  font-family: 'Sriracha', cursive;
  color: #494D5F;
}

.resume-section {
  margin-top: 10px;
}

#Resume {
  padding-bottom: 40px;
  background-image: linear-gradient(to right, #AF222A, #494D5F);
}

</style>