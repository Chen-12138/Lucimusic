<template>
    <div class="header shadow">
        <div class="container flex-row">
            <div class="logo"><a href="#">Lucifer</a></div>
            <ul class="nav flex-row">
                <router-link tag="li" to="/home">发现音乐</router-link>
                <router-link tag="li" to="/rank">排行榜</router-link>
                <router-link tag="li" to="/playlist">歌单</router-link>
                <router-link tag="li" to="/singer">歌手</router-link>
                <router-link tag="li" to="/video">视频</router-link>
                <router-link tag="li" to="/mv">MV</router-link>
            </ul>
            <div class="search">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div class="userbox">
                <div class="line"></div>
                <div class="no-login">
                    登录
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Header'
}
</script>

<style scoped>
/* home页面 */
.header{width: 100%;height: 70px;background-color: #fff;position: fixed;z-index: 1000;}
.header .logo{display: flex;width: 146px;margin-right: 30px;align-items: center;}
.header .logo a{font-size: 20px;font-weight: bold;display: block;height: 70px;line-height: 70px;}
.header .nav{flex: 1;}
.header .nav li{height: 100%;padding: 0 15px;cursor: pointer;line-height: 70px;height: 70px;}
.header .nav .router-link-active{color: #fa2800;border-bottom: 1px #fa2800 solid;}
.header .search{display: flex;height: 100%;align-items: center;}
.header .search i{font-size: 22px;color: #161e27;padding: 0 15px;cursor: pointer;}
.header .userbox{display: flex;}
.header .userbox .line{height: 22px;width: 1px; background:#e1e1e1;}
.header .userbox .no-login{padding-left: 20px;}
</style>