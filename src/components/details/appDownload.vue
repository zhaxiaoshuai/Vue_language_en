<template>
  <div>
    <banner :bannerImg="bannerImg">
    </banner>
    <div class="container clearfix">
      <div class="downloadsColor" v-for="(Appdownload,index) in Appdownloads" :key="index">
        <!--<img src="./images/anzhuo.png" alt="">-->
        <img src="../../../static/img/anzhuo.png" alt />
        <!--<p>Android蓝牙切割版</p>-->
        <p>{{Appdownload.pText}}</p>
        <span>{{Appdownload.spanText}} &nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a :href="Appdownload.aHref">Download now</a>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../public/banner";
export default {
  name: "appDownload",
  data() {
    return {
      bannerImg: "../../static/img/downloadAppBanner.jpg",
      Appdownloads: [
        {
          pText: "New Update IDskin-Bluetooth",
          spanText: "VersionModel：V1.00 (12.0MB)",
          aHref: "../../../static/en/2019.12.25-IDskin_Cut_Release.apk"
        },
    
      ]
    };
  },
  components: {
    banner
  }
};
</script>

<style scoped>
.container {
  width: 1100px;
  margin: 0 auto;
  padding: 30px 0;
  box-sizing: border-box;
}
.downloadsColor {
  background: #f3f7ff;
  padding: 20px 20px;
  box-sizing: border-box;
  text-align: center;
  margin-right: 20px;
  margin-top: 20px;
  width: 53%;
  float: left;
}
.downloadsColor img {
  max-width: 30%;
  float: left;
  padding-right: 20px;
}
.downloadsColor p {
  float: left;
  font-size: 25px;
}
.downloadsColor span {
  font-size: 19px;
  float: left;
  margin-top: 15px;
  color: #a7a8a9;
}
.downloadsColor a {
  color: #26d9a8;
  font-size: 20px;
  float: left;
  margin-top: 15px;
}
</style>
