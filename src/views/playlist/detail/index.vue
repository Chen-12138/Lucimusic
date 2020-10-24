<template>
    <div class="fluid">
            <div class="playlist-detail container">
                <div class="left shadow">
                    <div class="top">
                        <div class="avatar">
                            <img :src="list.coverImgUrl" alt="">
                        </div>
                        <div class="info">
                            <div class="title flex-between">
                                <span>{{list.name}}</span>
                                <div></div>
                            </div>
                            <div class="user flex-row">
                                <div class="avatar">
                                    <img :src="creator.avatarUrl" alt="">
                                </div>
                                <p class="nickname">{{creator.nickname}}</p>
                                <p class="createTime">{{list.createTime | formateDate}}创建</p>
                            </div>
                            <div class="tag flex-row">
                                标签：<a v-for="(item,index) in list.tags" :key="index">{{item}}</a>
                            </div>
                            <div class="desc">
                                <p class="ellipsis-two">
                                    {{list.description}}
                                </p>
                                <span class="flex-row">
                                    全部
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <ArtistList 
                            :songs = "songs"
                        />
                    </div>
                </div>
                <div class="right">
                    <div class="like module shadow">
                        <div class="card-header flex-rox">
                            <span>喜欢这个歌单的人</span>
                        </div>
                        <ul>
                            <li v-for="item in subList" :key="item.userId">
                                <div class="avatar">
                                    <img :src="item.avatarUrl" alt="">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="related module shadow">
                        <div class="card-header flex-rox">
                            <span>相关推荐</span>
                        </div>
                        <ul>
                            <li v-for="item in simiList" :key="item.id" @click="handleToDetail(item.id)">
                                <div class="avatar">
                                    <img :src="item.coverImgUrl">
                                </div>
                                <div class="info">
                                    <h2 class="ellipsis">{{item.name}}</h2>
                                    <span>
                                        "By."
                                        <small>{{item.creator.nickname}}</small>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="comment module shadow">
                        <div class="card-header flex-rox">
                            <span>精彩评论</span>
                        </div>
                        <ul>
                            <li v-for="item in commentList" :key="item.commentId">
                                <div class="avatar">
                                    <img :src="item.user.avatarUrl">
                                </div>
                                <div class="info">
                                    <h2>
                                        {{item.user.nickname}}
                                        <!-- <small>{{item.time | formatTime}}月前</small> -->
                                    </h2>
                                    <p>{{item.content}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
    </div>
</template>

<script>
import ArtistList from '@/components/artistList'
export default {
    props: ['id'],
    components:{
        ArtistList
    },
    data(){
        return {
            // 歌单详情
            list : {},
            // 创建人
            creator : {},
            // 歌曲列表
            songs: [],
            // 歌单收藏者
            subList: [],
            // 类似歌单
            simiList : [],
            // 歌单评论
            commentList : []
        }
    },
    watch: {
        $route(){
            location.reload()
        }
    },
    mounted(){
        // console.log(this.$route.param)
        this.getList()
        this.getsubList()
        this.getsimiList()
        this.getcommentList()
    },
    methods:{
        // 获取歌单详情
        async getList(){
            try{
                let res = await this.$api.getPlayListDetail(this.id)
                this.list = res.playlist
                this.creator = this.list.creator
                this.songs = this.list.tracks
            }catch(error){
                this.$message.error(error)
            }   
        },
        // 获取歌单收藏者
        async getsubList(){
            let param = {
                id : this.id,
                limit: 28
            }
            try{
                let res = await this.$api.getSubscribersPlaylist(param)
                this.subList = res.subscribers
            }catch(error){
                this.$message.error(error)
            }   
        },
        // 获取类似歌单
        async getsimiList(){
            try{
                let res = await this.$api.getSimiPlaylist(this.id)
                console.log(res)
                this.simiList = res.playlists
            }catch(error){
                this.$message.error(error)
            }   
        },
        // 获取歌单评论
        async getcommentList(){
            try{
                let res = await this.$api.getCommentPlaylist(this.id)
                this.commentList = res.comments
            }catch(error){
                this.$message.error(error)
            }   
        },
        // 跳转详情页
        handleToDetail(listId){
            // console.log(listId)
            this.$router.push('/playlist-detail/'+listId)
        }
    }
}
</script>

<style scoped>
/* playlist-detail页面 */
.playlist-detail{display: flex;align-items: flex-start;}
.playlist-detail .left{flex: 1;width: 950px;padding: 15px;border-radius: 8px;margin-right: 20px;}
.playlist-detail .left .top{display: flex;}
.playlist-detail .left .top .avatar{width: 200px;height: 200px;border-radius: 8px;position: relative;margin-right: 30px;flex-shrink: 0;}
.playlist-detail .left .top .avatar img{width: 100%;height: 100%;border-radius: 8px;position: relative;}
.playlist-detail .left .top .info{display: flex;flex-direction: column;}
.playlist-detail .left .top .info .title{width: 100%;font-size: 24px;font-weight: 700;line-height: 24px;margin-bottom: 20px;margin-top: 10px;overflow: hidden;}
.playlist-detail .left .top .info .user{margin-bottom: 15px;}
.playlist-detail .left .top .info .user .avatar{width: 30px;height: 30px;border-radius: 50%;position: relative;margin-right: 15px;cursor: pointer;}
.playlist-detail .left .top .info .user .avatar img{width: 100%;height: 100%;border-radius: 50%;position: relative;}
.playlist-detail .left .top .info .user .nickname{font-size: 14px;margin-right: 30px;cursor: pointer;}
.playlist-detail .left .top .info .user .createTime{font-size: 14px;color: grey;}
.playlist-detail .left .top .info .tag a{color: #fff;background: #fa2800;margin-right: 15px;font-size: 12px;cursor: pointer;padding: 4px 12px;border-radius: 15px;}
.playlist-detail .left .top .info .desc{line-height: 1.6;font-weight: 400;display: flex;margin-top: 15px;flex-direction: column;}
.playlist-detail .left .top .info .desc p{flex: 1;font-size: 14px;font-weight: 400;}
.playlist-detail .left .top .info .desc span{flex-shrink: 0;color: #fa2800;cursor: pointer;}
.playlist-detail .right{width: 350px;}
.playlist-detail .right .module{padding: 15px;width: 100%;border-radius: 8px;margin-bottom: 20px;}
.playlist-detail .right .card-header{border-left: 3px solid #fa2800;height: 20px;padding-left: 1rem; margin-bottom: 15px;font-weight: 700;}
.playlist-detail .right .like{padding-bottom: 5px;}
.playlist-detail .right .like ul{display: flex;flex-wrap: wrap;margin: 0 -5px;}
.playlist-detail .right .like ul li{flex: 0 0 14.285714285%;max-width: 14.285714285%;padding: 0 5px 10px;}
.playlist-detail .right .like ul li .avatar{width: 100%;border-radius: 3px;}
.playlist-detail .right .like ul li .avatar img{width: 100%;border-radius: 3px;}
.playlist-detail .right .related ul li{display: flex;margin-bottom: 15px;cursor: pointer;}
.playlist-detail .right .related ul li .avatar{width: 50px;height: 50px;border-radius: 3px;margin-right: 15px;flex-shrink: 0;}
.playlist-detail .right .related ul li .avatar img{width: 100%;border-radius: 3px;}
.playlist-detail .right .related ul li .info{height: 50px;flex: 1;display: flex;justify-content: center;flex-direction: column;}
.playlist-detail .right .related ul li .info span{font-size: 12px;color: #a5a5c1;}
.playlist-detail .right .related ul li .info h2{font-size: 14px;margin-bottom: 10px;width: 100%;}
.playlist-detail .right .comment ul li {padding: 10px 0;width: 100%;display: flex;}
.playlist-detail .right .comment ul li .avatar{width: 45px;height: 45px;border-radius: 50%;margin-right: 12px;flex-shrink: 0;cursor: pointer;}
.playlist-detail .right .comment ul li .avatar img{width: 100%;border-radius: 50%;}
.playlist-detail .right .comment ul li .info{flex: 1;}
.playlist-detail .right .comment ul li .info h2{font-size: 15px;margin-right: 5px;margin-bottom: 10px;cursor: pointer;}
.playlist-detail .right .comment ul li .info h2 small{font-size: 12px;color: #a5a5c1;font-weight: 200;}
.playlist-detail .right .comment ul li .info p{width: 100%;font-size: 12px;color: #666;line-height: 1.6;padding: 5px 10px;background: #f5f5f5;margin-top: 5px;border-radius: 3px;}
</style>