<template>
  <div>
    <section id="home-zx-form">
      <form>
        <div class="zxf-left">
          <ul>
            <li>
              <input
                type="text"
                placeholder="Name"
                maxlength="10"
                id="fly-name"
                name="name"
                class="zxf-input icon-zx-1"
                v-model="name"
              >
            </li>
            <li>
              <input
                type="text"
                placeholder="Phone Number"
                id="fly-number"
                name="phoneNumber"
                class="zxf-input icon-zx-3"
                v-model="phoneNumber"
              >
            </li>
            <li>
              <input
                type="text"
                placeholder="Email"
                id="fly-email"
                name="email"
                maxlength="30"
                class="zxf-input icon-zx-4"
                v-model="email"
              >
            </li>
            <li>
              <input
                type="text"
                placeholder="Country"
                id="fly-country"
                name="country"
                maxlength="30"
                class="zxf-input icon-zx-4"
                v-model="country"
              >
            </li>
          </ul>
        </div>
        <div class="zxf-right float_right">
          <textarea
            class="zxf-text"
            id="fly-content"
            name="content"
            maxlength="500"
            placeholder="Message"
            v-model="content"
          ></textarea>
          <br>
          <button type="button" class="zxf-btn hover-opacity-8" @click="Submit">Submit</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
      country: "",
      content: "",
    };
  },
  created() {
    // https://www.vue-js.com/api/v1/topics
    axios
      .get("")
      .then(res => {})
      .catch(err => {});
  },

  methods: {
    Submit() {
      let { name, phoneNumber, email, country, content } = this;
      // switch (!name || !phoneNumber || !email || !country || !content) {
      //   case !name:
      //     alert("请输入姓名");
      //     break;
      //   case !phoneNumber:
      //     alert("请输入手机号");
      //     break;
      //   case !email:
      //     alert("请输入电子邮件");
      //     break;
      //   case !country:
      //     alert("请输入国家");
      //     break;
      //   case !content:
      //     alert("请输入内容");
      //     break;
      // }

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
.left_footer {
  float: left;
}
.right_footer {
  float: right;
}
#fly-content {
  background: none;
  width: 400px;
  /* height: 90px; */
  border: 1px solid #fff;
  color: #fff;
  /* padding: 15px 0 60px 20px; */
  padding-left: 15px;
  line-height: 55px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 5px;
}
.zxf-btn {
  background: #fff;
  width: 400px;
  height: 55px;
  color: #0069ac;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  margin-top: 20px;
  line-height: 55px;
  outline: none;
}
.right_footer input {
  background: none;
  border: 1px solid #fff;
  color: #fff;
  width: 400px;
  /* height: 45px; */
  /* padding: 15px; */
  line-height: 50px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 15px;
  box-sizing: border-box;
}
input::-webkit-input-placeholder {
  color: #fff;
  font-size: 16px;
  line-height: 45px;
}
textarea::-webkit-input-placeholder {
  color: #fff;
  font-size: 16px;
  line-height: 45px;
}
</style>