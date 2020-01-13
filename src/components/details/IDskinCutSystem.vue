<template>
  <!-- 
    idskincutsystem 跳转显示的页面 
    * 没有细化分组件，这些只能用一次，没必要感觉
  -->
  <div id="idskincutsystem">
    <banner :bannerImg="bannerImg"></banner>
    <!-- 第一张 
    4000+Models Fast Update Freely
    -->
    <div class="models">
      <p>4000+Models Fast Update Freely</p>
      <div></div>
      <img src="../../../static/img/cutSystem/jixingNum.png" alt />
    </div>

    <!-- 第二张 
      phone list
    -->
    <div class="phonelist clearfix">
      <div class="phonelistwidth">
        <div v-for="(phonelist, index) in phonelists1" :key="phonelist.id" class="phonelistshow">
          <img :src="phonelist.img" :alt="phonelist.img" />
          <p>{{phonelist.title.toUpperCase()}}</p>
          <p></p>
        </div>
        <img class="m0a" src="../../../static/img/cutSystem/phoneback.png" alt />
        <div v-for="(phonelist, index1) in phonelists2" :key="phonelist.id" class="phonelistshow">
          <img :src="phonelist.img" :alt="phonelist.img" />
          <p>{{phonelist.title.toUpperCase()}}</p>
          <p></p>
        </div>
        <img class="m0a" src="../../../static/img/cutSystem/phoneback.png" alt />
      </div>
    </div>

    <!-- 第三张 
      IDskin Cutter Easy Operation
    -->
    <div class="idskincutter">
      <p class="p_big">IDskin Cutter Easy Operation</p>
      <p
        class="p_small"
      >One-step cut, 30 Seconds custom protector, Protect your mobile with shield !</p>
    </div>

    <!-- 第四张 
      Profit on the day No stock 
    -->
    <div class="profit clearfix">
      <div class="ptitle">
        <p class="marb fontb">
          Profit on the day
          <span>No stock</span>
        </p>
        <p>
          Custom screen protector, full body back protector,
          <br />colorful mobile skin, any model ,any quantity!
        </p>
      </div>
      <div class="threeimgshow clearfix">
        <div v-for="(threeImgShowList, index) in threeImgShowLists" :key="index">
          <img :src="threeImgShowList.imgURL" :alt="threeImgShowList.title" />
          <p>{{threeImgShowList.title}}</p>
        </div>
      </div>
    </div>

    <!-- 第五张 
      Samples show
    -->
    <div class="samples">
      <img style="padding-bottom:20px;" src="../../../static/img/cutSystem/samples-show.png" alt />
      <img src="../../../static/img/cutSystem/phonelist.jpg" alt />
      <div class="focused">
        <p>
          Focused on 17 years, IDskin strive to
          <br />Support high quality machine to all customers!
        </p>
      </div>
      <img src="../../../static/img/cutSystem/cutting.png" alt />
    </div>
    <!-- 第六张  -->
    <div class="cutteridskin">
      <div class="cutteridskinback">
        <p class="fontcolor1">IDskin</p>
        <p class="fontcolor2">Cutter Specification</p>
      </div>
      <img src="../../../static/img/cutSystem/cutterspec.jpg" alt />
      <img src="../../../static/img/cutSystem/anti.jpg" alt="">
    </div>
    <!-- 第七张 -->
    <div class="colorful">
      <img src="../../../static/img/cutSystem/colorful.jpg" alt="">
    </div>
    <!-- 第八张
    IDskin Cutter Accessories List
     -->
     <div class="accessories">
       <img src="../../../static/img/cutSystem/idskincutter.jpg" alt="">
     </div>
     <!-- 第九张
     IDskin Cutter Service
      -->
      <div class="idskinservice">
        <img src="../../../static/img/cutSystem/idskinservice.jpg" alt="">
      </div>
  </div>
