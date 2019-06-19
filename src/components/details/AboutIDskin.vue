<template>
  <div id="about">
    <banner :bannerImg="bannerImg">
      <div class="about_content">
        <img src="../../../static/img/about_IDskin/about_IDSKIN.png" alt>
      </div>
    </banner>
    <div class="content_jieshao">
      <div class="content_jieshao_auto">
        <!-- <p>
          IDskin is a professional brand of Daqin, focusing on
          providing solution for making mobile phone full body
          anti-explosion protection film and custom mobile
          phone skin.
        </p>
        <p>
          Daqin company was established in 2002 in Beijing
          China. Focusing on custom mobile phone machine
          business over 17 years. Machine has been selling
          well in over 135 countries. Certified by SGS, in the
          same time it also has acquired over 10 patents for
          innovation and over 30 registered trademarks.
        </p>
        <p>
          IDskin Cut system is specialized of making mobile
          phone full body anti-explosion protection film,
          include front, back and side. Very strong and can
          repair the scratches automatically. Suitable for
          starting a small business in phone store, mobile
          accessories store, shopping mall, online business
          and so on!
        </p> -->
        <img src="../../../static/img/about_IDskin/about_IDSKIN_two.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../public/banner";
export default {
  data() {
    return {
      bannerImg: "../../../static/img/about_IDskin/about_bg_one.png"
    };
  },
  components: {
    banner
  }
};
</script>
<style scope>
#about .index_banner_auto {
  text-align: center;
  font-size: 90px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}
#about .index_banner {
  height: 690px;
}
#about .index_banner_auto img {
  display: block;
  margin: 0 auto;
  padding-top: 200px;
  box-sizing: border-box;
}
.content_jieshao{
    width: 100%;
    min-width: 1100px;
    margin: 90px 0;
}
.content_jieshao img{
    display: block;
    margin: 0 auto;
}
.content_jieshao_auto{
    width: 1100px;
    margin: 0 auto;
}
.content_jieshao_auto p{
    font-size: 42px;
    line-height: 60px;
}
</style>