<template>
    <div class="container recommend-singer">
        <h2 class="title">推荐歌手</h2>
        <div class="list">
            <SingerList :singerList = 'singerList' />
            <!-- <div class="item" v-for="item in singerList" :key="item.id">
                <div class="wrapper">
                    <div class="img">
                        <img :src="item.img1v1Url">
                    </div>
                    <div class="info">
                        <p class="name">{{item.name}}</p>
                        <p class="count">单曲数{{item.musicSize}}</p>
                    </div>
                </div>
            </div> -->
            <!-- <div class="item">
                <div class="wrapper">
                    <div class="img">
                        <img src="https://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=200y200">
                    </div>
                    <div class="info">
                        <p class="name">薛之谦</p>
                        <p class="count">单曲数275</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import SingerList from '@/components/singerList'
export default {
    name : 'RecommendSinger',
    components: {
        SingerList
    },
    data(){
        return {
            singerList:[]
        }
    },
    mounted(){
        this.getSingerList()
    },
    methods:{
        async getSingerList(){
            try{
                let res = await this.$api.getHotSinger()
                // console.log(res)
                this.singerList = res.artists
            } catch(error) {
                this.$message.error(error)
            }
        }
    }
}
</script>

<style scoped>
.recommend-singer .title{font-size: 16px;margin: 15px auto;}
.recommend-singer .list{display: flex;flex-wrap: wrap;margin: 0 -15px;}
.recommend-singer .list .item{flex: 0 0 10%;max-width: 10%; padding: 0 15px 30px;cursor: pointer;}
.recommend-singer .list .item img{border-radius: 50%;width: 100%;height: 100%;}
.recommend-singer .list .item .info{margin-top: 15px;text-align: center;}
.recommend-singer .list .item .info .name{font-size: 14;color: #4a4a4a;font-weight: 700;}
.recommend-singer .list .item .info .count{font-size: 12px;color: red;margin-top: 10px;}
</style>