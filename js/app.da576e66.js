(function(e){function t(t){for(var a,l,i=t[0],r=t[1],n=t[2],u=0,h=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&h.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,n||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],a=!0,i=1;i<c.length;i++){var r=c[i];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var a={},s={app:0},o=[];function l(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=a,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(c,a,function(t){return e[t]}.bind(null,a));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/jack-meyer-portfolio-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var n=0;n<i.length;n++)t(i[n]);var d=r;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"16d0":function(e,t,c){},"34ac":function(e,t,c){"use strict";c("442b")},"442b":function(e,t,c){},"4bf7":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),s=Object(a["g"])("Jack Meyer All Rights Reserved 2021 Created with Vue 3");function o(e,t,c,o,l,i){var r=Object(a["y"])("the-nav-bar-new"),n=Object(a["y"])("router-view"),d=Object(a["y"])("footer-bar");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(r,{resumeLink:"https://area.emlaunch.com/wp-content/uploads/2021/01/jackMeyerResume.pdf"},null,8,["resumeLink"]),Object(a["h"])(n),Object(a["h"])(d,null,{default:Object(a["E"])((function(){return[s]})),_:1})],64)}var l=Object(a["G"])("data-v-7121a18b");Object(a["t"])("data-v-7121a18b");var i={class:"desktopMenu"},r=Object(a["g"])("JM"),n={class:"nav-link-desktop"},d=Object(a["g"])("Home"),u={class:"nav-link-desktop"},h=Object(a["g"])("Blog"),b={class:"nav-link-desktop"},p={class:"desktop-social-icons"},f={class:"icon",href:"https://www.facebook.com/meyer744/"},m={class:"icon",href:"https://github.com/meyer744"},j={class:"icon",href:"mailto:meyer.744@gmail.com"},v={class:"icon",href:"https://www.linkedin.com/in/jack-v-meyer/"},O={class:"mobile-menu"},g=Object(a["g"])("JM"),y={class:"mobile"},w=Object(a["g"])("Home"),k=Object(a["g"])("Blog"),P={class:"mobile-social-icons"},S={class:"icon-list"},I={class:"icon",href:"https://www.facebook.com/meyer744/"},A={class:"icon",href:"https://github.com/meyer744"},T={class:"icon",href:"mailto:meyer.744@gmail.com"},_={class:"icon",href:"https://www.linkedin.com/in/jack-v-meyer/"};Object(a["r"])();var M=l((function(e,t,c,s,o,M){var R=Object(a["y"])("router-link"),C=Object(a["y"])("font-awesome-icon");return Object(a["q"])(),Object(a["d"])("nav",null,[Object(a["h"])("ul",i,[Object(a["h"])("li",null,[Object(a["h"])("a",null,[Object(a["h"])(R,{class:"brand",to:"/"},{default:l((function(){return[r]})),_:1})])]),Object(a["h"])("li",n,[Object(a["h"])("a",null,[Object(a["h"])(R,{class:"navigation-link",to:"/"},{default:l((function(){return[d]})),_:1})])]),Object(a["h"])("li",u,[Object(a["h"])("a",null,[Object(a["h"])(R,{class:"navigation-link",to:"/blog"},{default:l((function(){return[h]})),_:1})])]),Object(a["h"])("li",b,[Object(a["h"])("button",null,[Object(a["h"])("a",{class:"navigation-link",href:c.resumeLink,download:"jackMeyerResume.pdf"},"Download Resume",8,["href"])])])]),Object(a["h"])("div",p,[Object(a["h"])("ul",null,[Object(a["h"])("li",null,[Object(a["h"])("a",f,[Object(a["h"])(C,{icon:["fab","facebook-f"]})])]),Object(a["h"])("li",null,[Object(a["h"])("a",m,[Object(a["h"])(C,{icon:["fab","github"]})])]),Object(a["h"])("li",null,[Object(a["h"])("a",j,[Object(a["h"])(C,{icon:["far","envelope"]})])]),Object(a["h"])("li",null,[Object(a["h"])("a",v,[Object(a["h"])(C,{icon:["fab","linkedin-in"]})])])])]),Object(a["h"])("div",O,[Object(a["h"])("div",{onClick:t[1]||(t[1]=function(){return M.toggleShow&&M.toggleShow.apply(M,arguments)}),class:"hamburger"},[Object(a["h"])(C,{icon:["fas","bars"]})]),Object(a["h"])("a",null,[Object(a["h"])(R,{class:"brand mobile",to:"/"},{default:l((function(){return[g]})),_:1})]),Object(a["h"])("div",y,[Object(a["h"])("button",null,[Object(a["h"])("a",{class:"navigation-link",href:c.resumeLink,download:"jackMeyerResume.pdf"},"Download Resume",8,["href"])])])]),Object(a["F"])(Object(a["h"])("ul",null,[Object(a["h"])("li",{onClick:t[2]||(t[2]=function(){return M.toggleShow&&M.toggleShow.apply(M,arguments)}),class:"nav-link-desktop"},[Object(a["h"])("a",null,[Object(a["h"])(R,{class:"navigation-link",to:"/"},{default:l((function(){return[w]})),_:1})])]),Object(a["h"])("li",{onClick:t[3]||(t[3]=function(){return M.toggleShow&&M.toggleShow.apply(M,arguments)}),class:"nav-link-desktop"},[Object(a["h"])("a",null,[Object(a["h"])(R,{class:"navigation-link",to:"/blog"},{default:l((function(){return[k]})),_:1})])]),Object(a["h"])("li",null,[Object(a["h"])("div",P,[Object(a["h"])("ul",S,[Object(a["h"])("li",null,[Object(a["h"])("a",I,[Object(a["h"])(C,{icon:["fab","facebook-f"]})])]),Object(a["h"])("li",null,[Object(a["h"])("a",A,[Object(a["h"])(C,{icon:["fab","github"]})])]),Object(a["h"])("li",null,[Object(a["h"])("a",T,[Object(a["h"])(C,{icon:["far","envelope"]})])]),Object(a["h"])("li",null,[Object(a["h"])("a",_,[Object(a["h"])(C,{icon:["fab","linkedin-in"]})])])])])])],512),[[a["C"],o.show]])])})),R={props:["resumeLink"],data:function(){return{show:!1}},methods:{toggleShow:function(){this.show=!this.show}}};c("603a");R.render=M,R.__scopeId="data-v-7121a18b";var C=R,E=Object(a["G"])("data-v-c940ebe2"),L=E((function(e,t){return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("p",null,[Object(a["x"])(e.$slots,"default")])])}));c("6a0d");const U={};U.render=L,U.__scopeId="data-v-c940ebe2";var q=U,G={components:{TheNavBarNew:C,FooterBar:q}};c("d539");G.render=o;var x=G,D=c("6c02"),W=(c("a4d3"),c("e01a"),Object(a["G"])("data-v-39f5cd3e"));Object(a["t"])("data-v-39f5cd3e");var N=Object(a["g"])("Projects"),B={class:"row row-cols-1 row-cols-md-3 g-4"},J=Object(a["g"])("My Latest Blog Posts");Object(a["r"])();var V=W((function(e,t,s,o,l,i){var r=Object(a["y"])("portfolio-home"),n=Object(a["y"])("section-header"),d=Object(a["y"])("project-search"),u=Object(a["y"])("project-card"),h=Object(a["y"])("my-resume"),b=Object(a["y"])("blog-posts-row");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(r,{"profile-pic":c("af73")},null,8,["profile-pic"]),Object(a["h"])(n,null,{default:W((function(){return[N]})),_:1}),Object(a["h"])(d,{modelValue:l.searchInput,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.searchInput=e}),onInput:i.filterProjects},null,8,["modelValue","onInput"]),Object(a["h"])("div",B,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(i.projectsFiltered,(function(e){return Object(a["q"])(),Object(a["d"])(u,{key:e.title,"card-image":e.projPicUrl,title:e.title,description:e.description,"tech-list":e.technology,"live-link":e.siteUrl,"git-link":e.gitUrl},null,8,["card-image","title","description","tech-list","live-link","git-link"])})),128))]),Object(a["h"])(h),Object(a["h"])(n,null,{default:W((function(){return[J]})),_:1}),Object(a["h"])(b)],64)})),H=(c("4de4"),c("caad"),c("2532"),Object(a["G"])("data-v-10abb74e"));Object(a["t"])("data-v-10abb74e");var F={id:"Home",class:"home"},z={className:"home-container"},$=Object(a["f"])('<div class="home-right" data-v-10abb74e><ul class="profile-blurb" data-v-10abb74e><h2 class="profile-pic-heading" data-v-10abb74e>Jack Meyer</h2><li class="profile-blurbs" data-v-10abb74e>Web Developer</li><li class="profile-blurbs" data-v-10abb74e>Experience in Digital Marketing &amp; IT</li><li class="profile-blurbs" data-v-10abb74e>Proud father of two awesome kids</li></ul></div>',1);Object(a["r"])();var K=H((function(e,t,c,s,o,l){return Object(a["q"])(),Object(a["d"])("div",F,[Object(a["h"])("div",z,[Object(a["h"])("img",{class:"profile-pic",src:c.profilePic,alt:"Jack-Meyer"},null,8,["src"]),$])])})),Q={props:["profilePic"]};c("ac38");Q.render=K,Q.__scopeId="data-v-10abb74e";var X=Q,Y=Object(a["G"])("data-v-1a22c979");Object(a["t"])("data-v-1a22c979");var Z={class:"col"},ee={class:"card w-100 h-100 cards shadow-lg",style:{width:"18rem"}},te={class:"card-body"},ce={class:"card-title"},ae={class:"card-text project-description"},se=Object(a["h"])("h3",{className:"tech-list-heading"},"Technologies Used",-1),oe={class:"tech-listed"},le={class:"card-links"};Object(a["r"])();var ie=Y((function(e,t,c,s,o,l){return Object(a["q"])(),Object(a["d"])("div",Z,[Object(a["h"])("div",ee,[Object(a["h"])("img",{src:c.cardImage,class:"card-img-top proj-pic",alt:"..."},null,8,["src"]),Object(a["h"])("div",te,[Object(a["h"])("h5",ce,Object(a["A"])(c.title),1),Object(a["h"])("p",ae,Object(a["A"])(c.description),1),se,Object(a["h"])("ul",oe,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(c.techList,(function(e){return Object(a["q"])(),Object(a["d"])("li",{key:e,class:"tech-list-item"},"#"+Object(a["A"])(e)+" ",1)})),128))]),Object(a["h"])("div",le,[Object(a["h"])("a",{href:c.liveLink,class:"btn btn-link text-nowrap"},"Live Preview",8,["href"]),null!=c.gitLink?(Object(a["q"])(),Object(a["d"])("a",{key:0,href:c.gitLink,class:"btn btn-link text-nowrap"},"Git Repository",8,["href"])):Object(a["e"])("",!0)])])])])})),re={props:["cardImage","techList","title","description","liveLink","gitLink"]};c("ea78");re.render=ie,re.__scopeId="data-v-1a22c979";var ne=re,de=Object(a["G"])("data-v-bbe5b030"),ue=de((function(e,t,c,s,o,l){return Object(a["q"])(),Object(a["d"])("input",{type:"text",placeholder:"search...",value:c.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["value"])})),he={props:["modelValue"],emits:["update:modelValue"]};c("dc18");he.render=ue,he.__scopeId="data-v-bbe5b030";var be=he,pe=Object(a["G"])("data-v-1c87b973"),fe=pe((function(e,t){return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("h2",null,[Object(a["x"])(e.$slots,"default")])])}));c("629b");const me={};me.render=fe,me.__scopeId="data-v-1c87b973";var je=me,ve=Object(a["G"])("data-v-1c3f278c");Object(a["t"])("data-v-1c3f278c");var Oe={id:"Resume"},ge=Object(a["f"])('<h2 class="resume-container-heading" data-v-1c3f278c>My Resume</h2><div class="resume-container" data-v-1c3f278c><div class="resume-left" data-v-1c3f278c><h3 class="resume-header" data-v-1c3f278c>JOB EXPERIENCE</h3><div class="resume-section" data-v-1c3f278c><h3 class="resume-company-header" data-v-1c3f278c>Emerson Climate Technologies</h3><h3 class="resume-location-header" data-v-1c3f278c>Sidney, Ohio - AV/ IT Analyst</h3><p class="resume-dates" data-v-1c3f278c>April 2017 - April 2019, Jan 2020 - PRESENT</p><ul class="resume-list" data-v-1c3f278c><li class="resume-list-item" data-v-1c3f278c>AV/ IT support to end-users of all levels</li><li class="resume-list-item" data-v-1c3f278c>Troubleshooting basic networking issues</li><li class="resume-list-item" data-v-1c3f278c>SharePoint site development</li><li class="resume-list-item" data-v-1c3f278c>Call center software admin</li></ul></div><div class="resume-section" data-v-1c3f278c><h3 class="resume-company-header" data-v-1c3f278c>HVAC Direct</h3><h3 class="resume-location-header" data-v-1c3f278c>Troy, Ohio - SEM Specialist</h3><p class="resume-dates" data-v-1c3f278c>April 2019 - September 2019</p><ul class="resume-list" data-v-1c3f278c><li class="resume-list-item" data-v-1c3f278c>Management of pay per click accounts</li><li class="resume-list-item" data-v-1c3f278c>Magento Web design/ development</li><li class="resume-list-item" data-v-1c3f278c>Conversion Rate Optimization - A/B Testing</li><li class="resume-list-item" data-v-1c3f278c>Installation of conversion tracking scripts</li><li class="resume-list-item" data-v-1c3f278c>Automated Bidding Script Implementation</li></ul></div><div class="resume-section" data-v-1c3f278c><h3 class="resume-company-header" data-v-1c3f278c>EM Launch</h3><h3 class="resume-location-header" data-v-1c3f278c>Minster, Ohio - Co-Founder</h3><p class="resume-dates" data-v-1c3f278c>January 2018 - PRESENT</p><ul class="resume-list" data-v-1c3f278c><li class="resume-list-item" data-v-1c3f278c>Wordpress website design/ development</li><li class="resume-list-item" data-v-1c3f278c>CSS &amp; HTML customizations</li><li class="resume-list-item" data-v-1c3f278c>Digital marketing services</li><li class="resume-list-item" data-v-1c3f278c>Google tag manager deployment</li><li class="resume-list-item" data-v-1c3f278c>Google analytics site integration</li></ul></div></div><div class="resume-right" data-v-1c3f278c><h3 class="resume-header" data-v-1c3f278c>RELEVANT SKILLS</h3><div class="resume-section" data-v-1c3f278c><ul class="resume-list" data-v-1c3f278c><li class="resume-list-item" data-v-1c3f278c>CSS3 &amp; HTML5</li><li class="resume-list-item" data-v-1c3f278c>JavaScript</li><li class="resume-list-item" data-v-1c3f278c>React.js</li><li class="resume-list-item" data-v-1c3f278c>Command line/ Terminal</li><li class="resume-list-item" data-v-1c3f278c>Graphic Design</li><li class="resume-list-item" data-v-1c3f278c>Adobe Suite</li><li class="resume-list-item" data-v-1c3f278c>SEO/ SEM</li><li class="resume-list-item" data-v-1c3f278c>Google Analytics</li><li class="resume-list-item" data-v-1c3f278c>Google Ads </li><li class="resume-list-item" data-v-1c3f278c>Google Search Console</li></ul></div><h3 class="resume-header" data-v-1c3f278c>EDUCATION AND COURSES</h3><div class="resume-section" data-v-1c3f278c><h3 class="resume-company-header" data-v-1c3f278c>Edison Coummunity College</h3><h3 class="resume-location-header" data-v-1c3f278c>Associate Degree</h3><h3 class="resume-location-header" data-v-1c3f278c>Network Computer Management</h3><p class="resume-dates" data-v-1c3f278c>GRADUATED: January 2017</p></div><div class="resume-section" data-v-1c3f278c><h3 class="resume-company-header" data-v-1c3f278c>Ohio State University</h3><h3 class="resume-location-header" data-v-1c3f278c>Bachelor&#39;s Degree</h3><h3 class="resume-location-header" data-v-1c3f278c>Communications</h3><p class="resume-dates" data-v-1c3f278c>GRADUATED: June 2011</p></div><div class="resume-section" data-v-1c3f278c><h3 class="resume-company-header" data-v-1c3f278c>Udemy</h3><a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8691788?start=225" data-v-1c3f278c><h3 class="resume-location-header" data-v-1c3f278c>The Complete Web Developer in 2019</h3></a><p class="resume-dates" data-v-1c3f278c>COMPLETED: May 2019</p><a href="https://www.udemy.com/course/javascript-basics-for-beginners/" data-v-1c3f278c><h3 class="resume-location-header" data-v-1c3f278c>JavaScript For Beginners</h3></a><p class="resume-dates" data-v-1c3f278c>COMPLETED: April 2020</p></div></div></div>',2);Object(a["r"])();var ye=ve((function(e,t){return Object(a["q"])(),Object(a["d"])("div",Oe,[ge])}));c("689b");const we={};we.render=ye,we.__scopeId="data-v-1c3f278c";var ke=we,Pe=Object(a["G"])("data-v-21964fb6");Object(a["t"])("data-v-21964fb6");var Se={class:"row row-cols-1 row-cols-md-3 g-4"},Ie={key:0,class:"col"},Ae={class:"card"},Te={class:"card-body"},_e={class:"card-title text-center"};Object(a["r"])();var Me=Pe((function(e,t,c,s,o,l){var i=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])("div",Se,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.posts,(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{key:e.meta.id},[Object(a["h"])(i,{to:"/blog/".concat(e.fields.slug)},{default:Pe((function(){return[t<3?(Object(a["q"])(),Object(a["d"])("div",Ie,[Object(a["h"])("div",Ae,[Object(a["h"])("img",{alt:e.fields.title,src:"".concat(e.fields.image[0].fields.file.url),class:"card-img-top"},null,8,["alt","src"])]),Object(a["h"])("div",Te,[Object(a["h"])("h5",_e,Object(a["A"])(e.fields.title),1)])])):Object(a["e"])("",!0)]})),_:2},1032,["to"])])})),128))])})),Re=c("2909"),Ce=c("7fd3"),Ee=c.n(Ce),Le=Ee.a.api("jackMeyerBlog","7xNlOhoDjGvfEn7fxdEkB7TIQWt9MHqI"),Ue={name:"blog",data:function(){return{posts:[],totalPosts:0,loading:!1}},methods:{getPosts:function(){var e=this;this.loading=!0;var t={embedAssets:!0,offset:this.posts.length};Le.getCollection("blogpost",t).then((function(t){var c;(c=e.posts).push.apply(c,Object(Re["a"])(t.data)),e.totalPosts=t.meta.total,e.loading=!1})).catch((function(t){throw e.loading=!1,t}))}},created:function(){this.getPosts()}};c("847e");Ue.render=Me,Ue.__scopeId="data-v-21964fb6";var qe=Ue,Ge={components:{PortfolioHome:X,ProjectCard:ne,ProjectSearch:be,SectionHeader:je,MyResume:ke,BlogPostsRow:qe},name:"home",computed:{projectsFiltered:function(){var e=this;if(""===this.searchInput)return this.projects;var t=this.projects.filter((function(t){return t.title.toLowerCase().includes(e.searchInput.toLowerCase())||t.description.toLowerCase().includes(e.searchInput.toLowerCase())}));return t}},methods:{filterProjects:function(){console.log(this.projectsFiltered)}},data:function(){return{searchInput:"",projects:[{category:"React",title:"Portfolio Page React App",description:"This is a React.js project that I created from scratch using NPM Creat React App. It includeds a projects section that is dynamically poplulated using a JSON style structured data file. It also features a working contact form that uses Google Firebase on the backend",technology:["react.js","NPM","react bootstraps","javascript","html","css","node.js","express"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/Portfolio-Page-Pic.jpg",siteUrl:"https://meyer744.github.io/jack-meyer-portfolio/",gitUrl:"https://github.com/meyer744/jack-meyer-portfolio"},{category:"React",title:"Oscar Winners React App",description:"This is a React.js project that I created following an online tutorial from Telmo Sampaio. It utilizes react router, and a JSON style structured data file to dynamically populate the content.",technology:["react.js","react router","javascript"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/Oscars-App.jpg",siteUrl:"https://meyer744.github.io/oscars-app",gitUrl:"https://github.com/meyer744/oscars-app"},{category:"WordPress",title:"Striker Bows WordPress Site",description:"This is a React.js project that I created following an online tutorial from Telmo Sampaio",technology:["html","css","wordpress"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/striker-bows-wordpress2.jpg",siteUrl:"https://strikerbows.com/"},{category:"WordPress",title:"Area Electric WordPress Site",description:"This is a React.js project that I created following an online tutorial from Telmo Sampaio",technology:["html","css","wordpress"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/areaelectric-wordpress.jpg",siteUrl:"https://areaelectric.com/"},{category:"WordPress",title:"OVIS WordPress Site",description:"This is a React.js project that I created following an online tutorial from Telmo Sampaio",technology:["html","css","wordpress"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/ovis-worpdress.jpg",siteUrl:"https://ohiovalleyintegration.com/"},{category:"WordPress",title:"Regal Plumbing WordPress Site",description:"This is a React.js project that I created following an online tutorial from Telmo Sampaio",technology:["html","css","wordpress"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/regal-plumbing-wordpress.jpg",siteUrl:"https://www.regalmechanical.com/"},{category:"WordPress",title:"Nitro Roofing WordPress Site",description:"This is a React.js project that I created following an online tutorial from Telmo Sampaio",technology:["html","css","wordpress"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/nitro-roofing-wordpress.jpg",siteUrl:"https://www.nitroroofing.com/"},{category:"WordPress",title:"Pete Deluke & Associates WordPress Site",description:"This is a React.js project that I created following an online tutorial from Telmo Sampaio",technology:["html","css","wordpress"],projPicUrl:"https://emlaunch.com/wp-content/uploads/2020/06/pete-deluke-wordpress.jpg",siteUrl:"https://petedelukeandassociates.com/about/"}]}}};c("34ac");Ge.render=V,Ge.__scopeId="data-v-39f5cd3e";var xe=Ge,De=Object(a["G"])("data-v-10a1c422");Object(a["t"])("data-v-10a1c422");var We=Object(a["h"])("h2",{class:"blog-page-heading"},"My Latest Blog Posts",-1),Ne={class:"row row-cols-1 row-cols-md-3 g-4"},Be={class:"col"},Je={class:"card"},Ve={class:"card-body"},He={class:"card-title text-center"};Object(a["r"])();var Fe=De((function(e,t,c,s,o,l){var i=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])(a["a"],null,[We,Object(a["h"])("div",Ne,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.posts,(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e.meta.id},[Object(a["h"])(i,{to:"/blog/".concat(e.fields.slug)},{default:De((function(){return[Object(a["h"])("div",Be,[Object(a["h"])("div",Je,[Object(a["h"])("img",{alt:e.fields.title,src:"".concat(e.fields.image[0].fields.file.url),class:"card-img-top"},null,8,["alt","src"])]),Object(a["h"])("div",Ve,[Object(a["h"])("h5",He,Object(a["A"])(e.fields.title),1)])])]})),_:2},1032,["to"])])})),128))])],64)})),ze={name:"blog",data:function(){return{posts:[],totalPosts:0,loading:!1}},methods:{getPosts:function(){var e=this;this.loading=!0;var t={embedAssets:!0,offset:this.posts.length};Le.getCollection("blogpost",t).then((function(t){var c;(c=e.posts).push.apply(c,Object(Re["a"])(t.data)),e.totalPosts=t.meta.total,e.loading=!1})).catch((function(t){throw e.loading=!1,t}))}},created:function(){this.getPosts()}};c("e070");ze.render=Fe,ze.__scopeId="data-v-10a1c422";var $e=ze,Ke=(c("fb6a"),c("b0c0"),Object(a["G"])("data-v-0d0d6142"));Object(a["t"])("data-v-0d0d6142");var Qe={key:0,class:"post"},Xe={class:"blog-heading"},Ye={class:"dateAndAuthor"},Ze={class:"byName"},et={class:"image"},tt={class:"content-wrapper"},ct={class:"author"};Object(a["r"])();var at=Ke((function(e,t,c,s,o,l){return o.post&&o.author?(Object(a["q"])(),Object(a["d"])("div",Qe,[Object(a["h"])("article",null,[Object(a["h"])("h2",Xe,Object(a["A"])(o.post.fields.title),1),Object(a["h"])("ul",Ye,[Object(a["h"])("li",Ze,"By "+Object(a["A"])(o.author.fields.name),1),Object(a["h"])("li",null,Object(a["A"])(o.post.meta.createdAt.slice(0,o.post.meta.createdAt.length-14)),1)]),Object(a["h"])("div",et,[Object(a["h"])("img",{alt:o.post.fields.title,src:"".concat(o.post.fields.image[0].fields.file.url)},null,8,["alt","src"])]),Object(a["h"])("div",tt,[Object(a["h"])("div",{class:"content",innerHTML:o.post.fields.content.html},null,8,["innerHTML"]),Object(a["h"])("div",ct,[Object(a["h"])("img",{src:"".concat(o.author.fields.avatar[0].fields.file.url,"?w=50&h=50&fit=crop"),alt:"author.fields.name"},null,8,["src"]),Object(a["g"])(" Written by "+Object(a["A"])(o.author.fields.name),1)])])])])):Object(a["e"])("",!0)})),st=(c("7db0"),c("2ef0")),ot=c.n(st),lt={name:"blogPostIndividual",data:function(){return{post:null,author:null}},methods:{getPost:function(){var e=this,t={embedAssets:!0,includes:1,filters:(new Ee.a.Filter).addAnd("slug","equal",this.$route.params.slug)};Le.getDocuments(t).then((function(t){e.post=t.data[0],e.author=ot.a.find(t.includes.author)})).catch((function(e){throw e}))}},created:function(){this.getPost()}};c("9815");lt.render=at,lt.__scopeId="data-v-0d0d6142";var it=lt,rt=Object(a["G"])("data-v-7fa40b39");Object(a["t"])("data-v-7fa40b39");var nt=Object(a["h"])("h1",null,"404 Error",-1),dt=Object(a["h"])("p",{class:"zoom-area"},[Object(a["h"])("b",null,"Sorry..."),Object(a["g"])("This page does not exist.")],-1),ut=Object(a["h"])("section",{class:"error-container"},[Object(a["h"])("span",null,"4"),Object(a["h"])("span",null,[Object(a["h"])("span",{class:"screen-reader-text"},"0")]),Object(a["h"])("span",null,"4")],-1),ht={class:"link-container"},bt=Object(a["g"])("Homepage");Object(a["r"])();var pt=rt((function(e,t){var c=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])(a["a"],null,[nt,dt,ut,Object(a["h"])("div",ht,[Object(a["h"])("li",null,[Object(a["h"])("button",null,[Object(a["h"])("a",null,[Object(a["h"])(c,{class:"brand",to:"/"},{default:rt((function(){return[bt]})),_:1})])])])])],64)}));c("e2b3");const ft={};ft.render=pt,ft.__scopeId="data-v-7fa40b39";var mt=ft,jt=[{path:"/",name:"home",component:xe},{path:"/jack-meyer-portfolio-vue/",component:xe},{path:"/blog",name:"blog",component:$e},{path:"/blog/:slug",name:"blogPostIndividual",component:it},{path:"/:pathMatch(.*)*",component:mt}],vt=Object(D["a"])({history:Object(D["b"])(),base:"/jack-meyer-portfolio-vue/",routes:jt}),Ot=vt,gt=(c("7b17"),c("ecee")),yt=c("f2d1"),wt=c("b702"),kt=c("c074"),Pt=c("ad3d");gt["c"].add(kt["a"],yt["a"],yt["b"],wt["a"],yt["c"]);var St=Object(a["c"])(x);St.component("font-awesome-icon",Pt["a"]),St.use(Ot),St.mount("#app")},"5c73":function(e,t,c){},"603a":function(e,t,c){"use strict";c("c417")},"629b":function(e,t,c){"use strict";c("c880")},6475:function(e,t,c){},6810:function(e,t,c){},"689b":function(e,t,c){"use strict";c("6475")},"6a0d":function(e,t,c){"use strict";c("5c73")},"847e":function(e,t,c){"use strict";c("16d0")},9815:function(e,t,c){"use strict";c("e8c7")},ac38:function(e,t,c){"use strict";c("c6ba")},af73:function(e,t,c){e.exports=c.p+"img/jack-meyer-pic.3e6eadba.jpg"},c417:function(e,t,c){},c6ba:function(e,t,c){},c880:function(e,t,c){},d539:function(e,t,c){"use strict";c("6810")},dbf8:function(e,t,c){},dc18:function(e,t,c){"use strict";c("ee05")},e070:function(e,t,c){"use strict";c("dbf8")},e2b3:function(e,t,c){"use strict";c("4bf7")},e8c7:function(e,t,c){},ea78:function(e,t,c){"use strict";c("facc")},ee05:function(e,t,c){},facc:function(e,t,c){}});
//# sourceMappingURL=app.da576e66.js.map