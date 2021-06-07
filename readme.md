![g0ygBt.jpg](https://z3.ax1x.com/2021/05/13/g0ygBt.jpg)

# :sparkles:校园帮帮互助平台-微信小程序端

> 小程序端的帮帮互助平台，与[帮帮web](https://github.com/hamburgerdog/Helper_helper)要实现的功能是一样的，即快递、外卖、闲置、互助等，web版本暂停开发中...

## :hammer: 技术栈

* uni-app + vue 

## :page_with_curl: 项目功能简介

* 提供跑腿、公益、闲置物品出售等功能，可以自行发布、接受任务。
* 提供登录注册的功能，通过学生登录实现身份验证，使用云服务实现手机绑定

## :car:  运行方法

1. 用HBuilderX导入项目
2. 安装项目依赖（HBuilder通常会自动引入）
3. 启动项目（HBuliderX > 运行 > 运行到web、微信小程序入口）

:warning: 项目使用HBuilderX这个IDE来书写代码，使用了其自带的一个`uni-modules`引入依赖的功能，因此在使用yarn安装依赖后可能还需要引入<u>*（最好使用HBuildX导入的方法）*</u>如下依赖（包括但不限于 :sweat: ):

* [sass](https://ext.dcloud.net.cn/plugin?id=2046)
* [eslint-plugin-vue](https://ext.dcloud.net.cn/plugin?id=2005)
* [eslint-js](https://ext.dcloud.net.cn/plugin?id=2037)
* [uni-ui](https://ext.dcloud.net.cn/plugin?id=2037)

uni-app可以编译成多端APP，这里我只测试了WEB端和微信小程序端，移动端机型以iphoneX显示最佳

## :wind_chime: 项目展示

![主页.png](https://z3.ax1x.com/2021/06/07/2w3CKx.png) 

![表单页面.png](https://z3.ax1x.com/2021/06/07/2w8ZwT.png)

![主页-订单页面.png](https://z3.ax1x.com/2021/06/07/2w8J0K.png)

![主页-我的页面.png](https://z3.ax1x.com/2021/06/07/2w82tg.png)

![订单-粗览页面.png](https://z3.ax1x.com/2021/06/07/2w8Lh4.png)



