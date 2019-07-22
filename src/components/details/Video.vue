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
          p: "IDskin cut machine unboxing and installation",
          videoUrl:
            '<iframe src="https://player.vimeo.com/video/344223202" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
        },
        {
          p: "IDskin cut APP installation",
          videoUrl:
            '<iframe src="https://player.vimeo.com/video/344223511" width="640" height="1138" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
        },
        {
          p: "IDskin replace cutting blade ",
          videoUrl:
            '<iframe src="https://player.vimeo.com/video/344223627" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
        },
        {
          p: "IDskin cut machine operation ",
          videoUrl:
            '<iframe src="https://player.vimeo.com/video/344223673" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
        },
        // {
        //   p: "IDskin手机膜定制系统材料充值",
        //   videoUrl: '<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=q08856sn425" allowFullScreen="true"></iframe>'
        // },
        {
          p: "IDskin film installation",
          videoUrl:
            '<iframe src="https://player.vimeo.com/video/344223748" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
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