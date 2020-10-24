<template>
    <div class="fluid">
        <Loading v-if="isLoading" />
        <!-- 主要部分 -->
        <div v-else class="rank-wrapper container">
            <div class="module">
                <h2 class="title">云音乐特色榜</h2>
                <playList :playList = "TopList" />
            </div>
            <div class="module">
                <h2 class="title">全球媒体榜</h2>
                <playList :playList = "rankList" />
            </div>
        </div>
    </div>
</template>

<script>
import playList from '@/components/playList'
export default {
    name : "Rank",
    components: {
        playList
    },
    data(){
        return{
            rankList:[],
            TopList:[],
            isLoading: true
        }

    },
    mounted(){
        this.getrankList();
        // console.log(this.rankList)
    },
    methods:{
        // 获取排行列表
        async getrankList(){
            try{
                let res = await this.$api.getToplist()
                // console.log(res)
                this.isLoading = false
                let list = [];
                list = res.list
                this.rankList = list.slice(4);
                this.TopList = list.slice(0,4)
            } catch(error) {
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
/* rank页面 */
/* .rank-wrapper{padding-top: 80px;} */
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
.rank-wrapper .module .item .wrapper .cover{position: relative;padding-top: 100%;background: #d9d9d9;}
.rank-wrapper .module .item .wrapper .cover .img{border-radius: 4px;overflow: hidden;width: 100%;height: 100%;position: absolute;top: 0;left: 0;}
.rank-wrapper .module .item .wrapper .cover .count{position: absolute;top: 1px;right: 16px;height: 24px;font-weight: 700;font-size: 12px;line-height: 24px;
background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;color: #fff;background-size: cover;padding: 9px;}
.rank-wrapper .module .list .item .wrapper .cover .count .arrow{display: block;border-width: 4px 0 4px 6px;border-style: solid;margin-right: 5px;
border-color: transparent transparent transparent #fff;}
</style>