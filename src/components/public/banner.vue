<template>
  <!-- 这个是导航下面那张图的  组件 
  * 使用方法
  * 使用时候需要引入 import banner form 'xxxx'  <banner :bannerImg="bannerImg"></banner> 方式调用 还没有注册为全局组件 
  * 控制图片的属性是 'bannerImg' 只需要在 父组件里声明是哪张图片即可 ps:最好是在线引用的图片 例如: bannerImg: "http://daqin.cn/id_skin_imgs/bg-1111.jpg",
  * ps:建议在引用的时候用一个div套着 避免样式重复 详细看 index.vue 是如何引用的 and Bob is your uncle
  -->
  <div id="banner">
    <div
      class="index_banner clearfix"
      :style="{background:'url('+ bannerImg +')  center center no-repeat' }"
    >
      <div class="index_banner_auto clearfix">
        <!-- <p>
          <span>HOW TO ADD PROFITS</span>
          <br>FOR YOUR STORE ?
        </p>-->
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  props: {
    bannerImg: String
  }
};
</script>
<style scope>
.index_banner {
  width: 100%;
  min-width: 1100px;
  background-size: 100% 100%;
  box-sizing: border-box;
  height: 650px;
}
.index_banner_auto {
  width: 1100px;
  margin: 0 auto;
}
</style>