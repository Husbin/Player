# player

> [http://easywork.xin/2018/05/05/practice-1/](h5 && PC直播方案)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Demo中三个组件介绍

### flvplayer
使用flvjs可在PC端直接播放B站视频

### hlsplayer
使用原生h5`<video>`，仅支持ios设备

### vue-video-player
使用`vue-video-player(videojs)` + `videojs-contrib-hls`,支持绝大部分PC、移动设备。

### 切换
没做，直接在/router/index.js中手动切换路由。

