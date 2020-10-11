<template>
    <div class="container recommend-music">
        <h2 class="title">推荐歌曲</h2>
        <div class="list">
            <div class="item " v-for="(item,index) in musicList" :key="item.id">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">{{index | formatIndex}}</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img :src="item.picUrl" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">{{item.name}}</p>
                        <p class="author ellipsis">
                          <span>{{item.song.artists[0].name}}</span>
                        </p>
                    </div>
                    <p class="album ellipsis-two">《{{item.song.album.name}}》</p>
                    <p class="duration transition">
                        {{item.song.duration | formatTime}}
                    </p>
                </div>
            </div>
            <!-- <div class="item ">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">01</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img src="https://p1.music.126.net/hh8cQ-Zd5SxVH4PzguGpYQ==/109951165342791905.jpg?param=150y150" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">Wild Life</p>
                        <p class="author ellipsis">
                          <span>OneRepublic</span>
                        </p>
                    </div>
                    <p class="album">《Wild Life》</p>
                    <p class="duration transition">
                        04:27
                    </p>
                </div>
            </div> -->
            
        </div>
    </div>
</template>

<script>
export default {
    name : 'RecommendMusic',
    data(){
        return {
            musicList:[]
        }
    },
    computed:{
        
    },
    mounted(){
        this.getmusicList();
    },
    methods : {
        getmusicList(){
            this.axios.get('personalized/newsong').then(res => {
                // console.log(res)
                if(res.status===200){
                    this.musicList = res.data.result
                }
            })
        }
    }
}
</script>

<style scoped>
.recommend-music .title{font-size: 16px;margin: 15px auto;}
.recommend-music .list{display: flex;flex-wrap: wrap;margin: 0 -15px;min-width: 800px;}
.recommend-music .list .item{flex: 0 0 50%;max-width: 50%; margin-bottom: 20px;height: 80px;padding: 0 15px 30px;}
.recommend-music .list .item .wrapper{width: 100%;height: 80px; justify-content: start;padding: 0 4%;border-radius: 5px;position: relative;}
.recommend-music .list .item .wrapper .index-container{margin-right: 20px;width: 30px;}
.recommend-music .list .item .wrapper .avatar{width: 55px;height: 55px;margin-right: 30px;position: relative;min-width: 55px;}
.recommend-music .list .item .wrapper .avatar img{width: 100%;height: 100%;border-radius: 5px;}
.recommend-music .list .item .wrapper .info{width: 15%;}
.recommend-music .list .item .wrapper .info .name{font-size: 14px; color: #333;font-weight: bold;margin-bottom: 10px;}
.recommend-music .list .item .wrapper .info .author{font-size: 12px;color: #666;}
.recommend-music .list .item .wrapper .album{margin-left: 70px; font-size: 14px;flex: 1;font-weight: 700;color: #333;overflow: hidden;}
.recommend-music .list .item .wrapper .duration{margin-left: 70px;font-size: 14px;font-weight: 700;color: #333;}
</style>