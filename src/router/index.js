import Vue from 'vue'
import Router from 'vue-router'
import flvplayer from '@/components/flvplayer'
import hlsplayer from '@/components/hlsplayer'
import vuevideoplayer from '@/components/vue-video-player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuevideoplayer',
      component: vuevideoplayer
    }
  ]
})
