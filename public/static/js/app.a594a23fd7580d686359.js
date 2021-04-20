webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-2df95543",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-288975d1",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),c=t(42),l=t.n(c),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:m.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:["/*\n * Inspired by http://strml.net/\n *\n * Hi, I'm Ziqi.\n *\n * I am now presenting my resume to you.\n */\n\n/* First, let's add the transition effect. */\n{\n  transition: all .3s;\n}\n/* White background is so boring, thus make some different. */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* Text is too close to border. */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* Highlight the code */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* Add some 3D effect */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* Next, create an editor. */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* Okay, it's time to write my resume. */\n\n\n","\n/* Seems something strange in my resume.\n * Yup, my resume is in Markdown format. I need to make my resume more friendly to HR.\n * Here use the open soucre tool to convert my resume to HTML.\n */\n",'\n/* add some styles for HTML */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"Ziqi Huang\n----\n\nSoftware Developer\n\nEmail: [yuyan1991@gmail.com(preferred)](mailto:yuyan1991@gmail.com)\nTelephone: +852-66041524\n\nTechnology Stack\n----\n\n* Git\n* Java\n* Spring\n* RDBMS\n* RESTful API\n* MongoDB\n* Redis\n* Docker\n* JavaScript\n* HTML\n* CSS\n* React\n* Python\n* C++\n\nWorking Experience\n----\n\n[China Construction Bank Asia](https://www.asia.ccb.com/) (Protiviti) (December 2019 - Present)\n\n*Senior Analyst Programmer*\n1. Collaborate with the CCBA user to confirm the project requirement\n2. Develop and maintain P2-Gateway, STM and P2-OTP Project:\n* Frontend: design UI for P2-OTP and STM\n* Backend: add adapters in P2-Gateway and explore the RESTful API to ECPWEB project and STM project\n3. Assist CCBA users to perform UAT and PROD for ECPWEB project and STM project\n4. Collaborate with DBA team, TRM team, UNIX team and Change Control Team to build and deploy system for UAT and PROD\n5. Develop IPO Revamp Project:\n* Frontend: design UI for IPO Pages with CCB’s P2 framework\n* Backend: construct the IPO Revamp project with CCB’s P8 framework and explore the API to ECPWEB project\n\n*Projects*\n\n* ECPWEB\n* P2-OTP\n* STM\n* P2-Gateway\n* IPO Revamp\n\n[Infinite Financial Solutions Ltd](https://www.ifshk.com) (August 2015 - November 2019)\n\n*Analyst Programmer*\n\n1. Develop and maintain FinTech system for [Shanghai Commercial Bank](https://www.shacombank.com.hk/)\n2. Code, environment setup and deploy for FinTech system.\n3. Collaborate with developers, designers, UX designers and project managers in an agile team building responsive, cross-browser compatible and scalable web apps.\n\n\n*Projects*\n* [Faster Payment System](https://fps.hkicl.com.hk/eng/fps/index.php)(i.e FPS, 轉數快)\n* Wealth Management System\n* Insurance System\n\nEducation\n----\n\n[The Chinese University of Hong Kong](http://www.cuhk.edu.hk) 2014.09 - 2015.07 (Hong Kong)\n\n* Master Degree in Computer Science & Engineering\n\n[Sun Yat-sen University](http://www.sysu.edu.cn) 2010.09-2014.06 (Guangzhou, China)\n\n* Bachelor Degree in Computer Science\n\nLink\n----\n\n* [GitHub](https://github.com/yuyan1991)\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,c,l,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(c=this.currentStyle.length-u,l=r.substring(c,c+1)||" ",this.currentStyle+=l,"\n"===r.substring(c-1,c)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),c=t(42),l=t.n(c),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:m.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:["/*\n * Inspired by http://strml.net/\n *\n * Hi, I'm Ziqi.\n *\n * I am now presenting my resume to you.\n */\n\n/* First, let's add the transition effect. */\n{\n  transition: all .3s;\n}\n/* White background is so boring, thus make some different. */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* Text is too close border. */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* Need to adjust height. */\n.styleEditor {\n  height: 45vh;\n}\n/* Highlight the code */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* Add some 3D effect */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* Next, create an editor. */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* Okay, it's time to write my resume. */\n\n\n","\n/* Seems something strange in my resume.\n * Yup, my resume is in Markdown format. I need to make my resume more friendly to HR.\n * Here use the open soucre tool to convert my resume to HTML.\n */\n",'\n/* add some styles for HTML */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"Ziqi Huang\n----\n\nSoftware Developer\n\nEmail: [yuyan1991@gmail.com(preferred)](mailto:yuyan1991@gmail.com)\nTelephone: +852-66041524\n\nTechnology Stack\n----\n\n* Git\n* Java\n* Spring\n* RDBMS\n* RESTful API\n* MongoDB\n* Redis\n* Docker\n* JavaScript\n* HTML\n* CSS\n* React\n* Python\n* C++\n\nWorking Experience\n----\n\n[China Construction Bank Asia](https://www.asia.ccb.com/) (Protiviti) (December 2019 - Present)\n\n*Senior Analyst Programmer*\n1. Collaborate with the CCBA user to confirm the project requirement\n2. Develop and maintain P2-Gateway, STM and P2-OTP Project:\n* Frontend: design UI for P2-OTP and STM\n* Backend: add adapters in P2-Gateway and explore the RESTful API to ECPWEB project and STM project\n3. Assist CCBA users to perform UAT and PROD for ECPWEB project and STM project\n4. Collaborate with DBA team, TRM team, UNIX team and Change Control Team to build and deploy system for UAT and PROD\n5. Develop IPO Revamp Project:\n* Frontend: design UI for IPO Pages with CCB’s P2 framework\n* Backend: construct the IPO Revamp project with CCB’s P8 framework and explore the API to ECPWEB project\n\n*Projects*\n\n* ECPWEB\n* P2-OTP\n* STM\n* P2-Gateway\n* IPO Revamp\n\n[Infinite Financial Solutions Ltd](https://www.ifshk.com) (August 2015 - November 2019)\n\n*Analyst Programmer*\n\n1. Develop and maintain FinTech system for [Shanghai Commercial Bank](https://www.shacombank.com.hk/)\n2. Code, environment setup and deploy for FinTech system.\n3. Collaborate with developers, designers, UX designers and project managers in an agile team building responsive, cross-browser compatible and scalable web apps.\n\n\n*Projects*\n* [Faster Payment System](https://fps.hkicl.com.hk/eng/fps/index.php)(i.e FPS, 轉數快)\n* Wealth Management System\n* Insurance System\n\nEducation\n----\n\n[The Chinese University of Hong Kong](http://www.cuhk.edu.hk) 2014.09 - 2015.07 (Hong Kong)\n\n* Master Degree in Computer Science & Engineering\n\n[Sun Yat-sen University](http://www.sysu.edu.cn) 2010.09-2014.06 (Guangzhou, China)\n\n* Bachelor Degree in Computer Science\n\nLink\n----\n\n* [GitHub](https://github.com/yuyan1991)\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,c,l,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(c=this.currentStyle.length-u,l=r.substring(c,c+1)||" ",this.currentStyle+=l,"\n"===r.substring(c-1,c)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.a594a23fd7580d686359.js.map