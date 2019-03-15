# 技能
没有啥拿得出手的项目...
## Vue
vue使用了两年，能用vue做的基本上都能做。
+ 用过vux做过spa的项目,类似借贷宝的移动端web应用
+ 用了很久 element-ui 做后台管理,使用[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)做模板。模板用得很熟练，模板有的都会用，没有的也能加。
+ 用过nuxt做过[公司官网](http://www.minivictory.cn),这个花了两天，做的不是很好。
+ 看过几个vue开源稍微复杂点的spa项目的源码，阅读起来没有啥难度。
+ 在node_modules/vue里看了一下vue的源码。看的不是很深，深的地方自己工作或实践中暂时用不到。
+ 对vue项目的bug定位比较快
+ 自己也写了点低耦合的组件
+ 自己也能写自定义指令，vue的插件
::: tip 关于vue我有话要说
vue，vuex，vue-router。这些自然不用说。说明书背下来了。
以我现在得眼界来看，判断一个人对vue理解的怎么样，就看他是否知道slot是如何实现的，vue是怎么实现数据改变影响视图的（如何进行依赖收集，如何对data中的数组进行改造）
:::
## Javascript
其实写自己会什么我感觉很可耻，因为牛人实在太多。

我没有创造什么，以我的能力所及的，已经被人创造完了，而且比我造的好。

所以我就拿来看，拿来用。

后来我发现，其实我写了那么久js，最后就搞清楚了一个事情：

**其实编程语言都是一样的**。如果有人站在创造语言的层面说不一样，我也认同。但是我怕是很难站在这样的高度，来评判一个语言的可取与不可取。就拿js来说吧，我还没有搞清楚为啥这样设计。

但是使用一个语言就容易的多（不是说要用的多么好）。毕竟每个语言都会有巨人帮你把框架做好，把手脚架搭好，文档写好，就等你来用了。这很符合社会主义核心价值观。

虽然js是高级语言，但是如果不借助框架，不借助一些库，自己很难做一些很棒的东西。

我自己也写过 一些组件，比如 滚动到指定区域 ，轮播组件 ，tab切换带动效的组件。我能体会到越想写好一个组件越是要考虑更多的因素，最后可能提升了10%的用户体验和可靠性，缺花了100%甚至更多的时间。这也许是现在市面上一些web做的很糟糕的原因吧。

我也用原生js做过一些东西:[微信H5电商](https://yy.1314-edu.com/),[一个表单](https://yy.1314-edu.com/operating_activity/babyshow_topics)

事实上，我对自己做的并不满意。但是有时候就是这样，油门踩下去就没办法停下来了。

## Css
我在知乎上看到一个有趣的问题:point_right:[为什么css这么难学](http://www.zhihu.com/question/66167982)

有个人说：
> css是不正交，一个属性可能影响另一个属性。是一个黑盒，我们只能不断尝试，凭经验绕过误区。比如：一个div内部有个p，p有个margin-left:-10px。
当p有宽度300px的时候，发现p整体向左移动了10px。
当p无宽度的时候，返现长度向左拉长了10px。

另一个人反对：
> 楼上说的我笑了。楼上举得栗子，在css文档里写的很清楚，自己不看，非要把白盒说成黑盒。

其实我觉得css有点难，比如有个前端，搞了css就搞了10年，人家都没说自己精通css，你说难不难。这个人是张鑫旭。
你试着在控制台输入`document.createElement('div').style`,
你会发现一个普通的元素居然有惊人的500多种属性，而且这些属性当中还可能会相互影响。

功力浅薄的小兄弟早就跪了。

css实际使用已有两年，这种让人头疼的东西我却非常喜欢。因为我试的错比你多，就比你行，这个也是我作为前端的骄傲了。因为有的后端js用的实在好，但是css我能吊打他:joy:。

::: tip 关于css我有话要说
我常常使用的css预处理器是stylus，对比less，scss。stylus足够简洁，而且less，scss能做到的stylus都能做到。函数，变量，混入，计算，三个预处理器都差不多。安装`npm i stylus -g`，运行`stylus -w css/styl/* -o css/`能够提高demo的效率。
我对css3的使用特别是flex使用的比较多。

一般的不会有布局上的问题。
:::

## HTML
我觉得这个没啥好说的
+ video，audio新媒体标签
+ article，section语义化
+ canvas，画过图做过贪吃蛇
+ sessionStorage，localStorage 做多页spa用的比较多

## Webpack
现在2019年了，如果还不会使用webpack是不是很丢人。

记得2017的时候看慕课网的视屏。

徒手配置webpack依然记忆犹新。

那时候可没有vue-cli。

webpack还是1.x的版本。

.gitignore,.babelrc,.eslint...自己配

webpack-dev-server自己配，那时候要用 这个 `webpack-dev-middleware` 和 这个 `webpack-hot-middleware` 

一个只有一个页面的饿了么项目，讲了20个小时。

现在出了webpack4，编译速度提高了，配置更人性化了，文档更丰富了，还有中文文档，vue-cli2.x，现在还有vue/cli3版本完全用web来管理项目，还有能分析打包模块 `webpack-bundle-analyzer` 。`webpack-chunk-plugin` 也停用了。

::: tip 关于webpack我有话要说
webpack我使用的很多了，项目中能用的插件都能搞明白是啥意思。

自己也能写一个没啥实际作用的插件证明自己知道稍微了解一点webpack的机制。
``` js
const webpack = require('webpack')
const compile = webpack(webpackConfig)
const myPlugin = function(c){
  c.plugin('compile',function(){
    console.log('myplugin')
  })
  c.plugin('done',function(){
    console.log('webpack finish')
  })
}
``` 
至于其他的 *webpack如何引入静态资源，如何chunk split，如何懒加载lazy load，如何分离`import`导入的css和在.vue文件的css，如何发布部署，如何区分正式环境测试环境本地环境*等等，这些都是webpack基础。

我也把webpack文档大致看了一遍（不包括api文档）。

也了解有些可以提高编译速度的插件`webpack-dll`
:::

## Node
  这个真不敢说了解。
  
  只是启动一个express的server帮助我本地调试项目。

  用基于node的代理工具[whistle](https://github.com/avwo/whistle/blob/master/README-zh_CN.md)本地调试微信H5页面的api接口。

  买了一本 朴灵 的 《深入浅出node.js》 看了一丁点，算是了解一点node对于前端模块化起了哪些作用。

## Git
  读了一些 git 官网的git教程。

  工作中也一直使用git，实际上也没有用到太复杂太烧脑的操作。

  一些常用的命令经常使用，不常用的命令会百度。不常用又复杂的命令没用过。

## Dom
其实我花了很多时间在对Dom的学习上，一来是浏览器是js最常见的运行环境，而来很多时候往往是对dom了解的不够，使得一些bug无法迅速定位。

就像浏览器的解析文档的机制，js引擎，layout引擎，dom引擎。

放在css之后的js会延迟执行，dom会解析，但是不渲染。

没有async属性script标签的会阻塞浏览器的解析。

还有以下两个的区别，前者是文档流中，后者变成异步了最后再执行。
``` js
  <script>
    document.write()
  </script>
  <script>
    var s = document.creatElement('script')
    s.src = 'xxx'
    document.body.appendChild(s)
  </script>
```
浏览器任务队列分三种，一种是同步任务，一种是microtask（Promise.then)，一种是tasks（setTimeout）

事件是异步的还是同步的我现在还搞不清楚。因为有人说 `.click()`的钩子同步触发。 就当做是同步吧。

## 补充
### 小程序
  写过几个小程序，用的是wepy框架。当时遇到很多坑，也爬过来了。
### VS Code
  前端都用这个，不用这个我就不理解了:thinking:
### Cocos-creator
  按照教学，做了一个简单的游戏。研究了几天:grinning:。
### Chrome的调试
  我认为这个也是需要掌握好的一个技术。
  


