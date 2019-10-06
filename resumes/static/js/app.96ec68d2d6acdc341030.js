webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-5de585fe",null);n.exports=r.exports},42:function(n,e,t){t(85);var r=t(14)(t(49),t(93),"data-v-28bca4c7",null);n.exports=r.exports},43:function(n,e,t){t(88);var r=t(14)(t(46),t(96),"data-v-ef37aee2",null);n.exports=r.exports},44:function(n,e,t){t(86);var r=t(14)(t(47),t(94),"data-v-4f6ec624",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 开始...\n* 大家好，我是年少-有伟\n* 毕业了，好多公司都在招聘，你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"魏小伟\n----\nJava软件工程师，2020应届毕业生，现在在找工作。有良好的文档编写和代码书写\n规范，能独立解决问题、百折不挠、细节控。     \n\n技能技术\n----\n  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis\n  - **前端**: VueJs、Vuetify、LayUI、jQuery UI\n  - **数据库**: MySQL、SQLServer、Oracle、redis\n  - **中间件**: Feign（Dubbo）、Eureka(Zookeeper)、Zuul、Rubbitmq、Nginx\n  - **OS**: Linux、Windows\n  - **Others**: Git、Maven、XMind、VS、VSCode、IDEA、VMware\n\n实习经历\n----\n1. [天津江林轩明科技有限公司](http://www.likuso.com/city4/432498.html)\n\n链接\n----\n* [个人技术博客](https://githubwxw.github.io)\n\n联系我\n----\n* 联系QQ：**1550518923** | 微信：**1550518923**\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/GitHubWxw/resume)，\n    打造你自己的简历！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return 0 n.length}).reduce(function(n,e){return n+e},0),a="u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" " ",this.currentstyle+="c," \n"="==r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case"" 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyshowresume:function(){var n="this;return" new o.a(function(e,t){var r="n.fullMarkdown.length,o=n.interval;!function" t(){if(n.currentmarkdown.length<r){n.currentmarkdown="n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];" n.$refs.resumeeditor.gobottom()}),settimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";object.defineproperty(e,"__esmodule",{value:!0});var 开始...\n* 大家好，我是年少-有伟\n* 毕业了，好多公司都在招聘，你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n* \n\n * 首先给所有元素加上过渡效果 \n* {\n transition: all .3s;\n}\n 白色背景太单调了，我们来点背景 \nhtml color: rgb(222,222,222); background: rgb(0,43,54);\n}\n 文字离边框太近了 \n.styleeditor padding: .5em;\n border: 1px solid;\n margin: overflow: auto;\n width: 45vw; height: 90vh;\n}\n 代码高亮 \n.token.selector{ rgb(133,153,0); }\n.token.property{ rgb(187,137,0); }\n.token.punctuation{ yellow; }\n.token.function{ rgb(42,161,152); }\n\n 加点 3d 效果呗 \nhtml{\n perspective: 1000px;\n}\n.styleeditor position: fixed; left: 0; top: 0;\n -webkit-transition: none;\n -webkit-transform: rotatey(10deg) translatez(-100px) ;\n transform: ;\n}\n\n 接下来我给自己准备一个编辑器 \n.resumeeditor{\n right: .5em; 48vw; 90vh;\n white; #222;\n auto;\n}\n 好了，我开始写简历了 \n\n\n","\n 这个简历好像差点什么\n 对了，这是 markdown 格式的，我需要变成对 hr 更友好的格式\n 简单，用开源工具翻译成 html 就行了\n \n",'\n 再对 加点样式 2em;\n}\n.resumeeditor h2{\n display: inline-block;\n border-bottom: 1em .5em;\n}\n.resumeeditor ul,.resumeeditor ol{\n list-style: none;\n}\n.resumeeditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"魏小伟\n----\nJava软件工程师，2020应届毕业生，现在在找工作。有良好的文档编写和代码书写\n规范，能独立解决问题、百折不挠、细节控。     \n\n技能技术\n----\n  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis\n  - **前端**: VueJs、Vuetify、LayUI、jQuery UI\n  - **数据库**: MySQL、SQLServer、Oracle、redis\n  - **中间件**: Feign（Dubbo）、Eureka(Zookeeper)、Zuul、Rubbitmq、Nginx\n  - **OS**: Linux、Windows\n  - **Others**: Git、Maven、XMind、VS、VSCode、IDEA、VMware\n\n实习经历\n----\n1. [天津江林轩明科技有限公司](http://www.likuso.com/city4/432498.html)\n\n链接\n----\n* [技术博客](https://githubwxw.github.io)\n\n联系我\n----\n* 联系QQ：**1550518923** | 微信：**1550518923**\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/GitHubWxw/resume)，\n    打造你自己的简历！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a="u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" " ",this.currentstyle+="c," \n"="==r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case"" 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyshowresume:function(){var n="this;return" new o.a(function(e,t){var r="n.fullMarkdown.length,o=n.interval;!function" t(){if(n.currentmarkdown.length<r){n.currentmarkdown="n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];" n.$refs.resumeeditor.gobottom()}),settimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";object.defineproperty(e,"__esmodule",{value:!0});var this.enablehtml?o()(this.markdown):this.markdown}},methods:{gobottom:function(){this.$refs.container.scrolltop="1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){" use" o.a.highlight(this.code,o.a.languages.css)},codeinstyletag:function(){return"<style>"+this.code+""}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),u=t.n(s),a=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(a>500?i.a:u.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.96ec68d2d6acdc341030.js.map</=n}).map(function(n){return></=n}).map(function(n){return>