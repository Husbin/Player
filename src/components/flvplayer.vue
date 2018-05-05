<template>
  <video id="videoElement" style="width: 100%"></video>
</template>

<script>
  import flvjs from 'flv.js/dist/flv'
  export default {
    name: "flvplayer",
    mounted(){
      if (flvjs.isSupported()) {
        let videoElement = document.getElementById('videoElement');
        let flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: 'https://js.live-play.acgvideo.com/live-js/316521/live_30116877_9419411.flv?wsSecret=0f3b8d7ea6150aad8afb0d3b07d9287f&wsTime=1525504329'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
      }
    }
  }
</script>

<style scoped>

</style>
