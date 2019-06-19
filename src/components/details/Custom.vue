<template>
  <div id="Custom">
    <!-- 导航下面banner图 -->
    <banner :bannerImg="bannerImg">
      <p>Accept OEM, ODM</p>
    </banner>
    <!-- Custom介绍
    for IDskin Cut Software, 
    Machine, Material, Package, Cloth, 
    Tools and so on.
    -->
    <div class="custom_oem_odm clearfix">
      <div class="custom_oem_odm_auto clearfix">
        <p>
          <span>OEM, ODM</span>
          for IDskin Cut Software,
          <br>Machine, Material, Package, Cloth,
          <br>Tools and so on.
        </p>
        <img src="../../assets/img/Custom_Img_three.jpg" alt="">
      </div>
    </div>

    <!-- Welcome to cooperate with you！ -->
    <div class="welconme_cooperate clearfix">
        <p>Welcome to cooperate with you！</p>
    </div>
  </div>
</template>
<script>
import banner from "../public/banner";
export default {
  name: "Custom",
  data() {
    return {
      bannerImg: "../../../static/img/Custom_Img_one.jpg"
    };
  },
  components: {
    banner
  }
};
</script>
<style scope>
/* #Custom {
  margin-top: 157px;
} */
#Custom .index_banner_auto p {
  color: #fff;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin: 280px 0;
}
.custom_oem_odm {
  width: 100%;
  min-width: 1100px;
  overflow: hidden;
  background: url("../../assets/img/Custom_Img_two.jpg") center no-repeat;
  padding: 0 0 60px 0
}
.custom_oem_odm_auto {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  font-size: 60px;
}
.custom_oem_odm_auto span{
    font-weight: bold;
    color:#048be9;
}
.custom_oem_odm_auto p{
    padding: 60px 0;
    box-sizing: border-box
}
.custom_oem_odm_auto img{
    display: block;
    margin: 0 auto;
}
.welconme_cooperate{
    width: 100%;
    min-width: 1100px;
    background: url('../../assets/img/Custom_Img_four.jpg') center no-repeat;
    height: 400px;;
}
.welconme_cooperate p{
    text-align: center;
    color: #fff;
    font-size: 60px;
    padding: 160px 0;
    box-sizing: border-box;
    font-weight: bold
}
</style>