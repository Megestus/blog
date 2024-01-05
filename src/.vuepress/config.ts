import { defineUserConfig } from "vuepress";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";



export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "Megestus",
  description: "a blog , Daily, logging, note-taking, sharing, shader, development, nas, server",

  theme: hopeTheme({
    fullscreen: true,
    print: false,

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Outlook", "Search"],
    },


    plugins: {
      mdEnhance: {
        // 这就是默认选项，所以你可以直接使用它   --提示容器
        hint: true,
        //标记
        mark: true,
        // 启用 figure 图片
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
        // 启用任务列表  - [ ] 一些文字  - [x] 一些文字
        tasklist: true,
        //代码块分组  
        codetabs: true,
        // 启用 GFM 警告
        alert: true,
        // 启用提示容器
        hint: true,
        // 添加选项卡支持
        tabs: true,

      },

    },

    plugins: [  
      photoSwipePlugin({
        locales: {
          "/": {
            // 覆盖分享标签文字
            share: "分享给伙伴",
          },
        },
      }),
    ],

  }),
  
  
  theme,



  // Enable it with pwa
  // shouldPrefetch: false,
});


