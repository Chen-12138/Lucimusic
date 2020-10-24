<template>
        <div class="container recommond-songs">
        <h2 class="title">推荐歌单</h2>
        <!-- <div class="list">
            <div class="item" v-for="item in songsList" :key="item.id"
            @click="handleToDetail(item.id)"
            >
                <div class="wrapper">
                    <a>
                        <div class="cover">
                            <div class="img">
                                <el-image
                                        :src="item.picUrl">
                                            <div slot="placeholder" 
                                            class="image-slot flex-center flex-column">
                                                加载中<span class="dot">...</span>
                                            </div>
                                </el-image>
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
        </div> -->
        <playList :playList = "songsList" />
    </div>
</template>

<script>
import playList from '@/components/playList'
export default {
    name : 'RecommendSongs',
    components: {
        playList
    },
    data(){
        return{
            limit: 24,
            songsList:[]
        }
    },
    mounted(){
        this.getsongsList()
    },
    methods:{
        // 获取歌单列表
        async getsongsList(){
            try{
                let res = await this.$api.getPersonalized(this.limit)
                // console.log(res)
                this.songsList = res.result
            } catch(error) {
                this.$message.error(error)
            }
        },
        // getsongsList(){
        //     this.axios.get('personalized?limit=24').then(res => {
        //         // console.log(res)
        //         if(res.status===200){
        //             this.songsList = res.data.result
        //             // console.log(this.songsList)
        //         }
        //     })
        // },
        // 跳转详情页
        handleToDetail(listId){
            // console.log(listId)
            this.$router.push('/playlist-detail/'+listId)
        }
    }
}
</script>

<style scoped>
.recommond-songs .title{font-size: 16px;margin: 15px auto;}
.recommond-songs .list{display: flex;flex-wrap: wrap;margin: 0 -15px;}
.recommond-songs .list .item{flex: 0 0 12.5%;max-width: 12.5%; padding: 0 15px 30px;box-sizing: border-box;cursor: pointer;}
.recommond-songs .list .item img{width: 100%;height: 100%;}
.recommond-songs .list .item .info{margin-top: 15px;}
.recommond-songs .list .item .info h2{font-size: 14px;}
.recommond-songs .list .item .wrapper{position: relative;}
.recommond-songs .list .item .wrapper:hover{top:-3px; left: -1.5px; box-shadow: 0px 5px 10px 3px #ccc;}
.recommond-songs .list .item .wrapper .cover{position: relative;padding-top: 100%;background: #d9d9d9;}
.recommond-songs .list .item .wrapper .cover .img{border-radius: 4px;overflow: hidden;width: 100%;height: 100%;position: absolute;top: 0;left: 0;}
.recommond-songs .list .item .wrapper .cover .count{position: absolute;top: 1px;right: 16px;height: 24px;font-weight: 700;font-size: 12px;line-height: 24px;
background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;color: #fff;background-size: cover;padding: 9px;}
.recommond-songs .list .item .wrapper .cover .count .arrow{display: block;border-width: 4px 0 4px 6px;border-style: solid;margin-right: 5px;
border-color: transparent transparent transparent #fff;}

</style>