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
            <div class="search" @click="openSearchWrap">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div class="line"></div>
            <div class="userbox">
                <div class="is-login flex-row" v-if="loginStatus">
                    <el-avatar class="avatar" :src="userInfo.avatarUrl"></el-avatar>
                    <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link" style="cursor:pointer;">
                        {{userInfo.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="personal">个人主页</el-dropdown-item>
                        <el-dropdown-item command="cancel">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="no-login" v-else @click="handleLogin">
                    登录
                </div>
            </div>
            <div class="search-wrap flex-center" :class="[searchOpenClass, searchCloseClass]">
                <div class="overlay" @click="closeSearchWrap"></div>
                <div class="search-body">
                    <div class="search-content">
                        <div class="search-cover">
                            <div class="bg"></div>
                            <div class="search-form">
                                <input type="text" 
                                placeholder="请输入搜索关键词并按回车" class="text"
                                v-model="keyword"
                                v-on:keyup.enter="search"
                                >
                            </div>
                        </div>
                        <div class="search-item">
                            <div class="title flex-row">
                                <span>历史搜索</span>
                                <p @click="clearSearch">清空</p>
                            </div>
                            <ul class="tags">
                                <li v-for="item in searchHistory" :key="item">
                                    <a class="btn flex-row" @click="tag(item)">
                                        {{ item }}
                                        <span class="close-dark" @click.stop="deleteItem(item)"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="search-item">
                            <div class="title flex-row">
                                <span>热门搜索</span>
                            </div>
                            <ul class="tags">
                                <li v-for="item in hots" :key="item.first">
                                    <a class="btn flex-row" @click="tag(item.first)">
                                        {{ item.first }}
                                        <!-- <span class="close-dark"></span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Header',
    data() {
        return {
            keyword: '',
            searchOpenClass: '',
            searchCloseClass: '',
            hots: [],
        }
    },
    computed: {
        ...mapGetters(['userInfo', 'loginStatus', 'searchHistory'])
    },
    methods: {
        //展开搜索框
        openSearchWrap (){
            this.searchOpenClass = 'open'
            this.searchCloseClass = ''
        },
        // 关闭搜索框
        closeSearchWrap (){
            this.searchOpenClass = '',
            this.searchCloseClass = 'close'
        },
        // 点击登录跳转
        handleLogin (){
            this.$router.push('/login')
        },
        // 下拉框点击事件
        handleCommand (command){
            if (command == 'personal') {
                this.$router.push('/personal')
            } else {
                window.sessionStorage.clear();
                location.reload();
            }
        },
        // 搜索
        search() {
            if (this.keyword.split(' ').join('').length !== 0) {
                this.closeSearchWrap()
                this.$router.push({
                    name: 'search',
                    query: {
                        keyword: this.keyword
                    }
                })
                this.saveSearchHistory(this.keyword)
                this.keyword = ''
            }
        },
        // 点击标签搜索
        tag(keyword) {
            this.saveSearchHistory(keyword)
            this.closeSearchWrap()
            this.$router.push({
                name: 'search',
                query: {
                    keyword
                }
            })
        },
        // 获取热搜列表
        async getSearchHot() {
            try {
                let res = await this.$api.getSearchHot()
                if (res.code === 200) {
                    // console.log(res)
                    this.hots = res.result.hots
                }
            } catch (error) {
                console.log(error)
            }
        },
        // 删除单个历史搜索
        deleteItem(item) {
            this.deleteSearchHistory(item)
        },
        // 清空搜索历史
        clearSearch() {
            this.clearSearchHistory()
        },
        ...mapActions([
            'saveSearchHistory',
            'deleteSearchHistory',
            'clearSearchHistory'
        ])
    },
    mounted() {
        this.getSearchHot()
    }
}
</script>

<style scoped>
/* home页面 */
.header{width: 100%;height: 70px;background-color: #fff;position: fixed;z-index: 1000;}
.header .logo{display: flex;width: 146px;margin-right: 30px;align-items: center;}
.header .logo a{font-size: 20px;font-weight: bold;display: block;height: 70px;line-height: 70px;}
.header .nav{flex: 1;}
.header .nav li{padding: 0 15px;cursor: pointer;line-height: 1.5;vertical-align: middle;}
.header .nav .router-link-active{color: #fa2800;border-bottom: 1px #fa2800 solid;}
.header .search{display: flex;height: 100%;align-items: center;}
.header .search i{font-size: 22px;color: #161e27;padding: 0 15px;cursor: pointer;}
.header .userbox{display: flex;}
.header .line{height: 22px;width: 1px; background:#e1e1e1;}
.header .userbox .no-login{padding-left: 20px;cursor: pointer;}
.avatar{margin-left: 15px;margin-right: 15px;}

/* search */
.header .search-wrap{position: fixed;pointer-events: none;width: 100%;height: 100vh;top: 0;left: 0;}
.header .search-wrap .overlay{width: 100%;height: 100vh;background: rgba(120, 129, 147, 0.22);opacity: 0;transition: opacity, 0.3s;position: absolute;top: 0;left: 0;}
.header .search-wrap.open{z-index: 1031;}
.header .search-wrap.open .overlay{opacity: 1;pointer-events: auto;backdrop-filter: blur(10px);position: absolute;top: 0;left: 0;}
.header .search-wrap.open .search-body{animation-name: tips-open;-webkit-animation-name: tips-open;pointer-events: auto;}
.header .search-wrap.close .search-body{animation-name: tips-close;-webkit-animation-name: tips-close;}
.header .search-wrap .search-body{position: relative;opacity: 0;width: 100%;max-width: 790px;animation-duration: .3s;animation-fill-mode: forwards;}
.header .search-wrap .search-body .search-content{background: #fff;position: relative;box-shadow: 0 10px 50px -5px rgba(6,39,67,0.12);height: 480px;border-radius: 4px;}
.header .search-wrap .search-body .search-content .search-cover{position: relative;padding: 3rem;overflow: hidden;}
.header .search-wrap .search-body .search-content .search-cover .bg{background-image: url('../../assets/images/personal.jpg');background-size: cover; background-position: center; position: absolute;top: 0;left: 0;bottom: 0;right: 0;filter: blur(8px);}
.header .search-wrap .search-body .search-content .search-cover .search-form{position: relative;padding: 3rem 0;}
.header .search-wrap .search-body .search-content .search-cover .search-form .text{display: block;width: 100%;background-clip: padding-box;color: #fff;
font-size: 0.9375rem;line-height: 1.5;padding: 0.625rem 0.75rem;height: calc(1.5em + 1.71875rem + 2px);text-align: center;
font-weight: normal;border-color: transparent;background-color: rgba(255,255,255,0.03);transition: all 0.3s ease;
border-radius: 5px; outline: none;border: 0;}
.header .search-wrap .search-body .search-content .search-cover .search-form .text::-webkit-input-placeholder{color: #fff;}
.header .search-wrap .search-body .search-content .search-item{padding: 1.5rem 3rem;}
.header .search-wrap .search-body .search-content .search-item .title{margin-bottom: 15px;}
.header .search-wrap .search-body .search-content .search-item .title span{flex: 1;font-size: 15px;}
.header .search-wrap .search-body .search-content .search-item .title p{color: #fa2800;cursor: pointer;}
.header .search-wrap .search-body .search-content .search-item .tags{width: 100%;margin: 0 -0.25rem;display: flex;flex-wrap: wrap;align-items: center;}
.header .search-wrap .search-body .search-content .search-item .tags li{padding: 0.25rem;cursor: pointer;}
.header .search-wrap .search-body .search-content .search-item .tags li .btn{font-weight: 400;color: #6d7685;background-color: #f4f4f5;text-align: center;vertical-align: middle;
font-size: 0.75rem;border-radius: 4px;padding: 0.3125rem 0.75rem;line-height: 1.5;transition: color 0.15s;}
.header .search-wrap .search-body .search-content .search-item .tags li .btn:hover{color: #161e27;}
.header .search-wrap .search-body .search-content .search-item .tags li .btn:hover .close-dark{opacity: 1;}
.header .search-wrap .search-body .search-content .search-item .tags li .close-dark{background: url('../../assets/images/close-dark.svg') no-repeat center;background-size: contain; 
width: 14px;height: 14px;display: inline-block;margin-left: 8px;opacity: 0.7;}

/* search动画 */
@keyframes tips-open {
    0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 50px, 0);
    transform: translate3d(0, 50px, 0)
    }
    100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
    }
}
@keyframes tips-close {
    0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
    }
    100% {
    opacity: 0;
    -webkit-transform: translate3d(0, 50px, 0);
    transform: translate3d(0, 50px, 0)
    }
}
</style>