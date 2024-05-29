# web前端的前世今生
----前端技术慢聊
## 技术图谱
![大前端](https://github.com/tyronetyrone/FETech/blob/main/img/FE.webp "FE")  
[技能树1](https://github.com/xixileng/fe-knowledge)  
[技能树2](https://f2e.tech/)  

## 历史时间线
1990年12月-1991年，第一个Web浏览器的诞生。WorldWideWeb。蒂姆·伯纳斯-李。WWW（World Wide Web）的诞生，这标志着前端技术的开始。  
使用静态HTML制作。  
古早页面例子  
1990年，搜索引擎的原型出现，Archie是第一代搜索引擎的原型。  
1993年，Common Gateway Interface（CGI）协议诞生，可使用后端语言动态生成页面。此时主要使用Perl语言。注意，此时的网速还处于拨号上网阶段，速度大概20k左右，还没有步入宽带时代。打开浏览器的网络设置可以调控网速，回溯时光。由于现代web页面普遍比较臃肿（why？技术不熟练，负优化，卷），所以体验极差。  
1993年，lua诞生于巴西。用于石油开采系统。
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
### 硬件

### 网络

### CDN与云存储
### HTML5
[标准文档](https://html.spec.whatwg.org/multipage/)  
- DOM(Document Object Model)渲染机制  
浏览器引擎将HTML文档解析成DOM树，然后显示到屏幕上的过程  
这里只讲简单原理，实现参考V8  
- DOM事件流  
dom事件分为三个阶段：捕获阶段、目标阶段和冒泡阶段  
什么是事件，我的理解是用户通过浏览器媒介和文档进行某种交互的瞬间  
- 事件委托  

- dom绑定事件的三种方式  
1. 在html标签中直接绑定  
```html
<button onclick="alert('Hello, world!')">Click me</button>
<!--只能绑定一个-->
```
2. 在js中获取到相应的dom元素后绑定  
```js
var button = document.getElementById('myButton');
button.onclick = function() {
  alert('Hello, world!');
};
// 还是只能绑定一个
```
3. 在js中使用addEventListene实现绑定  
```js
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Hello, world!');
}, false);
// 可以绑定多个
```
### CSS3
[标准文档](https://www.w3.org/TR/2018/REC-css-ui-3-20180621/)  
- BFC
### ES6+
[标准文档](https://tc39.es/ecma262/)  
- 事件循环标准写在html标准中  
[事件循环标准](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)  
- Promise机制  
[Promise A+ 英文](https://promisesaplus.com/)  
[Promise A+ 中文](https://tsejx.github.io/javascript-guidebook/standard-built-in-objects/control-abstraction-objects/promise-standard/)  

- javascript的数据类型  
基础数据类型  
Number  
String  
Boolean  
Null  
Undefined  
BigInt  
Symbol  
引用数据类型  
Object（包括Function和Array等，本质都是Object，都是继承自Object）  
- 关于类型检测  
1. typeof和instanceof  
typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值  
instanceof可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型  
typeof可以判断除null之外的基础数据类型，引用类型只能判断function  
【结论】都不好用，建议不用  
```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```
2. Object.prototype.toString.call()  
建议使用这个。Object.prototype.toString需要加一个call是因为有些函数自己重写了toString方法，可能无法达成目标。  
```js
//Object.prototype.toString.call()方法
console.log(typeof Object.prototype.toString.call(undefined)); // string
console.log(Object.prototype.toString.call(undefined) === '[object Undefined]'); // true
//基础数据类型
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(123));    // [object Number]
console.log(Object.prototype.toString.call('123')) ;   // [object String]
console.log(Object.prototype.toString.call(/123/g)) ;   // [object RegExp]
console.log(Object.prototype.toString.call(Symbol())) ;   // [object String]
console.log(Object.prototype.toString.call(BigInt(9007199254740991))) ;   // [object BigInt]
console.log(Object.prototype.toString.call(9007199254740991n)) ;   // [object BigInt]
console.log(Object.prototype.toString.call(1n)) ;   // [object BigInt]
//引用数据类型
console.log(Object.prototype.toString.call({})) ;   // [object Object]
console.log(Object.prototype.toString.call(new Object())) ;   // [object Object]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call(new RegExp())); // [object RegExp]
console.log(Object.prototype.toString.call(new Array(0))); // [object Array]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(new Function())); // [object Function]
console.log(Object.prototype.toString.call(new Set())); // [object Set]
console.log(Object.prototype.toString.call(new WeakSet())); // [object WeakSet]
console.log(Object.prototype.toString.call(new Map())); // [object Map]
console.log(Object.prototype.toString.call(new WeakMap())); // [object WeakMap]
console.log(Object.prototype.toString.call(new Error())); // [object Error]
console.log(Object.prototype.toString.call(document)); // [object HTMLDocument]
console.log(Object.prototype.toString.call(window)); // [object Window]

```

- 模拟实现JSON.stringify()
```js
function easyJSONStringify(data) {
  let type = typeof data;
  if (type !== 'object') { // 基础数据类型
    let result = data;
    if (Number.isNaN(data) || data === Infinity) {
      result = 'null';
    } else if (
      type === 'function' ||
      type === 'undefined' ||
      type === 'symbol'
    ) {
      return undefined;
    } else if (type === 'string') {
      result = '"' + data + '"';
    }
    return String(result);
  } else { // type === 'object' 引用数据类型
    if (data === null) { // 考虑 typeof null === 'object'
      return 'null';
    } else if (data.toJSON && typeof data.toJSON === 'function') { // Date
      return easyJSONStringify(data.toJSON())
    } else if (Array.isArray(data)) {
      let result = [];
      data.forEach((item, index) => {
        let typeItem = typeof item;
        if (
          typeItem === 'function' ||
          typeItem === 'undefined' ||
          typeItem === 'symbol'
        ) {
          result[index] =  'null';
        } else {
          result[index] = easyJSONStringify(item);
        }
      });
      return (`[${result}]`).replace(/'/g, '\"');
    } else { // object
      let result = [];
      Object.keys(data).forEach((item, index) => {
        result.push('"' + item + '":' + easyJSONStringify(data[item]));
      });
      return (`{${result}}`).replace(/'/g, '\"');
    }
  }
}

let de = [1, undefined, NaN, [1, {a: 1, "b": {c : {1: 1, "1": '2'}}}], 3]

console.log(JSON.stringify(de))    //[1,null,null,[1,{"a":1,"b":{"c":{"1":"2"}}}],3]
console.log(easyJSONStringify(de)) //[1,null,null,[1,{"a":1,"b":{"c":{"1":"2"}}}],3]

```
- ===的机制  
[抽象比较算法](https://tc39.es/ecma262/#sec-isstrictlyequal)

- call、apply 或 bind

- 箭头函数和普通函数的区别
1. this 关键字的绑定：
在普通函数中，this关键字的值取决于函数如何被调用。它可能是全局对象（在非严格模式下），调用函数的对象，或者任何被 apply、call 或 bind 方法指定的对象。  
在箭头函数中，this关键字被固定绑定到它被定义时的上下文。换句话说，箭头函数不会创建自己的 this 上下文，所以 this 总是引用外层的 this 值。  
2. 构造函数：
普通函数可以用作构造函数，可以通过 new 关键字来创建新的对象实例。  
箭头函数不能用作构造函数，如果你试图这样做，JavaScript 会抛出一个错误。  
3. arguments 对象：
在普通函数中，你可以使用特殊的 arguments 对象来访问所有传递给函数的参数，无论这个函数预期会接收多少参数。  
箭头函数没有自己的 arguments 对象。然而，它们可以访问在它们的作用域链上的 arguments 对象。  
4. yield 关键字：
普通函数可以是 Generator 函数，可以使用 yield 关键字。  
箭头函数不能是 Generator 函数，不能使用 yield 关键字。  

- 防抖  
[动画](https://zhuanlan.zhihu.com/p/266667248)  
[lodash防抖](https://www.lodashjs.com/docs/lodash.debounce)
```js
// 防抖的思想是：如果短时间内大量触发同一事件，那么只会执行一次函数。
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
window.addEventListener('resize', debounce(function () {
  console.log('Window size has changed!');
  // 其他逻辑
}, 1000));

// 执行一次再防抖
function debounce_once(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      func.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
  };
}

let searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('input', debounce_once(function () {
  console.log('Search: ' + this.value);
  // 其他逻辑
}, 1000));
let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', debounce_once(function () {
  console.log('Submit button clicked!');
  // 其他逻辑
}, 1000));
```
- 节流
```js
// 节流的思想是：如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。
function throttle(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    };
}

window.addEventListener('scroll', throttle(function () {
  console.log('Window is scrolling!');
  // 其他逻辑
}, 1000));
```

### V8
[标准文档](https://v8.js.cn/docs/)  
- 事件循环  
- 垃圾回收  
- new关键字
- 正则表达式

### Node20
### WebAssembly
[标准文档](https://webassembly.github.io/spec/core/)  
### Angular18
### React18
### Redux
### Vue3
### Vuex
### 常用算法
- 10个排序
- 树的深度优先遍历（DFS）
- 树的广度优先遍历（BFS）
- 二分查找
- 动态规划
### 常用代码
- 发布订阅
- 数据检测
- 简易深拷贝
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
![js事件循环](https://github.com/tyronetyrone/FETech/blob/main/img/JSEL.png)  
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
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
* */ 
// 很不错的题，对于不知道的有点难，对于理解的又有点简单
```
### 箭头函数
```js
'use strict'
let o={
  fn: () => {
    console.log(this)
  }
};
o.fn() // window
let f=o.fn;
f() // window

let p={
  fn: function() {
    console.log(this)
  }
};
p.fn() // p
let f2=p.fn;
f2() // 严格模式undefined，非严格模式window
```


## 后记

## 参考资料
《高等数学》《线性代数》《近世代数》
《{x}程序设计》
《计算机组成原理》  
《计算机网络》《TCP/IP详解》
《操作系统》
《数据结构与算法》
《数据库》
《编译原理》
《几何学》
《密码学》
《拓扑学》


### 未整理


https://what-is-fe.gitee.io/
工作内容博客笔记
1.vue form验证及清除验证文字
a.this.$refs.form.clearValidate('portraitLabel')
b.123
portraitLabel: [
{required: true, message: '请选择画像标签', trigger: 'blur'},
{
validator: (rule, value, callback) => {
callback()promi
}
}
c.    ]
2.输入框回车换行问题
3.多条件筛选
a.
4.闭包防抖踩坑


5.konva图表
6.axios中断请求

知识点
1.有没有遇到过console报错行数对不上的问题
2.diff算法
3.可编程管线技术
4.闭包
a.var preorderTraversal = function(root) {
let res=[];
const dfs=function(root){
if(root===null)return ;
//先序遍历所以从父节点开始
res.push(root.val);
//递归左子树
dfs(root.left);
//递归右子树
dfs(root.right);
}
//只使用一个参数 使用闭包进行存储结果
dfs(root);
return res;
};



5.clearTimeout
6.Same-value-zero equality算法
7.var
8.Array = arr.flat([depth]);
9.深度优先遍历和广度优先遍历，递归
10.暂时性死区
11.react生命周期各阶段参数
12.cookieParser源码
13.浏览器缓存
14.http缓存
15.call 和 apply 手写实现
16.valueOf
17.水平垂直居中https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/92
18.transform，translate，translate3d
19.连续赋值
20.stringify源码
21.JavaScript Proxy
22.JavaScript继承
23.webpack热更新
24.函数科里化
25.原型与原型链
●prototype
●__proto__
●[[prototype]]
26.函数 箭头函数，同步和异步
27.形参 匿名函数 xx函数
28.形参使用扩展操作符 扩展运算符
29.window
30.模块

33.对象字面量
34.JavaScript堆和栈
35.垃圾回收机制
a.https://segmentfault.com/a/1190000025129635
36.MutationObserver 前端回溯
37.cookieparser
38.浏览器cookie 前端能干什么  后端能干什么
39.原型方法 实例方法 直接方法 静态方法  static
40.promise链式调用原理  源码
41.setState都做了什么事  在什么阶段更新state  源码
43.webpack热更新
44.canvas详细
45.h5新特性 video audio等
46.vue3.0有什么兼容问题
47.const let原理 const为什么能修改对象深层属性
48.跨域 后台设置 *  有什么问题 怎么处理
49.react setState深入  参数  原理
50.react高阶组件
51.redux
52.祖先和子孙通信  不影响中间组件
53.h5新特性
54.react生命周期， 优化
55.hooks
56.promise A+规范   Promises/A规范。promise详解
57.模拟promise.all
58.https://blog.csdn.net/weixin_42114053/article/details/109816842
59.CommonJS小组
60.惰性求值
61.懒加载
62.装饰器  Promise缓存
63.es5  es6  es7
64.说一下mvc mvvm的理解
65.代理  Proxy 和 反射
67.前端打包优化  监控 记录
68.react数据传递
69.react不加key进行dom操作的问题
70.事务
71.中间件
72.前端底层
73.快速迭代
74.lowcode
75.框架
76.类数组 转数组 的方法，好多方法
77.Dom节点是什么数据类型
78.XMLHttpRequest
79.fetch和axios的区别
80.浏览器调试单步
81.浏览器存储 深入
82.前端node
83.空数组，空对象核心原理，if判断为真，为什么
84.window和document
85.vue路由刷新跳转问题
86.浏览器事件
87.uncaught in promise
88.let result = await promise
89.拦截器，取消上个页面请求。防止多次请求，http缓存
90.流式布局
91.git大型操作 merge merge后的回退 解决冲突
92.何时能用import export  单html文件如何使用
94.占位符
95.python爬虫输出文件
96.正则 选中特定标签属性并包含值  双引号
97.webpack   webpack配置文件覆盖
98.调用函数加括号不加括号区别  具体  比如el-upload on-success
99.反向代理
100.数组的深拷贝，vue table数组深拷贝的坑
101.dom属性offset、offsetLeft等
102.事件委托机制是如何实现的
103.express多线程
104.node -g详细 安装到哪里了 全局安装 package-lock
105.单例模式
106.this
107.json规范
108.反射 依赖注入的反射
109.polyfill
110.弱引用，weakSet weakMap的用途
111.Set和Map的区别
112.高阶函数
113.装饰器
114.跨域的多种实现方式，反向代理是如何实现跨域的
115.浏览器缓存是如何工作的，举例从url获取一张图片
116.实现一个promiseAll
117.css让一个box不显示的方法说10种
118.浏览器时间循环和node事件循环。微任务嵌套和宏任务嵌套的工作顺序。js执行栈，以及js都有哪些东西（全部），如何阅读JavaScript源码，js引擎(V8)
119.浏览器工作机制原理
120.实现reduce
121.搞清this，怎么用this
122.预加载，预加载器
123.flex布局 容器 项目的一些默认值
124.数组和对象在内存中是如何保存的
美团优选面试
css权重 优先级
二分查找
diff算法原理 深入
时间戳转换成固定格式 类似moment
三大框架的区别
vue常用方法
双向绑定和单向绑定是如何实现的
node事件循环

去哪面试
事件委托机制
set和map的区别
express多线程

YY面试
new一个函数 都做了什么  详细一点 涉及内存  手写一个new
闭包详细 存在哪个内存 内存溢出解决办法
垃圾回收机制是怎么运作的 堆栈分别怎么回收
dom渲染机制和事件捕获机制

keep面试
装饰器
数组和方法在内存中是如何存储的

125.dom level 和 css level
126.前端polyfill
127.上下文是什么东西
128.AST语法书
129.如何调试js代码。IDE，浏览器
130.命名参数  形参  
131.arguments  this
132.实现一个函数可以[].functionxxx()   this获取
133.那个抽奖效果
134.不同的Object对象实例的一些常用效果，如String  Number
135.编译器和解释器
136.动态规划
137.状态压缩
138.拓扑排序
139.jsjavasctip常用数组，Es678901
141.JavaScript每次更新是如何上线并应用的？（编译器编译？浏览器编译？）
142.css模块化
143.es模块化 commonjs
144.ie和其他浏览器的区别
145.图片 音频 视频 都是什么数据格式 是怎么存储和读取的？
146.控制请求并发promise
147.dom树渲染顺序。回流和重绘
148.事件委托 target和currentTarget
149.双等号原理
150.非二叉树的深度广度优先遍历
151.zIndex的优缺点 什么属性会影响zIndex的生效和失效
152.flex布局
153.vue跨组件通信方法
154.sql的左右链接有什么优化的地方
155.打断点
156.文件格式到底是个什么东西txt pdf epub
157.迭代器和生成器
158.《从事件监听到状态管理》
159.ssh原理，什么ssh，公钥私钥干嘛的，到底是怎么连接的，多对多？
a.Permanently added the RSA host key for IP address '20.205.243.166' to the list of known hosts.
160.环境变量是什么
161.哪里能查看dom元素默认属性
162.parseInt等方法是如何使用内存的。
163.id与class  id能用吗  对性能有什么具体影响
164.v8问题：console什么时候报错什么时候不报错
165.window.getComputedStyle这种函数算什么函数，不同引擎不一样吗。是根据规范定义的吗，为什么所有浏览器都叫这个名字
166.不同对象的事件支持，比如document.addEventListener。canvas就不支持键盘事件等
167.addEventListener event都有哪些，属性都有哪些，比如mousedown点击事件的e.button
168.JS中document和window的区别
169.new Array发生了什么 为什么不fill 不能用map
a.let selectionHandles = new Array(8).fill(undefined).map(()=> {return {x: 0, y: 0}})
170.canvas原理 底层实现
171.浏览器中的process.nextTick 和node什么关系 对事件循环机制有什么影响
172.漏桶 令牌桶
173.面向切面编程



