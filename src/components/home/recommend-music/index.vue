<template>
    <div class="container recommend-music">
        <h2 class="title">推荐歌曲</h2>
        <div class="list">
            <div class="item ">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">01</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img src="https://p1.music.126.net/hh8cQ-Zd5SxVH4PzguGpYQ==/109951165342791905.jpg?param=150y150" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">Wild Life</p>
                        <p class="author ellipsis">
                          <span>OneRepublic</span>
                        </p>
                    </div>
                    <p class="album">《Wild Life》</p>
                    <p class="duration transition">
                        04:27
                    </p>
                </div>
            </div>
            <div class="item ">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">01</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img src="https://p1.music.126.net/hh8cQ-Zd5SxVH4PzguGpYQ==/109951165342791905.jpg?param=150y150" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">Wild Life</p>
                        <p class="author ellipsis">
                          <span>OneRepublic</span>
                        </p>
                    </div>
                    <p class="album">《Wild Life》</p>
                    <p class="duration transition">
                        04:27
                    </p>
                </div>
            </div>
            <div class="item ">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">01</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img src="https://p1.music.126.net/hh8cQ-Zd5SxVH4PzguGpYQ==/109951165342791905.jpg?param=150y150" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">Wild Life</p>
                        <p class="author ellipsis">
                          <span>OneRepublic</span>
                        </p>
                    </div>
                    <p class="album">《Wild Life》</p>
                    <p class="duration transition">
                        04:27
                    </p>
                </div>
            </div>
            <div class="item ">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">01</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img src="https://p1.music.126.net/hh8cQ-Zd5SxVH4PzguGpYQ==/109951165342791905.jpg?param=150y150" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">Wild Life</p>
                        <p class="author ellipsis">
                          <span>OneRepublic</span>
                        </p>
                    </div>
                    <p class="album">《Wild Life》</p>
                    <p class="duration transition">
                        04:27
                    </p>
                </div>
            </div>
            <div class="item ">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">01</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img src="https://p1.music.126.net/hh8cQ-Zd5SxVH4PzguGpYQ==/109951165342791905.jpg?param=150y150" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">Wild Life</p>
                        <p class="author ellipsis">
                          <span>OneRepublic</span>
                        </p>
                    </div>
                    <p class="album">《Wild Life》</p>
                    <p class="duration transition">
                        04:27
                    </p>
                </div>
            </div>
            <div class="item ">
                <div class="wrapper flex-center shadow">
                    <div class="index-container">
                        <span class="num">01</span>
                    </div>
                    <div class="avatar">
                        <div class="img">
                            <img src="https://p1.music.126.net/hh8cQ-Zd5SxVH4PzguGpYQ==/109951165342791905.jpg?param=150y150" class="el-image__inner">
                        </div>
                    </div>
                    <div class="info">
                        <p class="name ellipsis">Wild Life</p>
                        <p class="author ellipsis">
                          <span>OneRepublic</span>
                        </p>
                    </div>
                    <p class="album">《Wild Life》</p>
                    <p class="duration transition">
                        04:27
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name : 'RecommendMusic'
}
</script>

<style scoped>
.recommend-music .title{font-size: 16px;margin: 15px auto;}
.recommend-music .list{display: flex;flex-wrap: wrap;margin: 0 -15px;min-width: 800px;}
.recommend-music .list .item{flex: 0 0 50%;max-width: 50%; margin-bottom: 20px;height: 80px;padding: 0 15px 30px;}
.recommend-music .list .item .wrapper{width: 100%;height: 80px; justify-content: start;padding: 0 4%;border-radius: 5px;position: relative;}
.recommend-music .list .item .wrapper .index-container{margin-right: 20px;width: 30px;}
.recommend-music .list .item .wrapper .avatar{width: 55px;height: 55px;margin-right: 30px;position: relative;min-width: 55px;}
.recommend-music .list .item .wrapper .avatar img{width: 100%;height: 100%;border-radius: 5px;}
.recommend-music .list .item .wrapper .info{width: 15%;}
.recommend-music .list .item .wrapper .info .name{font-size: 14px; color: #333;font-weight: bold;margin-bottom: 10px;}
.recommend-music .list .item .wrapper .info .author{font-size: 12px;color: #666;}
.recommend-music .list .item .wrapper .album{margin-left: 80px; font-size: 14px;}
.recommend-music .list .item .wrapper .duration{margin-left: 80px;font-size: 14px;position: absolute; right: 0%;margin-right: 20px;}
</style>