const http = require('http');
const fs = require('fs');
let count = 10000;
let sessiontable = [{
  userName: 'liming',
  userId: 1001,
  login: true,
  expire: '2021',
  id: 01
}]
// 用户登录状态保持
// 1 第一次登录完 后端写入 一个 cookie: username=lining, userID=1001
// cookie: sessionId:01
// 2 cookie 每次都随着 http 请求自动发送
// 3 每次 后端 取出 cookie 信息 if(login) { 登录状态有效的 }
http.createServer((req, res) => {
  function isLogin() {
    if (req.headers['cookie']) {
      let cookie = req.headers['cookie'];
      // let [name, sessionId] = cookie.split('=');
      let cookies = cookie.split(';');
      let sessionCookie = cookies.find(cookie => cookie.includes('session'));
      let [name, sessionId] = sessionCookie.split('=');
      if (sessiontable.find((item) => {
        return item.id === Number(sessionId);
      })) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  if (req.url === '/transfer') {
    if (!isLogin()) {
      res.end('un auth')
      return
    }
    count -= 100;
    res.end('ok');
  } else if (req.url === '/count') {
    res.end(count + '')
  } else if (req.url === '/islogin') {
    if (isLogin()) {
      res.end('login')
    } else {
      res.end('not login')
    }
  }
  else {
    // console.log(req.url)
    const html = fs.readFileSync('./index.html', 'utf-8');
    res.setHeader('set-cookie', 'sessionid=1;SameSite=strict');
    // res.setHeader('set-cookie', 'sessionid=1');
    res.end(html);
  }
})
  .listen(9090, () => {
    console.log(9090)
  })


  // 合法的  localhost:9090
  // hack   [localhost:9099]  
  // zhaomeng.com: 9099

// 阻止CSRF
  //1.
  //sameSite:lax  localhost的某些请求在zhaomeng.com 发出也能带cookie
  //sameSite:strict  localhost的请求 只有在localhost 发出才会带cookie
  //sameSite:none  localhost的请求不管在什么域发出都会携带 cookie
  //2. csrf_token:随机生成
  //用户登录完 服务端给你一个 token abcd
  //之后的请求  都要携带这个token 
  //这样  对于zhaomeng.com  是没有这个token 它发出去是没有token的
  // 3 浏览器会给每个请求一个reffer 字段 表明这个请求来源
  //服务器检测来源  但是这个来源可以伪造