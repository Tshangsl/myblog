创建两个项目
myblog-pc 前端
vue create myblog-pc
npm run serve
npmjs.com中搜索vue-axios 显示相关操作
npm i --save vue-axios axios 

myblog-rd 后端 数据服务 不需要界面展示

npmjs.com中搜索koa-generator 显示相关操作
npm install -g koa-generator
koa2 /tmp/foo 
cd /tmp/foo
npm install
npm start

npmjs.com中搜索koa-cors 显示相关操作
cors解决跨域问题
npm install koa-cors


使用token需要下载下列中间件
npmjs.com中搜索jsonwebtoken中间件 显示相关操作
验证token
npm install jsonwebtoken

JWT -- JSON WEB TOKEN
json:javascript的对象表示法


// err ctx.status即是response.status
        // ctx被翻译成上下文context 
        // 只是koa这个框架用到的一个名词 同时封装了request和response中这些属性
        // express框架中没有ctx这个概念
        // web开发中主要两个名词 request response
        // request 客户端浏览器向服务器端发送的请求 Request Headers
        // 隐式 显式(传送的数据) 可以通过request.xxx 获得请求数据
        // 做了一个简化
        // Response Body
        // 隐式 显式 数据


// jwttoken是无状态的 不在服务器端做任何存储
// jwt 适合做多端登录 session 可以做单点登录
// 解决鉴权问题时 jwttoken只是解决方案中的一个 而不是唯一一个
// 传统方式 session+cookie 服务器端会生成session的一个id 存储在cookie中
// cookie是最早出现的 服务器端可以在客户端存信息的一个文件
// windows系统中 cookie文件被存储在c盘用户名下appdata下一个隐藏文件夹
// cookie文件夹 txt文本文件
// cookie存储信息空间有限制
// session启动时会生成一个id 每一个用户都会有一个session
// 服务器端 保存用户的状态
// 两者差别 jwt 分散在客户端 无状态 

建议大家还是使用MVC这样的标准的后端开发的项目结构
什么是MVC？（Model, View, Controller）
一些建议：
1. 所有业务代码放在controller中
2. 所有的数据库操作的代码放在model中
3. 所有用户可见的页面放在view中
4. routes路由只是做简单的路由转发
5. controller和model以及route都可以根据业务复杂度选择是否分拆多个，分拆的原则是数据库中有几张表，对应有几个controller和model
6. controller中的方法命名规范要和业务相关，比如登录业务，就可以叫signin，注册业务，就可叫signup
7. model中的方法命名规范就是CRUD，增删改查：查get*, 删除delete*, 改update*, 增save*
8. mysql数据库操作完的结果results,一般会有以下几种情况
    8.1 如果查询不到，results=[], 可以通过results.length是不是>0，来判断查没查到
    8.2 如果查询多条，results=[{},{}...]，可以通过results.length是不是>0，来判断查没查到
    8.3 如果查询到一条，results=[{}]，只有一个查询结果对象，仍然可以通过results.length是不是>0，来判断查没查到
    8.4 如果是添加记录，results返回一个对象，其中有一个insertId属性，用来获取刚刚插入的这条记录的主键值，可以通过这个值是不是>0，来判断插入是否成功
    8.5 如果是删除和修改记录，results返回一个对象，其中有一个affectedRows属性，可以通过这个值是不是>0，来判断删除或修改是否成功