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
                                <img src="http://p1.music.126.net/Ij8ErxLtHvHWex6lKM7npQ==/109951164293403998.jpg">
                            </div>
                            <div class="info flex-between">
                                <p class="name">Lucky_绝恋</p>
                                <div>
                                    <button class="sign-btn sign-btn-active">签到</button>
                                </div>
                            </div>
                        </div>
                        <div class="profile">
                            <div class="tag">等级：</div>
                            <div class="tag">年龄：</div>
                            <div class="tag">地区：</div>
                        </div>
                        <ul class="follow">
                            <li>动态<span>0</span></li>
                            <li>关注<span>0</span></li>
                            <li>粉丝<span>0</span></li>
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
                            <span>（累计听歌3729首）</span>
                        </p>

                        <div class="tab flex-row">
                            <span class="active">最近一周</span>
                            <span class="line"></span>
                            <span>所有时间</span>
                        </div>
                    </div>
                    <ArtistList />
                </div>
                <div class="right">
                    <div class="my module shadow">
                        <div class="card-header flex-row">
                            我创建的歌单
                        </div>
                        <div class="list">
                            <div class="item">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img src="@/assets/images/w1.jpg" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>25万</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">放弃很可惜 但有些事坚持本就没意义</h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img src="@/assets/images/w1.jpg" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>25万</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">放弃很可惜 但有些事坚持本就没意义</h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img src="@/assets/images/w1.jpg" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>25万</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">放弃很可惜 但有些事坚持本就没意义</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my collect module shadow">
                        <div class="card-header flex-row">
                            我收藏的歌单
                        </div>
                        <div class="list">
                            <div class="item">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img src="@/assets/images/w1.jpg" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>25万</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">放弃很可惜 但有些事坚持本就没意义</h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img src="@/assets/images/w1.jpg" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>25万</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">放弃很可惜 但有些事坚持本就没意义</h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrapper">
                                    <a href="">
                                        <div class="cover">
                                            <div class="img">
                                                <img src="@/assets/images/w1.jpg" alt="">
                                            </div>
                                            <div class="count flex-center">
                                                <i class="arrow"></i>
                                                <span>25万</span>
                                            </div>
                                        </div>
                                    </a>
                
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis-two">放弃很可惜 但有些事坚持本就没意义</h2>
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
export default {
    name : "Personal",
    components:{
        ArtistList
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