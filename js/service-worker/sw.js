console.log(1);
//发出请求 -> 经过service-worker->后端
//sw.js 监听请求  之前有没有请求过 直接从缓存里面取 如果没有  我们帮浏览器发出请求 我给浏览器 同时我再缓存一次

const CACHE_NAME = "APP" + 1

this.addEventListener('install', function (params) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './',
        'js/bundle.js'
      ])
    })
  )
})