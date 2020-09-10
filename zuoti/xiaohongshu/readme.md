## 1.请简述XMLHttpRequest、JSONP的适用场景，并针对两种请求形式简述如何检测请求错误
  XMLHttpRequest用于浏览器端与服务器端异步请求数据的无刷新修改，支持GET/POST请求，一般用于非跨域的场景。如果需要使用XMLHttpRequest跨域请求数据，需要通过CORS头支持。 JSONP用于跨域请求数据的场景，只支持GET请求。
  XMLHttpRequest异常判断一般通过该对象的readystate和http状态码status来判断，JSONP的异常判断一般是onerror事件和超时timer来判断。
XMLHttp可以想不同的域名的服务器发出http请求，叫做CORS
但是必须满足两个条件按：
1. 浏览器需要支持CORS
2. 服务器允许跨域，服务头需要添加一些选项：

```js
self.set_header('Access-Control-Allow-Origin', '*')
self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
self.set_header('Access-Control-Max-Age', 1000)
self.set_header('Access-Control-Allow-Headers', '*')
self.set_header('Content-type', 'application/json')
```

## 2.浏览器渲染页面过程
浏览器渲染的过程主要包括以下五步：

浏览器将获取的HTML文档并解析成DOM树。
处理CSS标记，构成层叠样式表模型CSSOM(CSS Object Model)。
将DOM和CSSOM合并为渲染树(rendering tree)将会被创建，代表一系列将被渲染的对象。
渲染树的每个元素包含的内容都是计算过的，它被称之为布局layout。浏览器使用一种流式处理的方法，只需要一次pass绘制操作就可以布局所有的元素。
将渲染树的各个节点绘制到屏幕上，这一步被称为绘制painting.


1.构建dom树 浏览器客户端从服务器处接受到html文档 遍历节点 dom树结构与html标签一一对应
2.解析css 浏览器会解析CSS文件并生成CSS规则树，在过程中，每个CSS文件都会被分析成StyleSheet对象，每个对象都包括CSS规则，CSS规则对象包括对应的选择器和声明对象以及其他对象。
3.构建渲染树 通过dom树和css规则树 构建渲染树，遍历每个可见节点，然后对每个可见节点找到对应的css样式规则并进行应用
4.渲染树布局  从渲染树根节点开始遍历 获取每个节点的样式信息 浏览器以此确定大小 位置信息
5.绘制渲染树 浏览器会遍历渲染树，调用渲染器的paint()方法在屏幕上显示其内容​
