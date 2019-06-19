<template>
  <div id="app">
    <!-- 头部 -->
    <id-skin-head></id-skin-head>
    <!-- auto main content -->
    <!-- 可以自定义title -->
    <router-view v-wechat-title="$route.meta.title"></router-view>
    <!-- 底部 -->
    <id-skin-footer></id-skin-footer>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    setTimeout(() => {
      document.body.removeChild(document.getElementById("Loading"));
    }, 2000);
  }
};
</script>

<style>
</style>
