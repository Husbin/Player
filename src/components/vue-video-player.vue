<template>
  <div class="item">
    <div class="player">
      <video-player class="vjs-custom-skin"
                    :options="playerOptions"
                    @ready="playerReadied">
      </video-player>
    </div>
  </div>
</template>

<script>
  import videojs from 'video.js'
  window.videojs = videojs
  require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
  export default {
        name: "vue-video-player",
    data() {
      return {
        playerOptions: {
          // videojs and plugin options
          height: '360',
          sources: [{
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "https://cn-jxjj-dx-live-01.live-play.acgvideo.com/live-bvc/live_20165629_5904889.m3u8?expires=1526111544&ssig=U_wsYr639DbZE6e6tDQdbA&oi=3658513157"
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          flash: { hls: { withCredentials: false }},
          html5: { hls: { withCredentials: false }},
        }
      }
    },
    methods: {
      playerReadied(player) {
        var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
        player.tech_.hls.xhr.beforeRequest = function(options) {
          // console.log(options)
          return options
        }
      }
    }
    }
</script>

<style scoped>

</style>
