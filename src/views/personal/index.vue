<template>
    <div class="fluid">
        <div class="personal-wrapper">
            <div class="banner">
    
            </div>
            <div class="person-main container">
                <div class="left">
                    <div class="user-box shadow">
                        <div class="background" style="background-image: url(&quot;http://p1.music.126.net/qVsCs9azzjSxydemeUZbFw==/109951164344553456.jpg&quot;);">
                        
                        </div>
                        <div class="card flex-row">
                            <div class="avatar">
                                <img :src="userInfo.avatarUrl">
                            </div>
                            <div class="info flex-between">
                                <p class="name">{{userInfo.nickname}}</p>
                                <div>
                                    <button class="sign-btn sign-btn-active">签到</button>
                                </div>
                            </div>
                        </div>
                        <p>{{ userDetail.signature }}</p>
                        <div class="profile">
                            <div class="tag">等级：{{userDetail.level}}</div>
                            <div class="tag">年龄：{{userProfile.birthday | getAstro}}</div>
                            <div class="tag">地区：</div>
                        </div>
                        <ul class="follow">
                            <li>动态<span>{{ userProfile.eventCount }}</span></li>
                            <li>关注<span>{{ userProfile.newFollows }}</span></li>
                            <li>粉丝<span>{{ userProfile.followeds }}</span></li>
                        </ul>
                        <div class="foot flex-center">
                            <a href="" class="router-link-active">个人设置</a>
                            <a href="" class="router-link-active">我的等级</a>
                        </div>
                    </div>
                </div>
                <div class="center shadow">
                    <div class="card-header flex-between">
                        <p class="flex-row">
                            听歌排行
                            <span>（累计听歌{{ userDetail.listenSongs }}首）</span>
                        </p>

                        <div class="tab flex-row">
                            <span :class="type == 1 ? 'active' : ''" @click="changeType(1)"
                            >最近一周</span>
                            <span class="line"></span>
                            <span :class="type == 0 ? 'active' : ''" @click="changeType(0)"
                            >所有时间</span>
                        </div>
                    </div>
                    <ArtistList :songs= "songs" />
                </div>
                <div class="right">
                    <div class="my module shadow">
                        <div class="card-header flex-row">
                            我创建的歌单
                        </div>
                        <div class="list">
                            <div class="item" v-for="item in myList" :key="item.id">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img :src="item.coverImgUrl" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>{{item.playCount | formatPlaycount}}</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">{{item.name}}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my collect module shadow">
                        <div class="card-header flex-row">
                            我收藏的歌单
                        </div>
                        <div class="list">
                            <div class="item" v-for="item in collectList" :key="item.id">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img :src="item.coverImgUrl" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>{{item.playCount | formatPlaycount}}</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">{{item.name}}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArtistList from '@/components/artistList'
