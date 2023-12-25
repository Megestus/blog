---
title: UE5+Perforce+腾讯云版本控制搭建流程与工作流程
icon: fa-solid fa-laptop-file
category:
  - Perforce
tag:
  - Perforce
  - Cloud sever
  - Teams
  - UE5
date: 2023-12-20
star: 2
---

记录下云服务器部署Perforce的流程

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/p4nas.png" />
</div>


在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。

<i class="fa-solid fa-cable-car"></i> 文章：[从零开始在NAS上配置Perforce并启用虚幻引擎源码管理](https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005)

那没有Nas如何快速的创建一个Perforce为团队服务呢？

<!-- more -->

&ensp; 

## 购买服务器

我这里使用的是腾讯云

[腾讯云地址](https://cloud.tencent.com/act/free?from=19067)

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/9ecfdc66dcdee766d6297a314d98daa0.image.webp" />
</div>


通过以上新用户福利，我们即可获得一个月免费的轻量服务器。

然后我们在选择系统时，可以直接使用Docker镜像，这样就可以快速的使用到docker，不需要再去装一遍。


<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/180c0ea68a43c7518a4c01850e515262.clipboard-2023-10-18.webp" />
</div>

我们在购买完服务器后-可以在邮件中得知当前服务器的账号以及登录密码。

<div class="image-preview">
    <img src = "https://megestus.github.io/blog/assets/images/6ed0ea4a45366f5589597c6054d66261.clipboard-2023-10-19.webp" />
</div>

&ensp; 

## 开始部署 


然后我们登录此服务器

<div class="image-preview">
    <img src = "https://megestus.github.io/blog/assets/images/93da21e2caaa9adca4c819917440bfbe.clipboard-2023-10-19.webp"/>
</div>

<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/0ea5fb1aa5dece4f8d29f81b25e6c207.clipboard-2023-10-19.webp" />
</div>

登录后 输入`sudo -i` 获取root权限

<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/c03d4a9469ad6576c7308690160a6528.clipboard-2023-10-19.webp"/>
</div>

&ensp; 

## 部署perforce

然后一键部署perforce镜像

复制下列代码，粘贴，执行

```
docker rm -f perforce || true
make perforce-server-{image,tag}
docker run -d -p 8080:8080 -p 1666:1666 -h perforce --name perforce ambakshi/perforce-server

docker logs -f perforce
```
<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/dffc4ed5eaf39b59574564049f32a357.image.webp"/>
</div>


以上我们就已经部署完成啦

我们按回车键。执行`docker logs -f perforce`获取perforce的日志，在日志里获取P4的管理员账号和密码。

<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/31e4ecc7f86de925883ddc6ab1e29397.image.webp"/>
</div>

当然你也可以直接复制以下默认管理员账号以及密码，进行登录。

```
#端口号
P4PORT=1666
#用户及密码
P4USER=p4admin
P4PASSWD=pass12349ers!
```

&ensp; 

### 防火墙开放 1666  8080端口

---

还需要在腾讯云服务器页面里防火墙中 开放`1666` `8080`端口 ，这样小伙伴们才能通过端口进行访问。

<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/c2766ff110944bc6ed07b58af1eb5ae8.image.webp"/>
</div>


&ensp; 

## 安装P4V 给团队小伙伴登录

[P4V下载地址](https://www.perforce.com/downloads/helix-visual-client-p4v)


<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/4dfa81522be498514ca684e195c15d71.image.webp"/>
</div>

选择适合系统的P4V-下载

&ensp;

### P4V安装过程

---

这里如果执行不了下一步，可以填写你的`[ip]:1666`则可以继续下一步。

<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/eed1a21de36a198d1ad977c02e5101b8.image.webp"/>
</div>

无脑下一步~



<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/a45b9bf8c83d41ce3d8b677190873260.image.webp"/>
</div>

输入账号密码 


即可完成登录
<div class="image-preview">
    <img src = 
"https://megestus.github.io/blog/assets/images/08741e445fe305f48a8c260b9ef23e2c.image.webp"/>
</div>

部署完成  

<i class="fa-regular fa-face-smile-wink"></i>


&ensp;

## 关于使用方法，或者说明
详细使用方法-可以通过互联网查找，当然，部署P4的你应该也有一定的使用经验。这对你来说应该不是什么很大的问题。 
或者查看我翻译的 P4文档   
[链接地址](https://doc.megestu.top/project-3/)

值得注意的是我们设置引擎上传的文件需要添加过滤，不然什么文件都会上传到引擎上，会造成一些不必要产生的问题。  
[设置和创建忽略文件 P4 ignore](https://doc.megestu.top/doc/49/)


&ensp;

## UE5 源码连接

步骤：

- 在启动引擎后在界面右下角
- 点击版本控制-连接到版本控制
- 选择提供方为Perforce
- 然后选择可以用工作区
- 接受设置
<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/UESourcelink.png" />
</div>

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/UESourcelink2.png" />
</div>


::: info 这个连接源码前，需要打开过P4
:::

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/UESourcelink3.png" />
</div>

使用和P4类似，
不过多说明。


<style>

  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 90% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 95% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>
