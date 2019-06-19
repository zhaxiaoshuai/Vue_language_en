<template>
  <!-- 
    idskincutsystem 跳转显示的页面 
    * 没有细化分组件，这些只能用一次，没必要感觉
  -->
  <div id="idskincutsystem">
    <banner :bannerImg="bannerImg">
      <img src="../../../static/img/id-skin_jiqi.png" alt>
    </banner>
    <!-- 第一张 
    Your mobile phone can operate machine
    -->
    <div class="mobile_phone clearfix">
      <p>Your mobile phone can operate machine</p>
      <span>So easy!</span>
      <img src="../../../static/img/phone-two.png" alt>
    </div>
    <!-- 第二张 
      Over 1800 templates in
      the cloud, update timely .
    -->
    <div class="template">
      <img src="../../../static/img/two-banner-one.png" alt>
      <div class="template-p">
        <p>
          Over
          <span>4000</span> templates in
        </p>
        <p>the cloud, update timely .</p>
      </div>
    </div>
<!-- 测试视频播放 -->
<!--     
    <div style="  width:1100px; margin: 0 auto; ">
      <iframe
        frameborder="0"
        src="https://v.qq.com/txp/iframe/player.html?vid=n0848tetmmp"
        allowfullscreen="true"
        style="width:100%;height:600px;"
      ></iframe>
    </div> -->

    <!-- 第三张 
      四张图 + 固定图
    -->
    <div class="four-img">
      <ul class="clearfix">
        <li v-for="(four_img, index) in four_imgs" :key="index">
          <img :src="four_img.imgs" alt>
        </li>
        <div class="threeFxed">
          <img src="../../../static/img/three-five.jpg" alt>
        </div>
      </ul>
    </div>

    <!-- 第四张 
      四张图 + 介绍
    -->
    <div class="four_jieshao">
      <ul class="clearfix">
        <li v-for="(four_jieshao_img, index) in four_jieshao_imgs" :key="index">
          <img :src="four_jieshao_img.imgs" alt>
          <p>{{four_jieshao_img.title1}}</p>
          <p>{{four_jieshao_img.title2}}</p>
        </li>
      </ul>
    </div>

    <!-- 第五张 
      Value added service for mobile store ,
      mobile accessory store ,repair store ......
    -->
    <div class="five_val clearfix">
      <div class="five_val_p">
        <p>Value added service for mobile store ,</p>
        <p>mobile accessory store ,repair store ......</p>
      </div>
      <div class="five_val_ul">
        <ul class="clearfix">
          <li v-for="(five_six_img, index) in five_six_imgs" :key="index">
            <img :src="five_six_img.imgs" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../public/banner";
export default {
  name: "idskincutsystem",
  data() {
    return {
      bannerImg: "../../../static/img/bg-1111.jpg",
      // 第三个版块的四张图
      four_imgs: [
        { imgs: "./static/img/three-one.jpg" },
        { imgs: "./static/img/three-two.jpg" },
        { imgs: "./static/img/three-three.jpg" },
        { imgs: "./static/img/three-four.jpg" }
      ],
      // 第四个版块四张图
      four_jieshao_imgs: [
        {
          imgs: "./static/img/four_one.png",
          title1: "Free of stock pressure",
          title2: ""
        },
        {
          imgs: "./static/img/four-two.png",
          title1: "Fast and Easy operate",
          title2: ""
        },
        {
          imgs: "./static/img/four-three.png",
          title1: "Small machine,",
          title2: "take up less space."
        },
        {
          imgs: "./static/img/four-four.png",
          title1: "Low investment ",
          title2: "starts at $1000"
        }
      ],
      // 第五个模块 六张图
      five_six_imgs: [
        { imgs: "./static/img/fiv_one.jpg" },
        { imgs: "./static/img/fiv_two.jpg" },
        { imgs: "./static/img/fiv_three.jpg" },
        { imgs: "./static/img/fiv_four.jpg" },
        { imgs: "./static/img/fiv_five.jpg" },
        { imgs: "./static/img/fiv_six.jpg" }
      ]
    };
  },
  components: {
    banner
  }
};
</script>
<style scope>
/* #idskincutsystem {
  margin-top: 156px;
} */
/* banner */

.index_banner_auto img {
  display: block;
  margin: 80px auto;
}

/* 第一张 */
.mobile_phone {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  background: url(../../assets/img/bg-2222.jpg) no-repeat;
}
.mobile_phone p {
  margin: 90px 0 40px 0;
  font-size: 45px;
}
.mobile_phone span {
  background: #319bde;
  font-size: 40px;
  border-radius: 40px;
  padding: 5px 30px;
  color: #fff;
  box-sizing: border-box;
}
.mobile_phone img {
  margin: 70px 0 20px 0;
}
/* 第二张 */
.template {
  width: 1100px;
  margin: 0 auto;
  background: url(../../assets/img/bg-three.jpg) no-repeat;
  position: relative;
}
.template img {
  display: block;
  margin: 0 auto;
  padding: 70px 0;
}
.template-p {
  position: absolute;
  font-size: 45px;
  color: #000;
  font-weight: bold;
  left: 264px;
  bottom: 255px;
  text-align: center;
}
.template-p span {
  font-size: 60px;
  color: #0084d8;
}
/* 第三张 */
.four-img {
  width: 1100px;
  margin: 0 auto;
  position: relative;
}
.four-img li {
  float: left;
  margin-top: 5px;
  margin-right: 3px;
  width: 547px;
  height: 572px;
  cursor: pointer;
  overflow: hidden;
}
.four-img li img {
  transition: all 1s;
}

.four-img li img:hover {
  transform: scale(1.2);
}
.threeFxed {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -321px 0 0 -321px;
}

/* 第四张 */
.four_jieshao {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  padding: 90px 90px 0 90px;
  box-sizing: border-box;
  background: #bfddf3;
}
.four_jieshao li {
  float: left;
  font-size: 40px;
  width: 50%;
  color: #000;
  margin-bottom: 85px;
}
.four_jieshao li img {
  margin-bottom: 30px;
}

/* 第五张 */
.five_val {
  width: 1100px;
  margin: 0 auto;
  background: #f2f2f2;
  text-align: center;
}
.five_val_p {
  margin: 60px 0px;
}
.five_val_p p {
  font-size: 45px;
  color: #0084d8;
  font-weight: bold;
}
.five_val_ul li {
  float: left;
  margin-right: 3px;
}
</style>