import { mapGetters } from 'vuex'
export default {
    name: "Personal",
    data(){
        return {
            userDetail: {},
            userProfile: {},
            uid : -1,
            songs: [],
            type: 1,
            myList: [],
            collectList: []
        }
    },
    components:{
        ArtistList
    },
    computed: {
        ...mapGetters(['userInfo', 'loginStatus'])
    },
    mounted(){
        this.uid = this.userInfo.userId
        this.getUserDetail();
        this.getUserRecord();
        this.getUserPlaylist();
    },
    methods: {
        // 修改一周数据或者全部
        changeType(type) {
          this.type = type
          this.getUserRecord()
          console.log(this.songs)
        },
        // 获取用户信息
        async getUserDetail() {
            try {
                let res = await this.$api.getUserDetail(this.userInfo.userId)
                if (res.code === 200) {
                this.userDetail = res
                this.userProfile =  res.profile
                // console.log(this.userDetail)
                // console.log(this.userProfile)
                // this._initialize()
                }
            } catch (error) {
                console.log(error)
            }
        },
        // 获取用户播放记录
        async getUserRecord() {
            try {
                let res = await this.$api.getUserRecord(this.uid,this.type)
                if(res.code === 200){
                    // console.log(res)
                    if (this.type == 1) {
                        this.songs = this._normalizeSongs(res.weekData)
                        // console.log(this.songs)
                    } else {
                        this.songs = this._normalizeSongs(res.allData)
                        // console.log(this.songs)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        // 处理获取的歌曲记录
        _normalizeSongs(list) {
            let ret = []
            list.map(item => {
                // console.log(1)
                // console.log(item.song)
                ret.push(item.song)
            })
            // console.log(ret)
            return ret
        },
        // 获取用户歌单
        async getUserPlaylist() {
            try {
                let res = await this.$api.getUserPlaylist(this.uid);
                // console.log(res)
                let list = res.playlist
                let myList = []
                let collectList = []
                list.map(item => {
                    if (item.userId === this.uid) {
                        myList.push(item)
                    } else {
                        collectList.push(item)
                    }
                })
                this.myList = myList
                this.collectList = collectList
            } catch(error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
/* personal页面 */
.personal-wrapper{margin-top: -20px;}
.personal-wrapper .banner{width: 100%;height: 350px; background: url(/assets/images/personal.jpg);background-size: cover;background-attachment: fixed;background-position: center;}
.personal-wrapper .person-main{display: flex;align-items: flex-start;}
.personal-wrapper .person-main .left{width: 350px;position: relative;top: -60px;margin-right: 20px;}
.personal-wrapper .person-main .left .user-box{background: #fff;border-radius: 5px;padding-bottom: 30px;}
.personal-wrapper .person-main .left .user-box .background{width: 100%;height: 140px;border-radius: 5px 5px 0 0;background-size: cover;}
.personal-wrapper .person-main .left .user-box .card{margin-top: -20px;padding: 0 15px 0 30px;width: 100%;}
.personal-wrapper .person-main .left .user-box .card .avatar{width: 64px;height: 64px;flex-shrink: 0;z-index: 2;}
.personal-wrapper .person-main .left .user-box .card .avatar img{width: 100%;height: 100%;}
.personal-wrapper .person-main .left .user-box .card .info{width: 100%;padding-top: 20px;margin-left: 15px;}
.personal-wrapper .person-main .left .user-box .card .info{font-weight: 600;font-size: 16px;}
.personal-wrapper .person-main .left .user-box .card .info .sign-btn{padding: 3px 15px;font-size: 12px;color: #fff;border-radius: 30px;}
.personal-wrapper .person-main .left .user-box .card .info .sign-btn-active{background: #fa2800;cursor: pointer;border: 1px solid #fa2800;}
.personal-wrapper .person-main .left .user-box .profile{padding: 0 40px;margin-top: 10px;}
.personal-wrapper .person-main .left .user-box .profile .tag{position: relative;font-size: 13px;padding-left: 15px;display: flex;align-items: center;margin-bottom: 5px;}
.personal-wrapper .person-main .left .user-box .profile .tag::before{content: '';width: 6px;height: 6px;border-radius: 50%;
background: #fa2800;position: absolute;top: 50%;left: 0px;margin-top: -3px;}
.personal-wrapper .person-main .left .user-box .follow{list-style: none;display: flex;margin: 0 30px;margin-top: 15px;padding-top: 15px;border-top: 1px solid #f9f9ff;}
.personal-wrapper .person-main .left .user-box .follow li{width: 33%;text-align: center;font-size: 14px;color: #958ebb}
.personal-wrapper .person-main .left .user-box .follow li span{display: block;}
.personal-wrapper .person-main .left .user-box .foot{width: 100%;padding: 0 30px;margin-top: 30px;}
.personal-wrapper .person-main .left .user-box .foot a{display: block;width: 50%;text-align: center;margin: 0 3% 10px 3%;padding: 10px 0;background: #ff416c;background: linear-gradient(to right, #ff4b2b, #ff416c);color: #fff;border-radius: 5px;font-size: 14px;}
.personal-wrapper .person-main .center{width: 640px;background: #fff;margin-top: 40px;margin-right: 20px;border-radius: 5px;padding: 15px;}
.personal-wrapper .person-main .center .card-header{border-left: 3px solid #fa2800;height: 20px;padding-left: 1rem;margin-bottom: 15px;font-weight: bold;}
.personal-wrapper .person-main .center .card-header span{font-weight: 100;color: #666;font-size: 12px;}
.personal-wrapper .person-main .center .card-header .tab span{font-size: 12px;cursor: pointer;}
.personal-wrapper .person-main .center .card-header .tab span.active{color: #fa2800;}
.personal-wrapper .person-main .center .card-header .tab .line{width: 1px;height: 13px;background: #999;display: block;margin: 0 10px;}
/* right */
.personal-wrapper .person-main .right{width: 350px;border-radius: 5px;background: #fff;padding-bottom: 30px;margin-top: 40px;}
.personal-wrapper .person-main .right .my{padding-bottom: 5px;}
.personal-wrapper .person-main .right .module{padding: 15px;width: 100%;border-radius: 8px;margin-bottom: 20px;}
.personal-wrapper .person-main .right .card-header{border-left: 3px solid #fa2800;height: 20px;padding-left: 1rem;margin-bottom: 15px;font-weight: bold;}
.personal-wrapper .person-main .right .card-header span{font-weight: 100;color: #666;font-size: 12px;}
.personal-wrapper .person-main .right .list{display: flex;flex-wrap: wrap;}
.personal-wrapper .person-main .right .list .item{flex: 0 0 50%;max-width: 50%;padding: 0 15px 30px;}
.personal-wrapper .person-main .right .list .item img{width: 100%;height: 100%;}
.personal-wrapper .person-main .right .list .item .info{margin-top: 15px;}
.personal-wrapper .person-main .right .list .item .info h2{font-size: 14px;}
.personal-wrapper .person-main .right .list .item .wrapper{position: relative;}
.personal-wrapper .person-main .right .list .item .wrapper:hover{top:-3px; left: -1.5px; box-shadow: 0px 5px 10px 3px #ccc;}
.personal-wrapper .person-main .right .list .item .wrapper .cover{position: relative;}
.personal-wrapper .person-main .right .list .item .wrapper .cover .img{border-radius: 4px;overflow: hidden;width: 100%;height: 100%;}
.personal-wrapper .person-main .right .list .item .wrapper .cover .count{position: absolute;top: 1px;right: 16px;height: 24px;font-weight: 700;font-size: 12px;line-height: 24px;
background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;color: #fff;background-size: cover;padding: 9px;}
.personal-wrapper .person-main .right .list .item .wrapper .cover .count .arrow{display: block;border-width: 4px 0 4px 6px;border-style: solid;margin-right: 5px;
border-color: transparent transparent transparent #fff;}
</style>