<template>
  <div id="agent">
    <!--banner图-->
    <banner :bannerImg="bannerImg">
      <p>Exclusive Agent</p>
    </banner>
    <!-- <contact-us></contact-us> -->

    <!-- 
        We are developing exclusive regional and national 
        agents all over the world, if you already have 
        distribution channel or you are strong wholesaler, 
        contact us to make money together !!! 
    -->

    <div class="contact_us">
      <div class="contact_us_auto">
        <div class="contact_us_auto_one">
          <p>
            We are developing exclusive regional and national
            agents all over the world, if you already have
            distribution channel or you are strong wholesaler,
            <span>contact us to make money together !!!</span>
          </p>
        </div>
        <!-- 
            Distributor Customer 
            Management 
        -->
        <div class="Distributor">
          <span>
            Distributor Customer
            <br>Management
          </span>
        </div>

        <div class="Distributor_customer">
          <p>
            Distributor customer management system can allows
            <br>distributors to easily manage their customers cutting
            <br>situation and recharge situation
          </p>
          <span>learn more >></span>
        </div>
      </div>
    </div>
    <div class="agent_in_Israel">
      <p>
        We have agent in Israel and Italy now !
        <br>If you want to be our agent, contact us
      </p>
    </div>
  </div>
</template>
<script>
import banner from "../public/banner";
import contactUs from '../details/Contact_us'
export default {
  data() {
    return {
      bannerImg: "../../static/img/agent_bg_one.jpg"
    };
  },
  components: {
    banner,
    contactUs
  }
};
</script>
<style scope>
#agent .index_banner_auto {
  text-align: center;
  font-size: 90px;
  font-weight: bold;
  color: #fff;
}

#agent .index_banner_auto p {
  margin-top: 260px;
}

.contact_us {
  width: 100%;
  min-width: 1100px;
}

.contact_us_auto {
  width: 1100px;
  margin: 0 auto;
}

.contact_us_auto_one {
  width: 100%;
  border: 1px solid #0084d8;
  border-radius: 30px;
  padding: 50px 60px;
  box-sizing: border-box;
  color: #0084d8;
  text-align: center;
  margin: 100px 0;
  line-height: 60px;
}

.contact_us_auto_one p {
  font-size: 40px;
}

.contact_us_auto_one span {
  font-size: 50px;
  font-weight: bold;
}

.Distributor {
  background: url("../../../static/img/agent_bg_two.jpg") center no-repeat;
  background-size: 100%;
  text-align: center;
  padding: 120px 100px;
  box-sizing: border-box;
}

.Distributor span {
  background: rgba(3, 133, 216, 0.85);
  color: #fff;
  font-weight: bold;
  font-size: 70px;
  display: inline-block;
  padding: 110px 40px;
  box-sizing: border-box;
}

.Distributor_customer {
  font-size: 43px;
  text-align: center;
  margin: 80px 0px;
}

.Distributor_customer p {
  line-height: 60px;
  margin-bottom: 40px;
}

.Distributor_customer span {
  line-height: 60px;
  color: #fff;
  background: #0084d8;
  font-weight: bold;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 50px;
  margin-top: 40px;
}

.agent_in_Israel {
  background: url("../../../static/img/agent_bg_three.jpg") center no-repeat;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  padding: 120px 0;
  min-width: 1100px;
}
</style>
