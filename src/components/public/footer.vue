<template>
  <div id="footer">
    <footer class="footer_100 clearfix">
      <div class="footer_100_auto clearfix">
        <!-- 左边 -->
        <!-- 左边的上面 -->
        <div class="left_footer clearfix">
          <div class="left_up">
            <p>Beijing Address：</p>
            <ul class="clearfix">
              <li>Floor 5th and 6thChina Hangfa building</li>
              <li>No.9 Yongxiang North RoadHaidian</li>
              <li>DistrictBeijing . China.</li>
            </ul>
          </div>
          <!-- 左边的下面 -->
          <div class="left_up">
            <p>Guangzhou Address</p>
            <ul class="clearfix">
              <li>Room 1208,12th floor Vertical City</li>
              <li>Jiangnan South Avenue Guangzhou</li>
              <li>Guangdong, China</li>
            </ul>
          </div>
        </div>
        <div class="right_footer">
          <!-- <liuyan></liuyan> -->
        </div>
      </div>
    </footer>

    <!-- <liuyan></liuyan> -->
  </div>
</template>

<script>
import liuyan from "./liuyan";
export default {
  name: "id-skin-footer",
  
  components: {
    liuyan
  }
};
</script>

<style scope>

.footer_100 {
  width: 100%;
  min-width: 1100px;
  background: #0069ac;
}
.footer_100_auto {
  width: 1100px;
  margin: 0 auto;
  padding: 90px;
  box-sizing: border-box;
}
.left_up:nth-child(1) {
  margin-bottom: 80px;
}
.left_up p {
  font-size: 26px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
}
.left_up li {
  font-size: 20px;
  color: #fff;
  margin-bottom: 5px;
}
</style>