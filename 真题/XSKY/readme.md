1. CSS属性名称是否是大小写敏感？
不敏感
id className querySelector  敏感

2. margin-top和margin-bottom对行内元素是否起作用？
  盒子模型
  margin 
  行内元素
  当我们使用外边距  只有左右方向有效
  设置四个方向的内边距时,对于行内元素
  确实 显示效果 但是竖直方向的内边距
  只有效果 对其他元素没有影响
  竖直方向 外边距没有效果
3. 有一个\<P>标签是font-size：10rem，标签中的文本大小是否会随着窗囗尺寸的改变而改变？ 
  自适应
  flexible.js 有点过时了
  rem em
  media query
  vw vh
  百分比
  calc
  postcss

  工作流 webpack
  webpack css .styl  .scss ->css-loader  stylus-loader stylus css 编译
  postcss 全新的css库 平台插件系统
  babel-core  autoprefixer