</template>
<script>
import banner from "../public/banner";
export default {
  name: "idskincutsystem",
  data() {
    return {
      bannerImg: "../../../static/img/cutSystem/banner.jpg",
      // 4000+图片下方六张图片 分为两个循环
      phonelists1: [
        {
          img: require("../../../static/img/cutSystem/phonelist1.png"),
          title: "iphone",
          id: 1
        },
        {
          img: require("../../../static/img/cutSystem/phonelist2.png"),
          title: "HUAWEI",
          id: 2
        },
        {
          img: require("../../../static/img/cutSystem/phonelist3.png"),
          title: "SAMSUNG",
          id: 3
        }
      ],
      phonelists2: [
        {
          img: require("../../../static/img/cutSystem/phonelist4.png"),
          title: "OPPO",
          id: 4
        },
        {
          img: require("../../../static/img/cutSystem/phonelist5.png"),
          title: "vivo",
          id: 5
        },
        {
          img: require("../../../static/img/cutSystem/phonelist6.png"),
          title: "MI",
          id: 6
        }
      ],
      threeImgShowLists: [
        {
          imgURL: require("../../../static/img/cutSystem/threeimg1.jpg"),
          title: "Customized on site"
        },
        {
          imgURL: require("../../../static/img/cutSystem/threeimg2.jpg"),
          title: "No machine damage"
        },
        {
          imgURL: require("../../../static/img/cutSystem/threeimg3.jpg"),
          title: "No stock"
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
/* #idskincutsystem {
  margin-top: 156px;
} */
/* 公共 */
.fontcolor1 {
  color: #fff;
  font-size: 80px;
}
.fontcolor2 {
  color: #053858;
  font-size: 20px;
}

.fontb {
  font-weight: bold;
}
.marb {
  margin-bottom: 20px;
}
.m0a {
  display: block;
  margin: 0 auto;
}
.p_small {
  font-size: 30px;
  letter-spacing: -2px;
}
.p_big {
  font-size: 40px;
  font-weight: bold;
}
/* 第一张 */
.models {
  width: 100%;
  min-width: 1100px;
  margin: 0 auto;
  padding: 60px 0;
}
.models img {
  display: block;
  margin: 0 auto;
}
.models p {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
.models div {
  width: 250px;
  height: 5px;
  margin: 0 auto;
  background: #000;
}
/* 第二张 */
.phonelist {
  width: 100%;
  min-width: 1100px;

  margin: 0 auto;
  padding: 60px 0;
  background: url("../../../static/img/cutSystem/twoback.jpg") no-repeat center;
}
.phonelistwidth {
  width: 585px;
  margin: 0 auto;
}
.phonelistshow {
  width: 33%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  float: left;
}
.phonelistshow img {
  display: block;
  margin: 0 auto;
}
/* 第三张 */
.idskincutter {
  width: 100%;
  min-width: 1100px;
  padding-top: 60px;
  background: url("../../../static/img/cutSystem/back.jpg") no-repeat center;
  text-align: center;
  height: 500px;
}
/* 第四张 */
.profit {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  background: #88d0ef;
  padding-top: 40px;
}
.profit .ptitle > p {
  font-size: 20px;
  color: #000;
}
.profit .ptitle > p > span {
  font-size: 30px;
  color: #9523bf;
}
.threeimgshow {
  width: 745px;
  margin: 40px auto 100px auto;
}
.threeimgshow > div {
  float: left;
  width: 33%;
}
.threeimgshow div > img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
.threeimgshow div > p {
  font-size: 20px;
  text-align: center;
  color: #000;
  margin-top: 20px;
  letter-spacing: -1px;
}
/* 第五张 */
.samples {
  width: 1100px;
  margin: 0 auto;
  padding-top: 40px;
}
.samples img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.focused {
  background: url("../../../static/img/cutSystem/back1.png") no-repeat center;
  text-align: center;
  padding: 60px 0 50px 0;
}
.focused > p {
  font-size: 30px;
  color: #fff;
  font-weight: bold;
}
/* 第六张 */
.cutteridskin {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}
.cutteridskinback{
  width: 100%;
  background: #0084d7;
  padding: 30px 0;
}
/* 第七张 */
.colorful{
  width: 1100px;
  margin: 0 auto;
}
.colorful img{
  max-width: 100%;
}
/* 第八张 */
.accessories{
  width: 1100px;
  margin: 0 auto;
}
/* 第九张 */
.idskinservice{
  width: 1100px;
  margin: 0 auto;
}





</style>
