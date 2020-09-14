JSX -> createElement -> 虚拟dom(react element) -> 对应平台的渲染器 reactDOM/react-native   渲染

setState -> 生成另外一棵虚拟dom -> dom diff(reconciers) -> 找出哪些地方需要更新 ->应用更新

## stack reconcier react及更早的解决方案


## fiber reconcier react16
fiber 实质是一个react对象 一个数据结构 支持中止暂停重新启动
```js
fiber:{
  child:第一个子节点
  sibling:下一个兄弟
  return :父节点
}
```
fiber:以单链表的形式表达一棵树

之前DOM diff  递归的过程:我们遍历所有的节点，这个如果js执行时间是很长的，而且js计算和页面渲染(绘制)是互斥的

浏览器的一次event-loop  可以理解为一帧要做的事情
- task
- microtask
- requestAnimationFrame
- render  
- requestIdleCallback 当这一帧有空余时间的时候

之前 js是老大 ,我想执行多久就执行多久
现在js 主动让步，我自己放在requestIdleCallback 里面 js和浏览器统一站在用户体验的角度 所以requestIdleCallback也叫合作调度


前两项时间过长 导致 第三项一帧丢失


纤程(协程):
- 能够把可切断的任务切片处理
- 能够调整优先级，重置并复用任务

类似 generate:yield


react16生命周期
1. render 阶段：算出哪些需要更新
2. commit 阶段：之前render 阶段 已经话费很多时间 为了让用户尽快看到页面 所以这里会一气呵成，更新页面