<template>
    <div class="fluid">
        <div class="playlist-wrapper container">
            <div class="filter shadow">
                <div class="title flex-center" @click="openFilter">
                    {{currentCat}}
                    <i class="iconfont icon-xiajiantou"></i>
                    <transition name="fade">
                        <div class="filter-box shadow" v-if="showFilter">
                            <div class="item" v-for="item in typeList" :key="item.key">
                                <h2>
                                    <i class="iconfont" :class="item.icon"> </i>
                                    {{item.value}}
                                </h2>
                                <ul>
                                    <li v-for="Inneritem in fiveList[item.key]" :key="Inneritem.name"
                                    @click="chooseCat(Inneritem.name)"
                                    :class="currentCat == Inneritem.name ? 'active' : ''"
                                    >{{Inneritem.name}}</li>
                                </ul>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="hot-tag flex-row">
                    <p>热门标签：</p>
                    <ul class="flex-row">
                        <li v-for="item in hotList" :key="item.id"
                        @click="chooseCat(item.name)"
                        :class="currentCat == item.name ? 'active' : ''"
                        >
                        {{item.name}}
                        </li>
                    </ul>
                </div>
                <div class="type flex-center">
                    <div class="item"
                    :class="sortType == 'hot' ? 'active' : ''"
                    @click="chooseSortType('hot')"
                    >
                        热门
                    </div>
                    <div class="item"
                    :class="sortType == 'new' ? 'active' : ''"
                    @click="chooseSortType('new')"
                    >
                        最新
                    </div>
                </div>
            </div>

            <playList :playList = "playList"/>

            <div class="page-wrapper">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="limit"
                    background
                    layout="total, prev, pager, next"
                    :total="pageTotal">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import playList from '@/components/playList'
export default {
    name : "Playlist",
    components: {
        playList
    },
    data(){
        return {
            showFilter : false,
            // 当前标签
            currentCat: "全部",
            // 歌单列表
            playList : [],
            // 分5类
            typeList : [
                {
                    key : 0,
                    value : "语种",
                    icon: 'icon-icon'
                },
                {
                    key : 1,
                    value : "风格",
                    icon: 'icon-fengge'
                },
                {
                    key : 2,
                    value : "场景",
                    icon: 'icon-changjing'
                },
                {
                    key : 3,
                    value : "情感",
                    icon: 'icon-qinggan'
                },
                {
                    key : 4,
                    value : "主题",
                    icon: 'icon-zhuti'
                },
            ],
            // 所有标签
            allList : [],
            // 5类标签
            fiveList:[[],[],[],[],[]],
            // 热门标签
            hotList: [],
            // 选择热门和最新
            sortType: 'hot',
            limit : 40,
            offset : 0,
            // 当前页
            currentPage : 0,
            // 总数量
            pageTotal : 0
        }
    },
    computed : {},
    mounted(){
        this.getplayList()
        this.gethotList()
        this.getList()
    },
    methods:{
        handleSizeChange(val){
            // console.log(val)
            this.limit = val
            this.offset = this.limit * (this.currentPage - 1)
            this.getList()
        },
        handleCurrentChange(val){
            this.currentPage = val
            // console.log(val)
            this.offset = (val - 1) * this.limit
            this.getList()
        },
        // 下拉框的打开
        openFilter(){
            this.showFilter = !this.showFilter;
        },
        // 获取歌单分类
        async getplayList(){
            let res = await this.$api.getCatList();
            this.allList = res.sub
            for(let i = 0 ; i < 70 ; i++){
                    if(this.allList[i].category == 0){
                        this.fiveList[0].push(this.allList[i])
                    } else if(this.allList[i].category == 1){
                        this.fiveList[1].push(this.allList[i])
                    } else if(this.allList[i].category == 2){
                        this.fiveList[2].push(this.allList[i])
                    }else if(this.allList[i].category == 3){
                        this.fiveList[3].push(this.allList[i])
                    }else if(this.allList[i].category == 4){
                        this.fiveList[4].push(this.allList[i])
                    }
                }
        },
        // 获取热门歌单分类
        async gethotList(){
            let res = await this.$api.getHotlist();
            this.hotList = res.tags
        },
        // 选择热门或者最新
        chooseSortType(type){
            this.sortType = type;
            this.getList()
        },
        // 选择标签
        chooseCat(cat){
            this.currentCat = cat;
            this.getList()
        },
        // 获取歌单列表
        async getList(){
            let param = {
                order: this.sortType,
                cat: this.currentCat,
                offset: this.offset,
                limit: this.limit
            }
            try{
                let res = await this.$api.getPlayList(param)
                // console.log(res)
                this.playList = res.playlists
                this.pageTotal = res.total
            } catch(error) {
                this.$message.error(error)
            }
        },
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
/* playlist页面 */
.playlist-wrapper .filter{width: 100%;height: 40px;margin-bottom: 20px;padding-right: 20px;display: flex;}
.playlist-wrapper .filter .title{height: 100%;width: auto; background: #fa2800;border-radius: 5px 0 0 5px;color: #fff;
cursor: pointer;margin-right: 15px;position: relative;padding: 0 5px 0 15px;}
.playlist-wrapper .filter .title i{margin-left: 15px;font-size: 18px;}
.playlist-wrapper .filter .title .filter-box::-webkit-scrollbar {display: none;}
.playlist-wrapper .filter .title .filter-box{width: 720px;height: 400px;overflow-y: scroll;background: #fff;border-radius: 5px;
color: #000;position: absolute;top: 50px;right: -630px;z-index: 100;padding: 15px 10px 0 16px;}
.playlist-wrapper .filter .title .filter-box .item{margin-bottom: 20px;}
.playlist-wrapper .filter .title .filter-box .item h2{display: flex;align-items: center;font-size: 15px;color: #161e27;margin-bottom: 15px;}
.playlist-wrapper .filter .title .filter-box .item h2 i{font-size: 16px;margin-right: 5px;margin-left: 0;}
.playlist-wrapper .filter .title .filter-box .item ul{display: flex;flex-wrap: wrap;}
.playlist-wrapper .filter .title .filter-box .item ul li:hover{background: #fa2800;color: #fff;}
.playlist-wrapper .filter .title .filter-box .item ul li.active{background: #fa2800;color: #fff;}
.playlist-wrapper .filter .title .filter-box .item ul li{background: #f7f7f7;border-radius: 16px;margin: 0 10px 10px 0;cursor: pointer;font-size: 12px;
color: #161e27;padding: 8px 18px;transition: all .4s;}
.playlist-wrapper .filter .hot-tag{flex: 1;}
.playlist-wrapper .filter .hot-tag ul li{margin: 0 5px;padding-right: 10px;cursor: pointer;}
.playlist-wrapper .filter .hot-tag ul li.active{color: #fa2800;}
.playlist-wrapper .filter .hot-tag ul li:hover{color: #fa2800;}
.playlist-wrapper .filter .type{display: flex;}
.playlist-wrapper .filter .type .item{margin-left: 20px;background: #f7f7f7;border-radius: 3px;cursor: pointer;color: #161e27;padding: 5px 10px;transition: all .4s;}
.playlist-wrapper .filter .type .active{background: #fa2800;color: #fff;}

/* 分页器 */
.page-wrapper{text-align: center;}
</style>