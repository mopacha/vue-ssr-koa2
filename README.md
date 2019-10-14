# Vue+Vue-Router+Vuex+Webpack4+ElementUI+SSR 实战

> moofy@163.com   开发中......

## 什么是服务器端渲染 (SSR)？为什么使用服务器端渲染 (SSR)？
 
看这 [Vue SSR 指南](https://ssr.vuejs.org/zh/)
  
## 技术栈
- vue、vue-router、vuex
- koa2
- webpack4
- axios
- babel、eslint
- css、stylus、postcss
- pm2


## 命令
* npm install : 安装npm依赖
* npm run dev : 启动开发服务
* npm start : 启动生产服务, 默认会执行打包命令
* npm run build : 打包代码命令
* npm run build:client : 打包client
* npm run build:server : 打包server

## 部署

### PM2
简介
> PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

构建生产代码
```npm
npm run build 构建生产代码
```
pm2启动服务
```npm
初次启动
pm2 start pm2.config.js --env production # production 对应 env_production
or
pm2 start vue-ssr-koa2
```

pm2的用法和参数说明可以参考[pm2.md](./pm2.md)，也可参考[PM2实用入门指南](http://www.cnblogs.com/chyingp/p/pm2-documentation.html)




