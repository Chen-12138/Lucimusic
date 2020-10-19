<template>
    <div class="artist-box">
        <div class="tool-head">
            <div class="item play-item">
                <i class="iconfont icon-icon_play"></i>
                播放全部
            </div>
        </div>
        <table class="artist-table">
            <thead>
                <tr>
                    <th class="th-index">序号</th>
                    <th class="th-name">歌曲</th>
                    <th class="th-artist">歌手</th>
                    <th class="th-album">专辑</th>
                    <th class="th-duration">时长</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in songs" :key="item.id">
                    <td>
                        <div class="index-container flex-center">
                            <span class="num">{{index | formatIndex}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="name-container">
                            <div class="avatar">
                                <img :src="item.al.picUrl">
                            </div>
                            <p class="name ellipsis">{{item.name}}</p>
                        </div>
                    </td>
                    <td>
                        <div class="artist-container">
                            <p class="author ellipsis">{{item.ar[0].name}}</p>
                        </div>
                    </td>
                    <td>
                        <div class="album-container">
                            <p class="ellipsis">{{item.al.name}}</p>
                        </div>
                    </td>
                    <td>
                        <div class="duration-container">
                            <p>{{item.dt | formatTime}}</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:{
        songs : {
            type : Array
        }
    },
    mounted(){
        // console.log(this.songs)
    }
}
</script>

<style scoped>
/* artist-box */
.artist-box .tool-head{display: flex;align-items: center;justify-content: flex-end;margin: 15px 0;}
.artist-box .tool-head .item{border-radius: 50px;cursor: pointer;padding: 7px 15px;}
.artist-box .tool-head .item i{margin-right: 5px;}
.artist-box .tool-head .play-item{background: #fa2800;color: #fff;}
.artist-box .artist-table{width: 100%;}
.artist-box .artist-table thead{width: 100%;height: 50px;line-height: 50px;background: #fafafa;color: #999;}
.artist-box .artist-table thead th{text-align: left;font-weight: 300;padding: 0 9px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.artist-box .artist-table thead th.th-index{width: 10%;text-align: center;}
.artist-box .artist-table thead th.th-name{width: 40%;}
.artist-box .artist-table thead th.th-artist{width: 25%;}
.artist-box .artist-table thead th.th-album{width: 15%;}
.artist-box .artist-table thead th.th-duration{width: 15%;padding-right: 40px;}
.artist-box .artist-table tbody tr{height: 50px;line-height: 50px;transition: background-color 0.2s linear;}
.artist-box .artist-table tbody tr:nth-child(2n){background: #f7f7f7;}
.artist-box .artist-table tbody tr:hover{background: #e8e9ed;}
.artist-box .artist-table tbody tr td{padding: 0 9px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
.artist-box .artist-table tbody tr .name-container{display: flex;align-items: center;}
.artist-box .artist-table tbody tr .name-container .avatar{width: 35px;height: 35px;border-radius: 5px;margin-right: 10px;}
.artist-box .artist-table tbody tr .name-container .avatar img{width: 100%;height: 100%;}
</style>