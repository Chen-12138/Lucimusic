<template>
<ul class="singer-list">
    <li v-for="item in singerList" :key="item.id">
        <div class="wrapper">
            <div class="img">
                <!-- <img :src="item.img1v1Url"> -->
                <el-image
                :src="item.img1v1Url">
                    <div slot="placeholder" 
                    class="image-slot flex-center flex-column">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
        </div>
        <div class="info">
            <p class="name">{{item.name}}</p>
            <p class="count" v-if="item.musicSize">单曲数{{item.musicSize}}</p>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    props:{
        singerList : {
            type : Array
        }
    },
}
</script>

<style>
.singer-list{display: flex;flex-wrap: wrap;margin: 30px -15px 0;}
.singer-list li{padding: 0 15px 30px;flex: 0 0 10%;max-width: 10%;}
.singer-list li .wrapper{padding-top: 100%;position: relative;background: #d9d9d9;border-radius: 50%;}
.singer-list li .img{position:absolute;top: 0;left: 0; border-radius: 50%;width: 100%;height: 100%;overflow: hidden;}
.singer-list li .info{margin-top: 15px;text-align: center;}
.singer-list li .info .name{font-size: 14;color: #4a4a4a;font-weight: 700;}
.singer-list li .info .count{font-size: 12px;color: red;margin-top: 10px;}
</style>