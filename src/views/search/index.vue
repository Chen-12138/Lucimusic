<template>
<div class="fluid">
    <div class="search-wrap">
        <div class="layer">
            <div class="search-box flex-row">
                <input type="text" class="search" 
                v-model="keyword"
                placeholder="搜索音乐/MV/歌单/歌手">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
        <div class="main container">
            <div class="tab flex-row">
                <h2>搜索结果</h2>
                <a :class="type === 1 ? 'active' : ''" @click="changeType(1)">单曲</a>
                <a :class="type === 100 ? 'active' : ''" @click="changeType(100)">歌手</a>
                <a>专辑</a>
                <a :class="type === 1004 ? 'active' : ''" @click="changeType(1004)">视频</a>
                <a :class="type === 1000 ? 'active' : ''" @click="changeType(1000)">歌单</a>
            </div>
            <div class="content">
                <ArtistList :songs = "songs" v-if="type === 1" />
                <SingerList :singerList = "singerList" v-if="type === 100" />
                <PlayList :playList = "playList" v-if="type === 1000" />
                <VideoList :videoList = "videoList" v-if="type === 1004" />
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
import ArtistList from '@/components/artistList'
import SingerList from '@/components/singerList'
import PlayList from '@/components/playList'
import VideoList from '@/components/videoList'
export default {
    data() {
        return {
            keyword: '',
            limit: 30,
            offset: 0,
            type: 1,
            songs: [],
            singerList: [],
            albums: [],
            videoList: [],
            playList: []
        }
    },
    components: {
        ArtistList,
        SingerList,
        PlayList,
        VideoList
    },
    watch: {
        keyword(newVal, oldVal) {
            // console.log(newVal, oldVal)
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                this.search(this.type)
            }, 100)
        },
        $route(newObj, oldObj) {
            if(newObj.query.keyword !== oldObj.query.keyword) {
                this.keyword = newObj.query.keyword
                this.search(1)
            }
        }
    },
    methods: {
        // 更改type
        changeType(type) {
            this.type = type
            this.search(this.type)
        },
        // 搜索
        search(type) {
            // console.log(this.keyword)
            this.$api.search(this.keyword, this.limit, this.offset, type)
            .then(res => {
                if (res.code === 200 ) {
                    switch (type) {
                        case 1: {
                            let lists = res.result.songs
                            // console.log(res)
                            let sliceArr = []
                            lists.map(item => {
                                sliceArr.push(item.id)
                            })
                            // console.log(sliceArr)
                            this.getSongDetail(sliceArr)
                            break
                        }
                        case 100: {
                            // console.log(res)
                            this.singerList = res.result.artists
                        }
                        case 1000: {
                            // console.log(res)
                            this.playList = res.result.playlists
                        }
                        case 1004: {
                            // console.log(res)
                            this.videoList = res.result.mvs
                        }
                    }
                }
            })
        },
        // 获取歌曲列表
        async getSongDetail(sliceArr) {
            let ids = sliceArr.join(',')
            let timestamp = new Date().valueOf()
            try {
                let beforeRes = await this.$api.getSongDetail(ids, timestamp)
                this.songs = beforeRes.songs
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        let keyword = this.$route.query.keyword
        if (keyword) {
            this.keyword = keyword
            this.search(1)
        }
    }
}
</script>

<style>
.search-wrap .layer{width: 100%;height: 250px;position: relative;margin-top: -20px;}
.search-wrap .layer:before{content: '';width: 100%;height: 250px;background: linear-gradient(270deg,#f27121,#e94057,#8a2387);
opacity: .3;display: block;position: absolute;top: 0;left: 0;}
.search-wrap .layer .search-box{width: 720px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);
background: #f5f5f5;border-radius: 2px;}
.search-wrap .layer .search-box input{height: 54px;flex: 1;line-height: 54px;outline: none;padding-left: 10px;display: inline-block;border: none;}
.search-wrap .layer .search-box i{font-size: 20px;padding: 16px;cursor: pointer;}

.search-wrap .main .tab{display: flex;align-items: baseline;margin-top: 43px;margin-bottom: 42px;}
.search-wrap .main .tab h2{font-size: 22px;font-weight: 600;line-height: 30px;margin-right: 40px;}
.search-wrap .main .tab a{display: inline-block;height: 20px;line-height: 20px;margin-right: 34px;font-weight: 300;color: #333;cursor: pointer;position: relative;}
.search-wrap .main .tab a.active:after{content: '';position: absolute;width: 100%;bottom: 0;left: 0;height: 5px;background: #fa2800;opacity: .5;}
</style>