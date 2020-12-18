<template>
<div class="list">
    <div class="item" :class="numClass"
    v-for="item in playList" :key="item.id"
    @click="handleToDetail(item.id)"
    >
        <div class="wrapper">
            <a>
                <div class="cover">
                    <div class="img">
                        <el-image
                        :src="item.coverImgUrl || item.picUrl">
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
</div>
</template>

<script>
export default {
    props:{
        playList: {
            type: Array
        },
        num: {
            type: Number,
            default: 8
        }
    },
    computed: {
        numClass() {
            return this.num == 2 ? 'two' : 'eight'
        }
    },
    methods: {
        // 跳转详情页
        handleToDetail(listId){
            // console.log(listId)
            this.$router.push('/playlist-detail/'+listId)
        }
    }
}
</script>

<style>
.list{display: flex;flex-wrap: wrap;margin: 0 -15px;}
.list .item{flex: 0 0 12.5%;max-width: 12.5%; padding: 0 15px 30px;box-sizing: border-box;cursor: pointer;}
.list .item.two{flex: 0 0 50%;max-width: 50%;}
.list .item img{width: 100%;height: 100%;}
.list .item .info{margin-top: 15px;}
.list .item .info h2{font-size: 14px;}
.list .item .wrapper{position: relative;}
.list .item .wrapper:hover{top:-3px; left: -1.5px; box-shadow: 0px 5px 10px 3px #ccc;}
.list .item .wrapper .cover{position: relative;padding-top: 100%;background: #d9d9d9;}
.list .item .wrapper .cover .img{border-radius: 4px;overflow: hidden;width: 100%;height: 100%;position: absolute;top: 0;left: 0;}
.list .item .wrapper .cover .count{position: absolute;top: 1px;right: 16px;height: 24px;font-weight: 700;font-size: 12px;line-height: 24px;
background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;color: #fff;background-size: cover;padding: 9px;}
.list .item .wrapper .cover .count .arrow{display: block;border-width: 4px 0 4px 6px;border-style: solid;margin-right: 5px;
border-color: transparent transparent transparent #fff;}
</style>