<template>
  <div id="contact_us">
    <div class="contact_us_liuyan">
      <div class="contact_us_liuyan_auto">
        <div class="contact_us_liuyan_auto_980">
          <section id="home-zx-form">
            <form>
              <div class="zxf-left float_left">
                <ul>
                  <li>
                    <label for="fly-name">
                      <p>Name:*</p>
                    </label>
                    <br>
                    <input
                      type="text"
                      maxlength="10"
                      id="fly-name"
                      name="name"
                      class="zxf-input icon-zx-1"
                      v-model="name"
                    >
                  </li>
                  <li>
                    <label for="fly-number">
                      <p>TelPhone Number:*</p>
                    </label>
                    <input
                      type="text"
                      id="fly-number"
                      name="phoneNumber"
                      class="zxf-input icon-zx-3"
                      v-model="phoneNumber"
                    >
                  </li>
                  <li>
                    <label for="fly-email">
                      <p>Email:*</p>
                    </label>
                    <input
                      type="text"
                      id="fly-email"
                      name="email"
                      maxlength="30"
                      class="zxf-input icon-zx-4"
                      v-model="email"
                    >
                  </li>
                  <li>
                    <label for="fly-country">
                      <p>Country:*</p>
                    </label>
                    <input
                      type="text"
                      id="fly-country"
                      name="country"
                      maxlength="30"
                      class="zxf-input icon-zx-4"
                      v-model="country"
                    >
                  </li>
                  <li>
                    <label for="fly-content">
                      <p>Message:*</p>
                    </label>
                    <textarea
                      class="zxf-text"
                      id="fly-content"
                      name="content"
                      maxlength="500"
                      v-model="content"
                    ></textarea>
                  </li>
                  <li>
                    <button type="button" class="zxf-btn hover-opacity-8" @click="Submit">Submit</button>
                  </li>
                </ul>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../public/banner";
export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
      country: "",
      content: ""
    };
  },
  components: {
    banner
  },
  methods: {
    Submit() {
      let { name, phoneNumber, email, country, content } = this;

      if (!name || !phoneNumber || !email || !country || !content) {
        alert("请完善信息");
        return;
      } else {
        alert("留言成功，我们将尽快联系您");
        this.name = this.phoneNumber = this.email = this.country = this.content =
          "";
        return;
      }
    }
  }
};
</script>

<style scope>
#contact_us .index_banner {
  color: #fff;
  text-align: center;
}
#contact_us .index_banner p {
  font-size: 75px;
  font-weight: bold;
  margin-top: 120px;
}
#contact_us .index_banner span {
  font-size: 35px;
}
.contact_us_liuyan {
  width: 100%;
  min-width: 1100px;
}
.contact_us_liuyan_auto {
  width: 1100px;
  margin: 0 auto;
  background: #fff;
}

.contact_us_liuyan_auto_980 {
  width: 985px;
  margin: 0 auto;
  text-align: left;
}
.contact_us_liuyan_auto_980 label p {
  font-size: 30px;
  float: left;
  margin: 20px 0;
}
#contact_us .zxf-left li input {
  border: 1px solid #000;
  width: 980px;
  height: 100px;
  border-radius: 20px;
  padding-left: 15px;
  box-sizing: border-box;
}
#contact_us textarea {
  border: 1px solid #000;
  color: #000;
  width: 980px;
  height: 300px;
  border-radius: 20px;
  padding-left: 15px;
  box-sizing: border-box;
}
#contact_us button {
  background: #0069ac;
  color: #fff;
  display: block;
  margin: 20px auto;
}
</style>