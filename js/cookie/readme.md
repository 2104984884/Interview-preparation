## cookie
name
value
Domain: cookie 生效的域名  
path: /a/b  生效的路径
expires:过期时间 默认就是当前session 失效
httpOnly:cookie 只在http传输 js 无法操作的 (cookie 可以由后端的
set-cookie 响应头设置  也可以由前端document.cookie="" 设置
secure:只在https的环境下面生效


cookie只要符合domain和path的生效范围,就会随着http请求发送CSRF
sameSite: lax  strict(cookie只在同域(juejin.im)生效) none 