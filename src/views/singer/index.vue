<template>
    <div class="fluid">
        <Loading v-if="isLoading" />
        <div v-else class="singer-wrapper container">
            <div class="filter">
                <ul class="tag-lang">
                    <li v-for="item in langs" :key="item.value"
                    @click="chooseType('lang' , item.value)"
                    :class="lang == item.value ? 'active' : ''"
                    >
                        {{item.label}}
                    </li>
                </ul>
                <ul class="tag-lang tag-type">
                    <li v-for="item in classifys" :key="item.value"
                    @click="chooseType('classify' , item.value)"
                    :class="classify == item.value ? 'active' : ''"
                    >
                        {{item.label}}
                    </li>
                </ul>
                <ul class="tag-en">
                    <li v-for="item in ens" :key="item.value"
                    @click="chooseType('en' , item.value)"
                    :class="en == item.value ? 'active' : ''"
                    >
                        {{item.label}}
                    </li>
                </ul>
            </div>
            <div class="load-more" @scroll="scrollBottom($event)">
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
                                <p class="count">单曲数{{item.musicSize}}</p>
                            </div>
                    </li>
                </ul>
            </div>
            <div v-if="loadingmore" class="load-bottom">
                <div class="loading flex-column">
                    <div class="loader"></div>
                    <span>~努力加载中~</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Singer",
    data(){
        return{
            // 语种
            lang: -1,
            langs:[
                {
                    value: -1,
                    label: "全部"
                },
                {
                    value: 7,
                    label: "华语"
                },
                {
                    value: 96,
                    label: "欧美"
                },
                {
                    value: 8,
                    label: "日本"
                },
                {
                    value: 16,
                    label: "韩国"
                },
                {
                    value: 0,
                    label: "其他"
                }
            ],
            // 分类
            classify: -1,
            classifys:[
                {
                    value: -1,
                    label: "全部"
                },
                {
                    value: 1,
                    label: "男歌手"
                },
                {
                    value: 2,
                    label: "女歌手"
                },
                {
                    value: 3,
                    label: "乐队"
                }
            ],
            // 字母A_Z
            en: -1,
            ens: [],
            // 参数
            params:{
                // 返回数量
                limit : 30,
                // 偏移数量
                offset : 0,
                // 分类
                type : -1,
                // 语种
                area : -1,
                // 字母
                initial : -1
            },
            // 歌手列表
            singerList:[],
            // 刚开始的加载动画
            isLoading: true,
            // 是否显示加载更多动画
            loadingmore: false,
            // 是否还有数据
            loadingStatus: true
        }
    },
    methods:{
        // 获取A_Z列表
        getEn(){
            let ens = []
            for(let i = 0;i<26;i++){
                ens.push({
                    value: String.fromCharCode(97+i),
                    label: String.fromCharCode(65+i)
                })
            }
            ens.unshift({
                value: -1,
                label: "热门"
            })
            ens.push({
                value: 0,
                label: "其他"
            })
            this.ens = ens;
        },
        // 选择歌手分类
        chooseType(type,val){
            if(type == "lang"){
                this.lang = val;
                this.params.area = val;
                // console.log(1)
            }else if(type == "classify"){
                this.classify = val;
                this.params.type = val;
            }else if(type == "en"){
                this.en = val;
                this.params.initial = val;
            }
            this.params.offset = 0
            this.loadingStatus = true
            this.singerList = []
            this.isloading = true
            this.getsingerList();
        },
        // 获取歌手列表
        getsingerList(){
            this.isloading = true
            this.loadingStatus = false
            this.axios.get('artist/list?type='+ this.params.type +'&area='+ this.params.area +'&initial='+ 
                            this.params.initial +'&offset='+this.params.offset).then(res=>{
                if(res.status==200){
                    this.isLoading = false
                    this.singerList = this.singerList.concat(res.data.artists)
                    // console.log(res)
                    if(res.data.more){
                        this.loadingmore = true
                        this.loadingStatus = true
                        this.params.offset += 30
                    }else{
                        this.loadingmore = false
                    }
                }
            })
        },
        // 加载更多
        load(){
            if(this.loadingStatus){
                setTimeout(()=>{
                    this.getsingerList()
                    // console.log(1)
                },1000)
            }
        },
        // 判断是否滚到页面底部
        listenerFunction(){
            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动条滚动时，距离顶部的距离
            this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;//可视区的高度
            this.scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;//滚动条的总高度
            // console.log(this.scrollHeight,this.clientHeight,this.scrollTop)
            if(this.scrollTop+this.clientHeight>=this.scrollHeight){
                // console.log("到底了");
                this.load();
            }
        },

    },
    mounted(){
        this.getEn();
        this.getsingerList();
        // 监听函数
        window.addEventListener('scroll',this.listenerFunction)
        // window.onscroll = function(){
        // //变量scrollTop是滚动条滚动时，距离顶部的距离
        // var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        // //变量windowHeight是可视区的高度
        // var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // //变量scrollHeight是滚动条的总高度
        // var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //        //滚动条到底部的条件
        //        if(scrollTop+windowHeight == scrollHeight){
        //         //到了这个就可以进行业务逻辑加载后台数据了
        //     console.log("到了底部");
        //     // window.onscroll = '' 用于解除绑定
        //       }   
        // }
    }
}
</script>

<style scoped>
/* singer页面 */
.singer-wrapper li:hover{color: #fa2800;transition: all 0.4s;}
.singer-wrapper .filter .tag-lang{display: flex;margin-top: 20px;margin-bottom: 20px;}
.singer-wrapper .filter .tag-lang li{width: 56px;height: 28px;line-height: 28px;font-size: 13px;border-radius: 14px;margin-right: 6px;text-align: center;cursor: pointer;}
.singer-wrapper .filter .tag-lang li.active{background: #fa2800;font-weight: 700;color: #fff;}
.singer-wrapper .filter .tag-en{display: flex;flex-wrap: wrap;margin-top: 10px;}
.singer-wrapper .filter .tag-en li{width: 28px;height: 28px;margin-right: 14px;text-align: center; line-height: 28px;border-radius: 50%;font-size: 13px;color: #333;cursor: pointer;}
.singer-wrapper .filter .tag-en li:first-child{width: 56px;border-radius: 14px;}
.singer-wrapper .filter .tag-en li.active{border-radius: 14px;background: #fa2800;font-weight: 700;color: #fff;}
.singer-wrapper .filter .tag-en li:hover{color: #fa2800;transition: all 0.4s;}
.singer-wrapper .singer-list{display: flex;flex-wrap: wrap;margin: 30px -15px 0;}
.singer-wrapper .singer-list li{padding: 0 15px 30px;flex: 0 0 10%;max-width: 10%;}
.singer-wrapper .singer-list li .wrapper{padding-top: 100%;position: relative;background: #d9d9d9;border-radius: 50%;}
.singer-wrapper .singer-list li .img{position:absolute;top: 0;left: 0; border-radius: 50%;width: 100%;height: 100%;overflow: hidden;}
.singer-wrapper .singer-list li .info{margin-top: 15px;text-align: center;}
.singer-wrapper .singer-list li .info .name{font-size: 14;color: #4a4a4a;font-weight: 700;}
.singer-wrapper .singer-list li .info .count{font-size: 12px;color: red;margin-top: 10px;}
</style>