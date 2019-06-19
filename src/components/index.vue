<template>
  <div id="index">
    <!-- 首页路由 -->
    <!-- <div class="index_banner">
      <div class="index_banner_auto">
        <p>
          <span>HOW TO ADD PROFITS</span>
          <br>FOR YOUR STORE ?
        </p>
      </div>
    </div>-->
    <!-- banner -->
    <banner :bannerImg="bannerImg">
      <p>
        <span>HOW TO ADD PROFITS</span>
        <br>FOR YOUR STORE ?
      </p>
    </banner>
    <!-- banner -->
    <!-- idskin_best介绍 -->
    <div class="idskin_best clearfix">
      <div class="newindexBG_one clearfix">
        <div class="newindexBG_one_auto clearfix">
          <img src="../assets/img/newindexBG_two.png" alt>
        </div>
      </div>
      <img src="../assets/img/newindexBG_three.png" alt>
      <div class="idskin_best_auto">
        <p class="pbold">IDskin is Your Best Choice</p>
        <!-- <img src="../assets/img/index_id_skin_img.png" alt> -->
        <ul class="clearfix">
          <li v-for="(IDskinBestTitle, index) in IDskinBestTitles" :key="index">
            <p v-html="IDskinBestTitle.title1"></p>
            <p v-html="IDskinBestTitle.title2"></p>
          </li>
        </ul>
      </div>
    </div>
    <!-- idskin_best介绍 -->

    <div class="banner_black_img clearfix">
      <div class="banner_black_img_auto clearfix">
        <ul class="clearfix">
          <router-link to="./custom">
            <li>
              <img src="../assets/img/index_OEM.png" alt>
            </li>
            <li>
              <img src="../assets/img/index_ODM.png" alt>
            </li>
            <li>
              <img src="../assets/img/index_AGENT.jpg" alt>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "./public/banner";
export default {
  name: "index",
  data() {
    return {
      bannerImg: "../../static/img/index_banner.jpg",
      IDskinBestTitles: [
        {
          title1: "* Fast Customized screen and",
          title2: "&nbsp;&nbsp;&nbsp;back protection, so cool!"
        },
        {
          title1: "* Small machine, suit for your",
          title2: "&nbsp;&nbsp;&nbsp;store."
        },
        {
          title1: "* Your phone can operate",
          title2: "&nbsp;&nbsp; machine, so easy!"
        },
        {
          title1: "* Can add 30% profits to your",
          title2: "&nbsp;&nbsp;&nbsp;store!"
        }
      ]
    };
  },
  components: {
    banner
  }
};
</script>
<style scope>
/* #index {
  margin-top: 157px;
} */
.idskin_best img {
  display: block;
  margin: 0 auto;
}
.newindexBG_one {
  background: url("../assets/img/newindexBG_one.png") center no-repeat;
  padding: 100px 0 0 0;
  box-sizing: border-box;
}
.newindexBG_one img {
  display: block;
  margin: 0 auto;
}
/* banner图 */
#index .index_banner_auto {
  text-align: center;
  font-size: 60px;
  color: #fff;
}
#index .index_banner_auto p {
  margin-top: 220px;
}
#index .index_banner_auto span {
  font-size: 80px;
  font-weight: bold;
}
/* 第一个介绍
IDskin is Your Best Choice
 */
.idskin_best {
  width: 100%;
  min-width: 1100px;
  background: #e6e6e6;
}
.idskin_best_auto {
  width: 1100px;
  margin: 0 auto;
  color: #000;
  text-align: center;
  font-size: 36px;
  padding: 100px 0 0 0;
  box-sizing: border-box;
}
.idskin_best_auto img {
  display: block;
  margin: 0 auto;
  padding: 20px;
}
.idskin_best_auto .pbold {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 70px;
}
.idskin_best_auto li {
  float: left;
  width: 50%;
  margin-bottom: 60px;
  text-align: left;
}
.idskin_best_auto li p {
  margin: 6px 15px;
}
/* 第二个 三张图 介绍 */

.banner_black_img {
  background: url("../assets/img/index_footer.jpg") center center no-repeat;
  width: 100%;
  min-width: 1100px;
}

.banner_black_img_auto {
  width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
}
.banner_black_img_auto li {
  float: left;
  width: 33%;
  margin: 165px 0;
}
.banner_black_img_auto li img {
  display: block;
  margin: 0 auto;
}
</style>