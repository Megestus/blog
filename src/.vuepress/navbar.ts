import { navbar } from "vuepress-theme-hope";

// 导航菜单
export default navbar([
  //主页
  "/",
  // use页
  "/posts/",


  //docs下拉菜单
  {
    text: "docs",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
       //docs下拉菜单-小标题 Maya-tools
      {
        text: "Maya-tools",
        icon: "pen-to-square",
        prefix: "maya/",
        children: [
          {
            text: "Maya-Notes",
            icon: "bookmark",
            link: "MayaNotes",
            
          },

          {
            text: "Maya-Checklist",
            icon: "fa-solid fa-list",
            link: "MayaChecklist",
            
          },

          {
            text: "Maya-SelectEdges",
            icon: "tools",
            link: "selectEdges",
          },

          {
            text: "Maya-UVset",
            icon: "tools",
            link: "UVset",
          },

          {
            text: "Maya-PythonLearn",
            icon: "fa-brands fa-python",
            link: "PythonLearn",
          },
          
        ],
      },
      

      {
      //docs下拉菜单-小标题 3Dmax_notes
        text: "3Dmax_Notes",
        icon: "pen-to-square",
        prefix: "3dmax/",
        children: [
          {
            text: "Max-Notes",
            icon: "fa-solid fa-square-pen",
            link: "MaxNotes",
            
          },   
        ],
      },

      {
        //docs下拉菜单-小标题 Perforce
          text: "Perforce",
          icon: "fa-solid fa-laptop-file",
          prefix: "Perforce/",
          children: [
            {
              text: "Perforce-CloudSet",
              icon: "fa-solid fa-laptop-file",
              link: "PerforceSet",
              
            },   
          ],
      },

      {
        //docs下拉菜单-小标题 other
          text: "Other",
          icon: "fa-solid fa-otter",
          prefix: "Other/",
          children: [
            {
              text: "gallery",
              icon: "fa-solid fa-images",
              link: "gallery",
              
            },   
          ],
      },
    ],
  },





  // 跳转链接
  {
    text: "themehope",
    icon: "fa-solid fa-otter",
    link: "https://theme-hope.vuejs.press/zh/",
  },


]);

