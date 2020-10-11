<template>
    <div class="fluid">
        <div class="mv-wrapper container">
            <div class="filter">
                <ul class="tag-lang">
                    <li v-for="item in areas" :key="item.label"
                    @click="chooseType('area',item.label)"
                    :class="area == item.label ? 'active' : ''"
                    >{{item.label}}</li>
                </ul>
                <ul class="tag-lang tag-type">
                    <li v-for="item in types" :key="item.label"
                    @click="chooseType('type',item.label)"
                    :class="type == item.label ? 'active' : ''"
                    >{{item.label}}</li>
                </ul>
                <ul class="tag-lang">
                    <li v-for="item in orders" :key="item.label"
                    @click="chooseType('order',item.label)"
                    :class="order == item.label ? 'active' : ''"
                    >{{item.label}}</li>
                </ul>
            </div>
            <div class="load-more">
                <div class="mv-box">
                    <ul class="mv-list">
                        <li v-for="item in mvList" :key="item.id">
                            <div class="wrapper">
                                <a href="">
                                    <div class="cover">
                                        <div class="img">
                                            <img :src="item.cover">
                                        </div>
                                        <div class="count flex-center">
                                            <i class="arrow"></i>
                                            <span>{{item.playCount | formatPlaycount}}</span>
                                        </div>
                                        <div class="action">
                                            <button class="play">
                                                <i class="iconfont icon-icon_play"></i>
                                            </button>
                                        </div>
                                        <div class="foot">
                                            <p>{{item.artistName}}</p>
                                            <p>{{item.duration | formatTime}}</p>
                                        </div>
                                    </div>
                                </a>
            
                            </div>
                            <div class="info">
                                <h2 class="ellipsis">{{item.name}}</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="load-bottom">
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
    name : "MV",
    data(){
        return {
            // 地区
            area : '全部',
            areas : [
                {
                    value : -1,
                    label : '全部'
                },
                {
                    value : 0,
                    label : '内地'
                },
                {
                    value : 1,
                    label : '港台'
                },
                {
                    value : 2,
                    label : '欧美'
                },
                {
                    value : 3,
                    label : '日本'
                },
                {
                    value : 0,
                    label : '韩国'
                },
            ],
            // 类型
            type : '全部',
            types : [
                {
                    value : -1,
                    label : '全部'
                },
                {
                    value : 0,
                    label : '官方版'
                },
                {
                    value : 1,
                    label : '原生'
                },
                {
                    value : 2,
                    label : '现场版'
                },
                {
                    value : 3,
                    label : '网易出品'
                },
            ],
            // 排序
            order : '上升最快',
            orders : [
                {
                    value : -1,
                    label : '上升最快'
                },
                {
                    value : 0,
                    label : '最热'
                },
                {
                    value : 1,
                    label : '最新'
                },
            ],
            offset : 0,
            limit : 12,
            mvList : []
        }
    },
    mounted(){
        this.getMV();
    },
    methods : {
        // 选择类型 
        chooseType(type,val){
            if(type == 'area'){
                this.area = val;
            }else if(type == 'type'){
                this.type = val;
            }else if(type = 'order'){
                this.order = val;
            }
            this.getMV()
        },
        // 获取MV
        getMV(){
            this.axios.get('mv/all?area='+this.area+'&type='+this.type+'&order='+this.order+
            '&offset='+this.offset+'&limit='+this.limit).then(res=>{
                console.log(res)
                this.mvList = res.data.data
            })
        }
    }
}
</script>

<style scoped>
/* mv页面 */
.mv-wrapper .filter .tag-lang{display: flex;margin-top: 20px;margin-bottom: 20px;}
.mv-wrapper .filter .tag-lang li{width: 56px;height: 28px;line-height: 28px;font-size: 13px;border-radius: 14px;margin-right: 6px;
text-align: center;cursor: pointer;transition: all .4s;}
.mv-wrapper .filter .tag-lang li.active{background: #fa2800;font-weight: 700;color: #fff;}
.mv-wrapper .filter .tag-en{display: flex;flex-wrap: wrap;margin-top: 10px;}
.mv-wrapper .filter .tag-en li{width: auto;height: 28px;margin-right: 14px;text-align: center; line-height: 28px;border-radius: 50%;
font-size: 13px;color: #333;cursor: pointer;transition: all .4s;}
.mv-wrapper .filter .tag-en li.active{width: 56px;border-radius: 14px;background: #fa2800;font-weight: 700;color: #fff;}
.mv-wrapper .filter .tag-en li:hover{color: #fa2800;transition: all 0.4s;}
</style>