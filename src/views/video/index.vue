<template>
    <div class="fluid">
        <div class="video-wrapper container">
            <div class="filter shadow">
                <div class="title flex-center" @click="showfilter()">
                    {{currentTag}}
                    <i class="iconfont icon-xiajiantou"></i>
                    <transition name="fade">
                        <div class="filter-box shadow" v-if="showFilter">
                                <ul>
                                    <li v-for="item in allTags" :key="item.id"
                                    @click="choosetype(item.name)"
                                    :class="currentTag == item.name ? 'active' : ''"
                                    >
                                    {{item.name}}
                                    </li>
                                    <!-- <li class="active">test</li> -->
                                </ul>
                        </div>
                    </transition>
                </div>
                <div class="hot-tag flex-row">
                    <p>分类：</p>
                    <ul class="flex-row">
                        <li>现场</li>
                        <li>舞蹈</li>
                        <li>翻唱</li>
                        <li>BGM</li>
                        <li>生活</li>
                        <li>游戏</li>
                        <li>ACG音乐</li>
                        <li>最佳饭制</li>
                    </ul>
                </div>
                <div class="type flex-center">
                    <div class="item active">
                        全部
                    </div>
                </div>
            </div>
            <div class="mv-box">
                <ul class="mv-list">
                    <li>
                        <div class="wrapper">
                            <a href="">
                                <div class="cover">
                                    <div class="img">
                                        <img src="https://p2.music.126.net/y2Vzdq1z0faRtzt44nswOA==/109951164764761834.jpg?param=325y197">
                                    </div>
                                    <div class="count flex-center">
                                        <i class="arrow"></i>
                                        <span>25万</span>
                                    </div>
                                    <div class="action">
                                        <button class="play">
                                            <i class="iconfont icon-icon_play"></i>
                                        </button>
                                    </div>
                                    <div class="foot">
                                        <p>Nomi团子呀</p>
                                        <p>03:05</p>
                                    </div>
                                </div>
                            </a>
        
                        </div>
                        <div class="info">
                            <h2 class="ellipsis">老娘还能红一百年！泫雅身材巅峰RED时期一键换装混剪</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Video",
    data(){
        return {
            // 当前标签
            currentTag : "全部",
            // 是否显示下拉框
            showFilter:false,
            allTags: []
        }
    },
    mounted(){
        this.getTag()
        this.getHotTag()
    },
    methods:{
        // 显示下拉列表
        showfilter(){
            this.showFilter = !this.showFilter
        },
        // 获取视频标签列表
        getTag(){
            this.axios.get('video/group/list').then(res=>{
                // console.log(res)
                if(res.status == 200){
                    this.allTags = res.data.data
                }
            })
        },
        // 获取视频分类列表
        getHotTag(){
            this.axios.get('video/category/list').then(res=>{
                console.log(res)
                console.log(!res)
                if(!res){
                    this.$message.error("该接口有问题")
                }
            })
        },
        // 获取视频
        async getMv(){
            try{
                let res = await this.$api.getMV()
            }catch(error){
                this.$message.error(error)
            }
        },
        choosetype(type){
            this.currentTag = type
            // console.log(this.currentTag)
        }
    }
}
</script>

<style scoped>
/* fade动画 */
.fade-enter {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
}

.fade-enter-active {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
}

.fade-leave-active {
  transition: all 0.5s;
}
/* video页面 */
.video-wrapper .filter{width: 100%;height: 40px;margin-bottom: 20px;padding-right: 20px;display: flex;}
.video-wrapper .filter .title{height: 100%;width: auto; background: #fa2800;border-radius: 5px 0 0 5px;color: #fff;
cursor: pointer;margin-right: 15px;position: relative;padding: 0px 5px 0 15px;}
.video-wrapper .filter .title i{margin-left: 15px;font-size: 18px;}
.video-wrapper .filter .title .filter-box{width: 720px;height: 400px;overflow-y: scroll;background: #fff;border-radius: 5px;
color: #000;position: absolute;top: 50px;right: -630px;z-index: 100;padding: 15px 10px 0 16px;}
.video-wrapper .filter .title .filter-box ul{display: flex;flex-wrap: wrap;}
.video-wrapper .filter .title .filter-box ul li:hover{background: #fa2800;color: #fff;}
.video-wrapper .filter .title .filter-box ul li{background: #f7f7f7;border-radius: 16px;margin: 0 10px 10px 0;cursor: pointer;font-size: 12px;
color: #161e27;padding: 8px 18px;}
.video-wrapper .filter .title .filter-box ul li.active{background: #fa2800;color: #fff;}
.video-wrapper .filter .hot-tag{flex: 1;}
.video-wrapper .filter .hot-tag ul li{margin: 0 5px;padding-right: 10px;cursor: pointer;}
.video-wrapper .filter .hot-tag ul li.active{color: #fa2800;}
.video-wrapper .filter .hot-tag ul li:hover{color: #fa2800;}
.video-wrapper .filter .type{display: flex;}
.video-wrapper .filter .type .item{margin-left: 20px;background: #f7f7f7;border-radius: 3px;cursor: pointer;color: #161e27;padding: 5px 10px;}
.video-wrapper .filter .type .active{background: #fa2800;color: #fff;}
</style>