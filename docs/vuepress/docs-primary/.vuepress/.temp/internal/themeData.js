export const themeData = JSON.parse("{\"home\":\"/\",\"logo\":\"/image/MiraiTravelico.jpg\",\"repo\":\"https://github.com/MR-XieXuan/MiraiTravel\",\"navbar\":[{\"text\":\"MiraiTravel 生态\",\"children\":[{\"text\":\"了解生态\",\"link\":\"/study/\"},{\"text\":\"Script 脚本\",\"link\":\"/study/script/\"},{\"text\":\"Component 组件\",\"link\":\"/study/component/\"},{\"text\":\"Plugin 插件\",\"link\":\"/study/plugin/\"},{\"text\":\"Adpter 适配器\",\"link\":\"/study/adpter/\"},{\"text\":\"Advice 处理逻辑\",\"link\":\"/study/advice/\"}]},{\"text\":\"快速上手\",\"children\":[{\"text\":\"Mirai\",\"link\":\"/study/course/mirai/\"}]},{\"text\":\"用户手册\",\"link\":\"/manual/\"},{\"text\":\"公告\",\"link\":\"/announcement/\"},{\"text\":\"Mirai\",\"link\":\"https://docs.mirai.mamoe.net/\"}],\"sidebar\":{\"/\":[{\"text\":\"Script 脚本\",\"link\":\"/study/script/\"},{\"text\":\"Component 组件\",\"link\":\"/study/component/\"},{\"text\":\"Plugin 插件\",\"link\":\"/study/plugin/\"},{\"text\":\"Adpter 适配器\",\"link\":\"/study/adpter/\"},{\"text\":\"Advice 处理逻辑\",\"link\":\"/study/advice/\"}],\"/study/advice/\":[{\"text\":\"基础处理逻辑\",\"link\":\"#基础处理逻辑\"}],\"/manual/adapter/QQ/standard/basic/\":[{\"text\":\"QQObj 对象接口\",\"collapsible\":true,\"children\":[\"/manual/adapter/QQ/standard/basic/QQObjInterface.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
