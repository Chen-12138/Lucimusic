<template>
   <!-- player-bar -->
    <div class="player-bar shadow flex-row">
        <div class="avatar">
            <img alt="nicemusic" src="https://p1.music.126.net/OjItC1KtO-Jg_lBVqsihkQ==/109951165341263996.jpg">
        </div>
        <div class="info">
            <h2 class="ellipsis">无人知晓</h2>
            <p class="ellipsis">田馥甄</p>
        </div>
        <div class="player-btn">
            <i class="iconfont icon-shangyishou"></i>
            <i class="iconfont icon-bofang1"></i>
            <i class="iconfont icon-xiayishou"></i>
        </div>
        <div class="progress-wrap">
            <p class="current-time">00:03</p>
            <div class="progress-bar-wrap">
                <div class="progress-bar">
                    <div class="bar-inner">
                        <div class="progress"></div>
                        <div class="progress-btn"></div>
                    </div>
                </div>
            </div>
            <p class="duration-time">04:48</p>
        </div>
        <div class="voice-wrap">
            <i class="iconfont icon-shengyin"></i>
            <div class="progress-bar">
                <div class="bar-inner">
                    <div class="progress"></div>
                    <div class="progress-btn"></div>
                </div>
            </div>
        </div>
        <div class="tool">
            <i class="iconfont icon-liebiaoxunhuan"></i>
            <i class="iconfont icon-geci"></i>
            <i class="iconfont icon-bofangliebiao"></i>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* player-bar */
.player-bar{width: 100%;height: 72px;background: #fff;position: fixed;bottom: 0;right: 0;left: 0;z-index: 8000;padding: 0 10px 0 20px;justify-content: space-between;}
.player-bar .avatar{width: 60px;height: 60px;border-radius: 5px;margin-right: 15px;}
.player-bar .avatar img{width: 60px;height: 60px;border-radius: 5px;}
.player-bar .info{margin-right: 10px;flex-shrink: 0;width: 120px;}
.player-bar .info h2{font-size: 14px;color: #333;margin-bottom: 15px;}
.player-bar .info p{font-size: 12px;color: #999;}
.player-bar .player-btn{display: flex;align-items: center;}
.player-bar .player-btn .icon-shangyishou{font-size: 35px;cursor: pointer;}
.player-bar .player-btn .icon-bofang1{font-size: 50px;margin: 0 5px; cursor: pointer}
.player-bar .player-btn .icon-xiayishou{font-size: 35px;cursor: pointer}
.player-bar .progress-wrap{width: 400px;height: 100%;display: flex;align-items: center;margin-left: 80px;flex: 1;}
.player-bar .progress-wrap p{font-size: 14px;}
.progress-bar-wrap{width: 100%;height: 100%;display: flex;align-items: center;}
.progress-bar{position: relative;width: 100%;flex: 1;height: 3px;background: rgba(0,0,0,0.05);border-radius: 2px;cursor: pointer;margin: 0 25px;}
.progress-bar .bar-inner{position: absolute;top: 0;left: 0;display: flex;align-items: center;}
.progress-bar .bar-inner .progress{background: #fa2800;height: 3px;border-radius: 2px;width: 12px;}
.progress-bar .bar-inner .progress-btn{position: absolute;z-index: 100;right: -12px;width: 12px;height: 12px;top: -4.5px;background: #fa2800;box-shadow: 0 0 15px 0 rgba(0,0,0,.15);transition: all .3s;border-radius: 50%;}
.progress-bar .bar-inner .progress-btn::after{position: absolute;content: '';top: 50%;left: 50%;transform: translate(-50%,-50%);width: 8px;height: 8px;background: #fff;border-radius: 50%;}
.player-bar .voice-wrap{width: 200px;margin-left: 40px;display: flex;align-items: center;margin-right: 60px;}
.player-bar .voice-wrap .icon-shengyin{font-size: 22px;font-weight: 700;cursor: pointer;}
.player-bar .tool .iconfont{margin: 0 10px;cursor: pointer;}
.player-bar .tool .icon-liebiaoxunhuan{font-size: 30px;}
.player-bar .tool .icon-geci{font-size: 35px;position: relative;top: 1px;}
.player-bar .tool .icon-bofangliebiao{font-size: 22px;top: -2.5px;position: relative;}
</style>