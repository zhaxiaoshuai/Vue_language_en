<template>
  <div id="header_relative clearfix">
    <header class="header clearfix">
      <!-- 上方蓝色 -->
      <div class="header-up clearfix">
        <div class="header-up-auto">
          <!-- 左侧电话 -->
          <ul class="phone clearfix">
            <li v-for="(header, index) in headers" :key="index">
              <img :src="header.imgs" alt="icon" />
              <span>{{header.content}}</span>
            </li>
            <li style="line-height:30px;">
              <a href="http://cn.id-skin.com/" target="blank" style="color:#fff;">中文站</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 下方白色 PC -->
      <div class="header-down clearfix">
        <div class="header-down-auto clearfix" v-if="isshow">
          <ul class="header-down-left clearfix">
            <li>
              <img src="../../../static/img/logo.png" alt="ID-skin_logo" @click="goTo('/index')" />
            </li>
          </ul>
          <ul class="header-down-right clearfix">
            <router-link
              v-for="(header_down, index) in headers_down"
              :key="index"
              :to="header_down.url"
              tag="li"
            >{{header_down.text}}</router-link>
          </ul>
        </div>
        <!-- 下方白色 移动 -->
        <div class="move" v-if="!isshow">
          <div class="imgbox">
            <img src="../../../static/img/logo.png" style="float:left" alt />
            <img
              src="../../../static/img/menu.png"
              style="float:right;width:50px"
              @click="isPhoneShow2"
              alt
            />
          </div>
          <keep-alive>
            <div v-if="isPhoneShow" class="ab kuan100">
              <ul  @click="isPhoneShow2">
                <router-link
                  v-for="(item, index) in headers_down"
                  :key="index"
                  :to="item.url"
                  tag="li"
                >{{item.text}}</router-link>
              </ul>
            </div>
          </keep-alive>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "id-skin-head",
  mounted() {
    let offsetWidth =
      document.documentElement.offsetWidth || document.body.offsetWidth;
    if (offsetWidth < 1025) {
      this.isshow = false;
    }
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
    isPhoneShow2() {
      console.log(1);
      this.isPhoneShow = !this.isPhoneShow;
    }
  },
  data() {
    return {
      // 下标
      // 是否显示手机端导航
      isshow: true,
      isPhoneShow: false,
      // 蓝色导航部分 电话号码以及图片
      headers: [
        {
          imgs: "./static/img/phone.png",
          content: "Tel：+86 10 62494131   +86 20 80926815"
        },
        {
          imgs: "./static/img/email.png",
          content: "Email:daqin@chinee.com"
        }
      ],
      // 白色导航部分 菜单名称以及跳转的路由
      headers_down: [
        {
          text: "Home",
          url: {
            name: "index"
          }
        },
        {
          text: "About IDskin",
          url: {
            name: "AboutIDskin"
          }
        },
        {
          text: "IDskin Cut System",
          url: {
            name: "IDskinCutSystem"
          }
        },
        {
          text: "Custom&OEM",
          url: {
            name: "Custom"
          }
        },
        {
          text: "Agent",
          url: {
            name: "Agent"
          }
        },
        {
          text: "Video",
          url: {
            name: "Video"
          }
        },
        {
          text: "AppDownload",
          url: {
            name: "appDownload"
          }
        }
      ]
    };
  }
};
</script>



<style scope>
.ab {
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 11111111;
  color: #666;
  background: #fff;
  text-align: center;
  font-size: 30px;
}
.ab .router-link-exact-active {
  background: #f2f2f2;
}
.kuan100 {
  width: 100%;
}
.ab li {
  padding: 0.1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  margin-top: 10px
}
.move {
  width: 80%;
  background: #ffffff;
  height: 100px;
  display: table;
  margin: 0 auto;
  position: relative;
}
.imgbox {
  display: table-cell;
  vertical-align: middle;
}
/* 点击更换的颜色 */
.router-link-active {
  color: #0084d8;
}
a {
  color: #000;
}
.header {
  width: 100%;
  min-width: 1100px;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 999999; */
}
/* 顶部蓝色导航 */
.header-up {
  width: 100%;
  background: #0084d7;
}

.header-up-auto {
  width: 1100px;
  margin: 0 auto;
}

.phone li {
  float: left;
  padding: 6px 0;
  color: #ffffff;
  font-size: 16px;
  vertical-align: middle;
  margin-right: 100px;
}
.phone li img {
  vertical-align: middle;
  margin-right: 15px;
}

.header-down {
  width: 100%;
  background: #ffffff;
}
/* 下方白色导航 */
.header-down-auto {
  width: 1100px;
  margin: 0 auto;
}
.header-down-auto .header-down-left {
  float: left;
}
.header-down-auto .header-down-right {
  float: right;
}
.header-down-auto li {
  float: left;
}
.header-down-left li img {
  padding: 30px 0;
}
.header-down-right li {
  line-height: 111px;
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
}
.header-down-right li:nth-child(1) {
  margin-left: 20px;
}
</style>
