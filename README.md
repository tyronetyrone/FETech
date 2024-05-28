# web前端的前世今生
----前端技术慢聊
## 技术图谱
![大前端](https://github.com/tyronetyrone/FETech/blob/main/FE.webp "FE")
[技能树1](https://github.com/xixileng/fe-knowledge)
[技能树2](https://f2e.tech/)

## 历史时间线
1990年12月-1991年，第一个Web浏览器的诞生。WorldWideWeb。蒂姆·伯纳斯-李。WWW（World Wide Web）的诞生，这标志着前端技术的开始。
使用静态HTML制作。
古早页面例子
1990年，搜索引擎的原型出现，Archie是第一代搜索引擎的原型。
1993年，Common Gateway Interface（CGI）协议诞生，可使用后端语言动态生成页面。此时主要使用Perl语言。注意，此时的网速还处于拨号上网阶段，速度大概20k左右，还没有步入宽带时代。打开浏览器的网络设置可以调控网速，回溯时光。由于现代web页面普遍比较臃肿（why？技术不熟练，负优化，卷），所以体验极差。
1994年，网景公司（Netscape）发布了Navigator浏览器0.9版。第一个比较成熟的且流行的web浏览器，一度占有超过90%的市场份额。
1994年哈坤·利和伯特·波斯（Bert Bos）开始设计CSS
1994年10月，W3C（World Wide Web Consortium，即万维网联盟）成立。后续本组织将持续发布Web相关标准
1995年，微软公司操作系统windows95发布
1995年8月，微软公司IE 1.0发布。开启第一次浏览器战争（IE vs Netscape，1995-1998）
此时可以插入搜索引擎与SEO的介绍
1995年，PHP诞生，可以取代Perl等进行更好的动态页面生成。热梗：PHP是世界上最好的语言。这个语言充满争议，虽然学习成本很低，易于使用，但是掌握之后会发现里面有很多设计问题。就是这样一个矛盾的语言。
1995年，javascript（ECMAScript）诞生。也许因为此时Java语言很火，所以新诞生的语言叫JavaScript。有趣的是，Javascript发明者很讨厌Java，布兰登·艾克(Brendan Eich)只用了10天就开发完了javascript语言，被称为c语言和self语言一夜情的产物JavaScript设计思路
```text
（1）借鉴C语言的基本语法；
（2）借鉴Java语言的数据类型和内存管理；
（3）借鉴Scheme语言，将函数提升到"第一等公民"（first class）的地位；
（4）借鉴Self语言，使用基于原型（prototype）的继承机制。
```

Javascript诞生之初的两大问题。特性很少，性能很拉。
继续说第一次浏览器战争。
第一次浏览器战争以微软公司的IE浏览器胜利结束。可是说是绝地翻盘，据传是用了反编译抄袭和捆绑推广的方式。战争导致了浏览器的野蛮开发。尽管有标准（ECMA-262，JavaScript规范文档（ECMA262速度快）与（W3C，HTML与CSS的规范文档），微软却没有照规范来实现JavaScript、HTML与CSS，真实讽刺。而且微软还通过捆绑windows操作系统的方式推广IE浏览器。在当时即使网景已经占据了90%以上的市场份额，最终还是完败于IE。第一次浏览器战争我们应学到，技术只是工具，技术本身并不重要。
第一次浏览器战争的结果。Netscape公司被美国在线收购。浏览器兼容性问题出现。网景开放了源码，衍生出了Mozilla，衍生出了Firefox浏览器
1997年6月，ECMA-262第一版（ECMAScript1.0）发布。JavaScript的基础标准都在这里，如原型链，闭包等
1998年6月，ECMA-262第二版（ECMAScript2.0）发布
1998年，微软公司windows98发布
1999年，ECMA-262第三版（ECMAScript3.0）发布，开始普及,简称ES3
【图形学】1999年，W3C推出了SVG格式。
2003年，Netscape Navigator网景浏览器团队解散，开放了源代码，网景浏览器寄。Mozilla 基金会浏览器Phoenix诞生，后更名为Firebird，后更名为Firefox。其核心是网景浏览器
2003年，苹果公司的产品不再使用IE浏览器，他们发布了自己的浏览器Safari
第二次浏览器战争（IE vs Firefox）
2004年11 月，Firefox1.0浏览器公开发布，开始抢夺几乎完全由微软IE占据的市场。
链接【当时《纽约时报》的其中一版】
【图形学】2004年，canvas出现
2005年，ajax走进大众视野，开始流行。ajax是一种新时代的网页通信方式，在此之前，如上面所讲，网页从静态网页开始，慢慢走向动态网页，但是即使是动态网页，每次更新还是需要向服务器发送一次http请求，如果需要频繁更新的话，叠加当时的2G网速，如果现在穿越回去使用的话体验将会一言难尽，但在当时，因为没有体验过快，可能也不觉得很卡，慢是应该的。
2006年8月，jQuery诞生，第一批诞生的JavaScript库/框架中最火的一个。解决了诸多问题。前端开发和后端开发的思路是不同的。
2006年10月，Firefox2.0发布
2008年1月，W3C发布HTML5标准
2008年，苹果公司开源了Safari浏览器的内核Webkit，被google看上了。
第三次浏览器战争（Chrome vs IE）
2008年9月2日，Chrome第一版发布。Chrome是一个很重要的软件，其核心大名鼎鼎V8引擎为后来NodeJS的出现奠定了基础。
2009年12月，ES5发布
2009年，Nodejs诞生，简称node。使用CommonJS规范进行模块化开发。Node是一项很重要的技术，它的出现为未来10年前端的技术发展奠定了基础。未来如webpack等打包技术就用到了node，node的npm模块和生态更是极其重要，有了node，angular react和vue等框架还可以在本地启动测试服务器，使前端开发的效率提升了一个维度。Nodejs还可以用来编写后端服务器代码，很多游戏服务器和网站服务器都是使用node编写的。
【NodeJS技术讲解】
2009年，AngularJS诞生，简称angular。angular的特性是双向数据绑定和组件化
2011年6月，W3C发布CSS3标准。包含媒体查询，rem等技术。需要注意的是web页面都是基于浏览器的，所以当技术标准发布之后，浏览器厂商还要根据标准进行开发和适配。并不是说标准发布了，里面的技术就可以使用，标准只是规定了某些东西应该以一个什么样的形式运行和展现，实际实现还是需要依靠浏览器厂商的开发。可以理解为标准只是一个产品文档。查询web技术是否可以使用 W3C标准
【图形学】2011年，WebGL1.0发布
2012年3月18日，Chrome市场份额开始超过IE
2012年，webpack发布，前端项目模块化和工程化开始流行。
2013年4月，Electron发布，一个成熟且流行的javascript桌面应用框架
2013年5月29日，在JavaScript开发者大会上，Jordan Walke首次对外公开了ReactJS。（据说react原型创建于2011年7月11日，叫FaxJs）。react有三大特性，组件化的思想，虚拟Dom的设计，单项数据流
2014年2月，尤雨溪发布了VueJS，简称vue。Vue我认为是融合angular和react的设计，拥有双向数据绑定，虚拟dom和组件化
2015年6月，ES6发布。一些使用至今的重要特性发布，如箭头函数，解构赋值等。同时好像也就是从ES6发布开始，JavaScript逐渐变成了全世界最流行的开发语言，是的，从最垃圾的语言变成了最火热的语言。在我的印象里大概从2016年争议开始到2020年前后确立统治地位。也大概从这时候开始，出现了大量的岗位缺口加上大量的培训机构。
2016年，开始进入三大框架群雄割据时代。我们可以看到angular虽然发布最早，但是最终确是全球市场最小的一个框架，大部分市场主要由react和vue占据
2016年正是移动互联网厮杀火热的时间，战争也延续到了移动端。React的ReactNative简称RN， Vue的Weex，Angular是ionic。
2017年1月，腾讯微信发布了微信小程序，开启了小程序时代，现在是个应用都能整出一个小程序分支。
2019年12月，Flutter正式发布，一个比较成熟且流行的Hybrid混合应用框架。
web应用通常分为三种。Native App、Web App 、Hybrid App。小程序可以算是Hybrid App的分支，而我们的项目cash club这种使用unity引擎打包的应用则属于Native App
虽然业内普遍把unity开发称为客户端开发，前端开发一般指web前端。甚至有一种风气觉得unity客户端不属于前端开发。但是我不太认可，我觉得unity客户端开发和web开发同属大前端范畴，都可以称为前端开发工程师，都是软件工程师。
2019年，W3C发布WebAssembly正式标准，WebAssembly成为继HTML、CSS、JavaScript之后第4种Web语言。（第四板斧来了）
2020年前后出现了两种类型的工具，低代码概念工具和零代码概念工具。低代码工具可以描述为给你一些按钮工具，你通过自己的组合来设计一个页面，工具自动帮你把这个页面的代码生成。零代码概念则是需要一个原始设计图，可以是产品经理给出的页面原型图，也可以是设计师给出的页面设计图，工具根据原型图或设计图生成网页代码。
【低代码演示】
【零代码演示，蓝湖】
【conva演示】


2022年11月，OpenAI的ChatGPT-3.5发布，开启了AI搜索时代。在此之前互联网工具经历了长期的搜索引擎时代，然后经历了很短期的细分搜索时代。
到目前2024年，应该是还是搜索引擎和AI机器人共存的时代，指两种工具共用，AI搜索还不成熟。

## 知识点
### HTML5
### CSS3
### ES6+
### Node20
### WebAssembly
### Angular18
### React18
### Redux
### Vue3
### Vuex
### 工程化工具
### Babel
### Webpack
### Vite
### 自动化测试
### 图形化&WebGL&Canvas&第三方库
### D3.js
### Three.js
### Pixijs
### Konva.js
### Electron30
### Chrome插件&其他浏览器插件
### 微信小程序&其他小程序
### Unity
### Flutter
### 其他设备&路由器&电视屏&嵌入式设备
## 我认为不重要的知识点
### TypeScript
### SASS&LESS


## 练习题
### 事件循环
```javascript
// 2018字节跳动经典面试题
async function async1() {
console.log("async1 start");
await async2();
console.log("async1 end");
}
async function async2() {
console.log("async2");
}
console.log("script start");
setTimeout(function() {
console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
console.log("promise1");
resolve();
}).then(function() {
console.log("promise2");
});
console.log('script end')
```


## 后记



### 未整理




