<template>
    <div class="fluid">
        <!-- 主要部分 -->
        <div class="rank-wrapper container">
            <div class="module">
                <h2 class="title">云音乐特色榜</h2>
                <div class="list">
                    <div class="item" v-for="item in TopList" :key="item.id">
                        <div class="wrapper">
                            <a href="">
                                <div class="cover">
                                    <div class="img">
                                        <img :src="item.coverImgUrl">
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
            <div class="module">
                <h2 class="title">全球媒体榜</h2>
                <div class="list">
                    <div class="item" v-for="item in rankList" :key="item.id">
                        <div class="wrapper">
                            <a href="">
                                <div class="cover">
                                    <div class="img">
                                        <img :src="item.coverImgUrl">
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
                    <!-- <div class="item">
                        <div class="wrapper">
                            <a href="">
                                <div class="cover">
                                    <div class="img">
                                        <img src="https://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=300y300">
                                    </div>
                                    <div class="count flex-center">
                                        <i class="arrow"></i>
                                        <span>35亿</span>
                                    </div>
                                </div>
                            </a>
        
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Rank",
    data(){
        return{
            rankList:[],
            TopList:[]
        }

    },
    mounted(){
        this.getrankList();
        // console.log(this.rankList)
    },
    methods:{
        getrankList(){
            this.axios.get('toplist/detail').then(res=>{
                console.log(res.data.list)
                if(res.status===200){
                    let list = [];
                    list = res.data.list;
                    this.rankList = list.slice(4);
                    this.TopList = list.slice(0,4);
                }
            })
        }
    }
}
</script>

<style scoped>
/* rank页面 */
/* .rank-wrapper{padding-top: 70px;} */
.rank-wrapper .module .title::before{content: ""; width: 3px;height: 15px;background: #fa2800;position: absolute;
top: 50%;left: 0%;transform: translate(0%, -50%);border-radius: 5px;}
.rank-wrapper .module .title{position: relative;padding-left: 15px;margin-bottom: 20px;font-size: 16px;}
.rank-wrapper .module .list{display: flex;flex-wrap: wrap;}
.rank-wrapper .module .list .item{flex: 0 0 12.5%;max-width: 12.5%;cursor: pointer;padding: 0 15px 30px;}
.rank-wrapper .module .list .item img{width: 100%;height: 100%;}
.rank-wrapper .module .list .item .wrapper{position: relative;}
.rank-wrapper .module .list .item .info{margin-top: 15px;}
.rank-wrapper .module .list .item .info h2{font-size: 14px;}
.rank-wrapper .module .item .wrapper:hover{top:-3px; left: -1.5px; box-shadow: 0px 5px 10px 3px #ccc;}
.rank-wrapper .module .item .wrapper .cover{position: relative;}
.rank-wrapper .module .item .wrapper .cover .img{border-radius: 4px;overflow: hidden;width: 100%;height: 100%;}
.rank-wrapper .module .item .wrapper .cover .count{position: absolute;top: 1px;right: 16px;height: 24px;font-weight: 700;font-size: 12px;line-height: 24px;
background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;color: #fff;background-size: cover;padding: 9px;}
.rank-wrapper .module .list .item .wrapper .cover .count .arrow{display: block;border-width: 4px 0 4px 6px;border-style: solid;margin-right: 5px;
border-color: transparent transparent transparent #fff;}
</style>