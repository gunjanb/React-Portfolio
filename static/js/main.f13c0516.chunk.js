(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{122:function(e,t,a){},446:function(e,t,a){},455:function(e,t,a){},456:function(e,t,a){},457:function(e,t,a){},458:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(64),r=a.n(n),s=(a(122),a(123),a(23)),c=a(15),o=a(113),l=a.n(o),d=a(35),m=a(0),j=a(114),b=a.n(j),h=(a(446),a(3));var u=function(){return Object(h.jsxs)("div",{className:"",children:[Object(h.jsxs)("div",{style:{position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:[Object(h.jsx)(s.b,{to:"/",children:" "}),Object(h.jsx)("h1",{style:{color:"black",margin:"2rem",fontSize:"2rem",fontFamily:"Berkshire Swash, cursive"},children:"Hi !!"}),Object(h.jsx)("h2",{style:{color:"black",margin:"2rem",fontSize:"2rem",fontFamily:"Berkshire Swash, cursive"},children:Object(h.jsx)(b.a,{options:{strings:["I am","Gunjan Bhargava","an Engineer","Web Developer","an Artist"],autoStart:!0,loop:!0,delay:200}})}),Object(h.jsx)(s.b,{to:"/content",style:{textDecoration:"none"},children:Object(h.jsx)(m.b.Provider,{value:{color:"white",size:"2rem",background:"#7d0909"},children:Object(h.jsx)(d.b,{})})})]}),Object(h.jsx)(l.a,{id:"particles-js",height:"100vh",className:"particles-snow",params:{particles:{number:{value:300,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#B3B3B3"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:!1,speed:40,size_min:.1,syno:!1},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"bottom",random:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}}}})]})},p=a(465),g=a(463),x=a(464),y=a(116),f=a.p+"static/media/ProfileImg.440597e4.jpg",O=a.p+"static/media/GunjanBhargava2021.1f6cf642.pdf",v=(a(455),a(466)),k={atag:{textDecoration:"none",color:"black"},imgsize:{height:"10rem",width:"10rem",margin:"0.2rem"},email:{background:"linear-gradient(#ff5858,#ffc8c8)",borderRadius:"1rem",cursor:"pointer",paddingLeft:"5rem",paddingRight:"5rem"},title:{backgroundColor:"rgb(177, 170, 170)",borderRadius:"1rem"}},N={hidden:{x:"-30vh",opacity:0},visible:{x:0,opacity:1,transition:{delay:.2,duration:.7,type:"spring"}}};function w(){return Object(h.jsxs)(v.a.div,{className:"sidebar-custom-styles py-3 px-2 rounded d-flex flex-column align-items-center justify-content-around",variants:N,initial:"hidden",animate:"visible",children:[Object(h.jsx)("div",{className:"my-name",children:" Gunjan Bhargava"}),Object(h.jsx)(y.a,{src:f,roundedCircle:!0,style:k.imgsize}),Object(h.jsx)("div",{className:"title py-2 px-3",children:"Hi, my name is Gunjan Bhargava and I'm a web developer. Welcome to my personal website!"}),Object(h.jsx)("div",{className:"resume m-1",style:{fontWeight:"bold"},children:Object(h.jsxs)("a",{href:O,download:"resume.pdf",style:k.atag,children:[Object(h.jsx)(m.b.Provider,{value:{color:"black",size:"1rem"},children:Object(h.jsx)(d.d,{})})," ","Download Resume"]})}),Object(h.jsxs)("div",{className:"social-icons m-3",children:[Object(h.jsx)("a",{href:"https://www.linkedin.com/in/gunjan-bhargava/",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(m.b.Provider,{value:{color:"black",size:"3rem"},children:Object(h.jsx)(d.g,{})})}),Object(h.jsx)("a",{href:"https://github.com/gunjanb",target:"_black",rel:"noopener noreferrer",children:Object(h.jsx)(m.b.Provider,{value:{color:"black",size:"3rem"},children:Object(h.jsx)(d.f,{})})})]}),Object(h.jsx)("div",{className:"email py-2 m-2",style:k.email,onClick:function(){window.open("mailto:gunjanbhargava2021@gmail.com")},children:"Email"}),Object(h.jsx)(s.b,{to:"/",style:{textDecoration:"none"},children:Object(h.jsx)(m.b.Provider,{value:{color:"#f6c0ba",size:"2rem",background:"#7d0909"},children:Object(h.jsx)(d.a,{})})})]})}var S=a(28);a(456);function C(){var e=Object(i.useState)(),t=Object(S.a)(e,2),a=t[0],n=t[1];Object(i.useEffect)((function(){var e=window.location.href;console.log(e),e.endsWith("/content")?n("About"):e.endsWith("/content/portfolio")?n("Portfolio"):e.endsWith("/content/resume")?n("Resume"):e.endsWith("/content/contact")&&n("Contact")}),[a]);return Object(h.jsxs)(v.a.div,{className:"Navbar d-flex justify-content-between",variants:{hidden:{y:"-30vh"},visible:{y:0,transition:{delay:.1,duration:.5,type:"spring"}}},initial:"hidden",animate:"visible",children:[Object(h.jsx)("div",{className:"navbar-active",children:a}),Object(h.jsxs)("div",{className:"navbar-items d-flex align-self-center",children:["About"!==a&&Object(h.jsx)(s.b,{to:"/content",style:{textDecoration:"none"},children:Object(h.jsx)("div",{className:"navbar-item",onClick:function(){return n("About")},children:"About"})}),"Portfolio"!==a?Object(h.jsx)(s.b,{to:"/content/portfolio",style:{textDecoration:"none"},children:Object(h.jsx)("div",{className:"navbar-item",onClick:function(){return n("Portfolio")},children:"Portfolio"})}):null,"Resume"!==a&&Object(h.jsx)(s.b,{to:"/content/resume",style:{textDecoration:"none"},children:Object(h.jsx)("div",{className:"navbar-item",onClick:function(){return n("Resume")},children:"Resume"})}),"Contact"!==a&&Object(h.jsx)(s.b,{to:"/content/contact",style:{textDecoration:"none"},children:Object(h.jsx)("div",{className:"navbar-item",onClick:function(){return n("Contact")},children:"Contact"})})]})]})}var _=a.p+"static/media/HalfImage.3b13c886.jpg",D={imgsize:{height:"16rem",width:"20rem"}},I={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeOut"}}};function M(){return Object(h.jsx)(v.a.div,{className:"m-2",variants:I,initial:"hidden",animate:"visible",exit:"exit",children:Object(h.jsxs)(g.a,{className:"justify-content-center",children:[Object(h.jsxs)(x.a,{lg:8,className:"aboutme",style:{padding:"1.75rem"},children:[Object(h.jsxs)("p",{children:["Born and brought up in India.I have a Masters Degree from Indian Institute of Technology Delhi(IIT-D) and Bachelors of Engineering in Electronics and Telecommunication from RGPV. Was",Object(h.jsx)("strong",{children:" University Merit Holder"}),".Worked as a Frontend Verification Engineer in VLSI Domain in Advance Micro Devices (AMD). Currently living in Seattle WA with my family."]}),Object(h.jsx)("p",{children:"Web Development revolves around creativity and creative problem solving which I love the most.I loved the thrill.I love to see your very own imagination comes to life. Would love to contribute my skill and experience to make peoples lives simple after completing my UW Bootcamp."}),Object(h.jsx)("p",{children:"I enjoy being outside socialising with friends and family.I love to paint and play with my little munchkins."})]}),Object(h.jsx)(x.a,{lg:4,className:"p-4 mt-2",children:Object(h.jsx)(y.a,{src:_,className:"img-fluid",rounded:!0,style:D.imgsize})})]})})}var P=a.p+"static/media/artgallery.5aa47998.png",T=a.p+"static/media/codequizapp.03fcff92.png",A=a.p+"static/media/dashboard.83af1eef.jpg",B=a.p+"static/media/DayScheduler.8aded24a.png",E=a.p+"static/media/ecommercebackend.b6be79f9.jpg",z=a.p+"static/media/employeetracker.9b15422e.jpg",W=a.p+"static/media/Kids_corner_learning_Tool.d3913336.jpg",R=a.p+"static/media/Password-generator.2ccaf8e3.png",L=a.p+"static/media/pwabudgettracker.9d25910c.png",G=a.p+"static/media/teamdashboard.67e35c56.png",q=a.p+"static/media/techblog.8195cc93.png",Q=a.p+"static/media/weatherapp.e16a12df.png",J=[{name:"Art Gallery",image:P,deployed_url:"https://happylittleartgallery072021.herokuapp.com/",github_url:"https://github.com/gunjanb/Art-Gallery",category:["Node.js"],techs:"Express, Handlebars, Sequelize",description:"The Happy Little Art Gallery was created for budding artists who want to find inspiration from other artists, or showcase their own work or sell their own Artwork"},{name:"Tech Blog",image:q,deployed_url:"https://my-tech-blog-123.herokuapp.com/",github_url:"https://github.com/gunjanb/Tech-Blog",category:["Node.js"],techs:"MVC, Handlebars, Sequelize",description:"The Tech-Blog is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developer's posts."},{name:"kids Corner Learning Tool",image:W,deployed_url:"https://gunjanb.github.io/Kids-Corner-Learning-Tool/",github_url:"https://github.com/gunjanb/Kids-Corner-Learning-Tool",category:["JS","API"],techs:"Third party API",description:"This project is geared toward young children. Its focus was to make it an educational tool in learning about the fifty states of the US."},{name:"Budget Tracker PWA",image:L,deployed_url:"https://mybudget-tracker-123.herokuapp.com/",github_url:"https://github.com/gunjanb/PWA-Budget-Tracker",category:["Node.js"],techs:"Webmanifest, ServiceWorkers,indexedDB",description:"Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime even offline is more important."},{name:"Fitness Tracker",image:A,deployed_url:"https://myfitness-tracker-123.herokuapp.com/",github_url:"https://github.com/gunjanb/Fitness-Tracker/",techs:"Mongoose, MongoDB, Express",description:"This application helps user to reach their fitness goals more quickly by tracking their workout progress. ",category:["MongoDB"]},{name:"Note Taker",image:a.p+"static/media/notetaker.140be174.png",deployed_url:"https://agile-beyond-18161.herokuapp.com/",github_url:"https://github.com/gunjanb/Note-Taker",category:["Node.js"],techs:"Node.js, UUID",description:"Note taker is a browser-based note taking application "},{name:"Weather Dashboard",image:Q,deployed_url:"https://gunjanb.github.io/Weather-Dashboard/",github_url:"https://github.com/gunjanb/Weather-Dashboard",category:["API"],techs:"Server Side APIs,jQuery,JS",description:"Display weather for a city for current day as well as display forecast for next 5 days."},{name:"Workday Scheduler",image:B,deployed_url:"https://gunjanb.github.io/Work-Day-Scheduler/",github_url:"https://github.com/gunjanb/Work-Day-Scheduler",category:["Node.js"],techs:"local storage, Momment.js,jQuery",description:"Work day scheduler is a daily planner to create a schedule."},{name:"E-Commerce Backend",image:E,deployed_url:"https://youtu.be/bzqA3CMndlI",github_url:"https://github.com/gunjanb/E-Commerce-BackEnd/",category:["MySQL","Node.js"],techs:"Express, Sequelize, MySQL, Insomnia",description:"E-Commerce BackEnd is an e-commerce API"},{name:"Employee Tracker",image:z,deployed_url:"https://youtu.be/Zc6SIAYvGbo",github_url:"https://github.com/gunjanb/Employee-Tracker",category:["Node.js","MySQL"],techs:"Node.js, Inquirer, and MySQL",description:"Employee tracker is a CLI application for managing a company's employees"},{name:"Team Dashboard",image:G,deployed_url:"https://youtu.be/mdKnrsRqSDU",github_url:"https://github.com/gunjanb/Team-Dashboard",category:["Node.js"],techs:"Node.js, Inquirer,Jest",description:"This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person"},{name:"README.md Generator",image:a.p+"static/media/snapshotofterminal.a44724a1.jpg",deployed_url:"https://drive.google.com/file/d/1uDdgXtsE7DYf_5vnGA2TK21qstSY4t-H/view",github_url:"https://github.com/gunjanb/Professional-README-Generator",category:["Node.js"],techs:"Node, Inquirer,template literals",description:"This CLI dynamically generates a professional README file from a user's input."},{name:"Password Generator",image:R,deployed_url:"https://gunjanb.github.io/Password-Generator/",github_url:"https://github.com/gunjanb/Password-Generator",category:["JS"],techs:"JS, HTML,CSS",description:"This application generate random passwords with lengths between 8 to 128 along with special ,uppercase , lowercase and numeric characters in it"},{name:"Code Quiz",image:T,deployed_url:"https://github.com/gunjanb/Code-Quiz",github_url:"https://gunjanb.github.io/Code-Quiz/",category:["Node.js"],techs:"Flexbox, Media Queries, JS",description:"It is a timed quiz with multiple-choice questions to check your knowledge for JS"}],H=(a(457),function(e){var t=e.project,a=t.name,i=t.image,n=t.deployed_url,r=t.github_url;return Object(h.jsx)("div",{className:"projectrCard col-md-6 col-lg-4  my-2",children:Object(h.jsxs)("div",{className:"projectCard-wrapper",children:[Object(h.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:i,alt:a,className:"projectCard-image img-fluid"})}),Object(h.jsxs)("div",{className:"projectCard-title",children:[Object(h.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(m.b.Provider,{value:{color:"black",size:"1.7rem"},children:Object(h.jsx)(d.e,{})})}),Object(h.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"},children:a})]})]})})}),F=(a(458),{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeOut"}}});function U(){var e=Object(i.useState)(J),t=Object(S.a)(e,2),a=t[0],n=t[1],r=function(e){var t=J.filter((function(t){return t.category.includes(e)}));n(t)};return Object(h.jsxs)(v.a.div,{className:"container portfolio",variants:F,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsxs)("div",{className:"project-navbar d-flex justify-content-start ",children:[Object(h.jsx)("div",{className:"proj-navbar-item",onClick:function(){return n(J)},children:"All"}),Object(h.jsx)("div",{className:"proj-navbar-item",onClick:function(){return r("React.js")},children:"React"}),Object(h.jsx)("div",{className:"proj-navbar-item",onClick:function(){return r("MongoDB")},children:"MongoDB"}),Object(h.jsx)("div",{className:"proj-navbar-item",onClick:function(){return r("Node.js")},children:"Node"}),Object(h.jsx)("div",{className:"proj-navbar-item",onClick:function(){return r("JS")},children:"JS"}),Object(h.jsx)("div",{className:"proj-navbar-item",onClick:function(){return r("MySQL")},children:"MySQL"})]}),Object(h.jsx)("div",{className:"row",children:a.map((function(e){return Object(h.jsx)(H,{project:e},e.name)}))})]})}var K=function(e){var t=e.skill;return Object(h.jsx)("li",{children:t})},V=a(467),Z=["Git","Heroku","Github Deployment","Insomnia","Robo 3T","MySQL Workbench","Microsoft Word","Power Point","Zoom","Google Meet","Screencastify"],Y=["CSS3","HTML5","jQuery","React","REST APIs","Javascript","Responsive Design","Handlebars","Bootstrap","Redux","UIkit","Jest"],X=["Node.js","Express.js","MySQL","Sequelize ORM","MongoDB","Mongoose ODM","GraphQL","Apollo","APIS","JSON","JWT","Stripe","Paypal","Cloudinary"],$={atag:{textDecoration:"none",color:"black"}},ee={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeOut"}}};var te=function(){return Object(h.jsxs)(v.a.main,{variants:ee,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)("div",{style:{display:"flex",padding:"1rem",justifyContent:"center"},children:Object(h.jsxs)(V.a,{variant:"secondary",className:"m-2",children:["Download Resume"," ",Object(h.jsxs)("a",{href:O,download:"resume.pdf",style:$.atag,children:[Object(h.jsx)(m.b.Provider,{value:{color:"white",size:"1rem"},children:Object(h.jsx)(d.c,{})})," "]})]})}),Object(h.jsx)(p.a,{children:Object(h.jsxs)(g.a,{className:"p-2",children:[Object(h.jsxs)(x.a,{sm:!0,children:[Object(h.jsx)("h4",{children:"Front-end Skills"}),Object(h.jsx)("ul",{style:{paddingLeft:"initial"},children:Y.map((function(e){return Object(h.jsx)(K,{skill:e},e)}))})]}),Object(h.jsxs)(x.a,{sm:!0,children:[Object(h.jsx)("h4",{children:"Back-end Skills"}),Object(h.jsx)("ul",{style:{paddingLeft:"initial"},children:X.map((function(e){return Object(h.jsx)(K,{skill:e},e)}))})]}),Object(h.jsxs)(x.a,{sm:!0,children:[Object(h.jsx)("h4",{children:"Other Skills "}),Object(h.jsx)("ul",{style:{paddingLeft:"initial"},children:Z.map((function(e){return Object(h.jsx)(K,{skill:e},e)}))})]})]})})]})},ae=a(11),ie=a(8),ne=a.n(ie),re=a(20),se=a(117),ce=a(82),oe=(a(459),{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeOut"}}}),le=function(){var e=Object(se.a)(),t=e.register,a=e.handleSubmit,i=e.reset,n=e.formState.errors,r=function(){var e=Object(re.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.name,t.email,t.subject,t.message;try{i(),Object(ce.b)("Contact information has been submitted !",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"})}catch(a){console.log(a)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(v.a.div,{className:"ContactForm d-flex justify-content-center m-5",variants:oe,initial:"hidden",animate:"visible",exit:"exit",children:Object(h.jsx)("div",{className:"container ",children:Object(h.jsx)("div",{className:"row",style:{backgroundColor:"rgb(0 0 0 / 15%)"},children:Object(h.jsxs)("div",{className:"col-lg-12 text-center contact-form-container",children:[Object(h.jsx)("div",{className:"contactForm",children:Object(h.jsxs)("form",{id:"contact-form",onSubmit:a(r),noValidate:!0,children:[Object(h.jsxs)("div",{className:"row formRow ",style:{margin:"0.5rem"},children:[Object(h.jsxs)("div",{className:"col-lg-6",children:[Object(h.jsx)("input",Object(ae.a)(Object(ae.a)({type:"text",name:"name"},t("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}})),{},{className:"form-control formInput",placeholder:"Name"})),n.name&&Object(h.jsx)("span",{className:"errorMessage",children:n.name.message})]}),Object(h.jsxs)("div",{className:"col-lg-6",children:[Object(h.jsx)("input",Object(ae.a)(Object(ae.a)({type:"email",name:"email"},t("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})),{},{className:"form-control formInput",placeholder:"Email address"})),n.email&&Object(h.jsx)("span",{className:"errorMessage",children:"Please enter a valid email address"})]})]}),Object(h.jsx)("div",{className:"row formRow",style:{margin:"0.5rem"},children:Object(h.jsxs)("div",{className:"col-lg-12",children:[Object(h.jsx)("input",Object(ae.a)(Object(ae.a)({type:"text",name:"subject"},t("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}})),{},{className:"form-control formInput",placeholder:"Subject"})),n.subject&&Object(h.jsx)("span",{className:"errorMessage",children:n.subject.message})]})}),Object(h.jsx)("div",{className:"row formRow",style:{margin:"0.5rem"},children:Object(h.jsxs)("div",{className:"col-lg-12",children:[Object(h.jsx)("textarea",Object(ae.a)(Object(ae.a)({rows:3,name:"message"},t("message",{required:!0})),{},{className:"form-control formInput",placeholder:"Message"})),n.message&&Object(h.jsx)("span",{className:"errorMessage",children:"Please enter a message"})]})}),Object(h.jsx)("button",{className:"submit-btn",type:"submit ",style:{borderRadius:"0.5rem",padding:".5rem",marginBottom:"1rem"},children:"Submit"})]})}),Object(h.jsx)(ce.a,{})]})})})})},de=(a(460),a(468));var me=function(){var e=Object(c.g)();return Object(h.jsx)(p.a,{fluid:!0,className:"pt-4 min-vh-100 content",children:Object(h.jsxs)(g.a,{className:"row-height",children:[Object(h.jsx)(x.a,{lg:3,className:"sidebar",children:Object(h.jsx)(w,{})}),Object(h.jsx)(x.a,{lg:9,className:"main-component",children:Object(h.jsxs)("div",{className:"content-custom-styles py-3 px-2 rounded hover-shadow",children:[Object(h.jsx)(C,{}),Object(h.jsx)(de.a,{exitBeforeEnter:!0,children:Object(h.jsxs)(c.d,{location:e,children:[Object(h.jsx)(c.b,{exact:!0,path:"/content",children:Object(h.jsx)(M,{})}),Object(h.jsx)(c.b,{path:"/content/portfolio",children:Object(h.jsx)(U,{})}),Object(h.jsx)(c.b,{path:"/content/resume",children:Object(h.jsx)(te,{})}),Object(h.jsx)(c.b,{path:"/content/contact",children:Object(h.jsx)(le,{})}),Object(h.jsx)(c.b,{children:Object(h.jsx)(c.a,{to:!0,path:"/content"})})]},e.key)})]})})]})})};var je=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)(c.d,{children:[Object(h.jsx)(c.b,{path:"/",exact:!0,children:Object(h.jsx)(u,{})}),Object(h.jsx)(c.b,{path:"/content",children:Object(h.jsx)(me,{})}),Object(h.jsx)(c.b,{children:Object(h.jsx)(c.a,{to:!0,path:"/"})})]})})};r.a.render(Object(h.jsx)(je,{}),document.getElementById("root"))}},[[461,1,2]]]);
//# sourceMappingURL=main.f13c0516.chunk.js.map