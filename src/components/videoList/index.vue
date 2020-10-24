<template>
  <div class="mv-box">
    <ul class="mv-list">
        <li v-for="item in videoList" :key="item.id">
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
</template>

<script>
export default {
    props:{
            videoList : {
                type : Array
            }
        },
}
</script>

<style>
.mv-box .mv-list{display: flex;flex-wrap: wrap;margin: 0 -15px;}
.mv-box .mv-list li{flex: 0 0 25%;max-width: 25%; padding: 0 15px 30px;box-sizing: border-box;cursor: pointer;}
.mv-box .mv-list li img{width: 100%;height: 100%;}
.mv-box .mv-list li .info{margin-top: 15px;}
.mv-box .mv-list li .info h2{font-size: 14px;font-weight: 500;}
.mv-box .mv-list li .wrapper{position: relative;}
/* .mv-box .mv-list li .wrapper:hover{top:-3px; left: -1.5px; box-shadow: 0px 5px 10px 3px #ccc;} */
.mv-box .mv-list li .wrapper .cover{position: relative;}
.mv-box .mv-list li .wrapper .cover:hover .action{display: flex;}
.mv-box .mv-list li .wrapper .cover .img{border-radius: 4px;overflow: hidden;width: 100%;height: 100%;}
.mv-box .mv-list li .wrapper .cover .count{position: absolute;top: 1px;right: 16px;height: 24px;font-weight: 700;font-size: 12px;line-height: 24px;
background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;color: #fff;background-size: cover;padding: 9px;padding-right: 12px;}
.mv-box .mv-list li .wrapper .cover .count .arrow{display: block;border-width: 4px 0 4px 6px;border-style: solid;margin-right: 5px;
border-color: transparent transparent transparent #fff;}
.mv-box .mv-list li .wrapper .cover .action{display: none;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}
.mv-box .mv-list li .wrapper .cover .action .play{width: 32px;height: 32px;border-radius: 50%;background: #fa2800;cursor: pointer;color: #fff;border: none;}
.mv-box .mv-list li .wrapper .cover .foot{color: #fff; position: absolute;bottom: 0;left: 0;background: rgba(0,0,0,0.6);
width: 100%;height: 35px;display: flex;align-items: center;justify-content: space-between;padding: 0 10px;}
</style>