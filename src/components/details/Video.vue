<template>
  <div>
    <!-- video组件 -->
    <div class="video">
      <div class="video_auto">
        <ul>
          <li v-for="(video_auto, index) in videos_auto" :key="index">
            <p>{{video_auto.p}}</p>
            <p v-html="video_auto.videoUrl"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vueVideo: "../../../static/video/Video_2019-06-17_143421.mp4",
      videos_auto: [
        {
          p: "IDskin Cut Device Installed Video",
          name: "IDskinTest",
          videoUrl:
            '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=s08844ky2kq" allowFullScreen="true"></iframe>'
        },
        {
          p: "IDskin Cut Software Installed Video",
          videoUrl:
            '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=o08854h5qbz" allowFullScreen="true"></iframe>'
        },
        {
          p: "IDskin Cut System Operation Video",
          videoUrl:
            '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=d0885hf19n2" allowFullScreen="true"></iframe>'
        },
        {
          p: "IDskin Cut System Installed Film Video ",
          videoUrl:
            '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=v0885t67fj3" allowFullScreen="true"></iframe>'
        },
        // {
        //   p: "IDskin手机膜定制系统材料充值",
        //   videoUrl: '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=q08856sn425" allowFullScreen="true"></iframe>'
        // },
        {
          p: "IDskin Cut Device Knife Head Installed Video",
          videoUrl:
            '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=j088488ta6u" allowFullScreen="true"></iframe>'
        }
      ]
    };
  }
};
</script>
<style scope>
.video {
  width: 100%;
  min-width: 1100px;
}
.video_auto {
  width: 1100px;
  margin: 0 auto;
}
.video_auto iframe {
  width: 100%;
  height: 620px;
}
.video_auto p {
  font-size: 45px;
  margin: 15px 0;
}
.txp_tipbar .txp_text {
  display: none;
}
</style>