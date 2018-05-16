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
            src: "https://qn.wshls.acgvideo.com/live-qn/621526/live_8120016_6048104.m3u8?wsSecret=38bb1d7b7f8297bd1ce02574ce61b0d7&wsTime=1526370684"
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
