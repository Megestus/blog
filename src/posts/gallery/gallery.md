---
title: GitHub+PicGo+CDN 搭建图床
icon: fa-solid fa-images
  - 图床
tag:
  - 图床
  - Cloud sever
  - gallery

date: 2024-01-04
---

<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/camera-1130731_1280.jpg" style="75%"/>
</div>

图床是一种可以将图片上传到互联网上的服务，可以用来节省本地空间，提高图片加载速度，方便分享图片等。

当我们谈论图床时... <!-- more -->
通常指的是用于存储图片的服务器。根据位置的不同，可以将图床分为国内和国外两种类型。国外的图床由于存在空间距离等因素，导致访问速度较慢，并且可能影响图片的显示速度。

而国内的图床则包括三种类型：单线空间、多线空间和 CDN 加速。单线空间指的是使用一条网络线路进行数据传输，它相对来说在并发访问较高时的处理能力有限。多线空间使用了多条网络线路，可以提供更好的并发性能和稳定性。CDN（内容分发网络）是建立在全球范围数据网络上的分布式内容分发网，采用流媒体服务器集群技术。通过部署在不同地方的节点，CDN 可以克服单个服务器带宽和并发能力受限的弱点，大大提升系统支持的并发流量数量，并减少或避免单点故障对系统的负面影响。

&ensp; 

## 部署

下载：
[PicGo](https://github.com/Molunerfinn/PicGo)

jsdelivr开源CDN配置：
[cdn](https://www.jsdelivr.com/?docs=gh)

---

下载完成picgo后打开在配置面板中得知-我们需要以下内容信息
git仓库，制定文件路径，分支，token，按配置填写域名cdn。


<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01_n26.png" style="75%"/>
</div>

&ensp; 

### 新建<i class="fa-brands fa-github"></i>Github仓库



<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01-n37.png" style="75%"/>
</div>


并且-创建好存储文件夹。

<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01-n55.png" style="75%"/>
</div>


&ensp; 

---


### 创建token

<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01_n22.png" style="75%"/>
</div>

完成以上内容，就回到picgo。


&ensp; 

---

### PicGo 图床设置

- *Github设置*

<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01_n26.png" style="75%"/>
</div>

配置描述：

| | Github设置  |
| -------------- | -------------- |
| 图床配置名 | 随意 |
| 设定仓库名 | 用户名+仓库名 |
| 设定分支名 | 使用主分支  main |
| 设定Token | Github-Token |
| 设定存储路径 | 在仓库中创建的文件夹 images/ |
| 设定自定义域名| 使用jsdelivr开源的CDN + 用户名 + 仓库 |


配置好了如下：

<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01_n34.png" style="75%"/>
</div>


&ensp; 


### jsdelivr开源CDN使用规则

<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01_n09.png" style="75%"/>
</div>


&ensp; 

### 使用

<div class="image-preview">
  <img src="https://cdn.jsdelivr.net/gh/Megestus/img-cloud/images/img_2024-01_n57.png" style="75%"/>
</div>