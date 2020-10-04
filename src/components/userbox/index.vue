<template>
    <div class="footer">
        <div class="main container">
            <p class="title">Lucimusic</p>
            <p class="desc">Lucimusic</p>
            <div class="icon flex-row">
                <a href="">
                    <span class="flex-center">
                        <i class="iconfont icon-netease"></i>
                    </span>
                </a>
                <a href="">
                    <span class="flex-center">
                        <i class="iconfont icon-github"></i>
                    </span>
                </a>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <p>
                    <span>Copyright © 2012-2020</span>
                    <a href="">Lucimusic</a>
                    <span>. Designed by</span>
                    <a href="">Lucifer</a>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer{width: 100%;background: #161e27;color: #6d7685;}
.footer .main{height: 200px;}
.footer .main .title{position: relative;top: 45px;color: #fff;padding: 0 1rem;}
.footer .main .title::before{content: "";position: absolute; width: 3px;background: #fa2800;
top: 50%;left: 0%;height: 15px;border-radius: 5px;transform: translate(0%, -50%);}
.footer .main .desc{position: relative;top: 80px;font-size: 12px;}
.footer .main .icon a{    position: relative;top: 110px; border-radius: 50%;text-align: center;width: 34px;height: 34px;font-size: 1rem;background-color: #232a31;border-color: #232a31;color: #6d7685;display: flex;font-weight: 400;margin: 0.25rem;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;}
.footer .main .icon a span{position: absolute;width: 100%;height: 100%;top: 0;}
.footer .copyright{border-top: 1px #232a31 solid; height: 55px;line-height: 55px;font-size: 12px;}
.footer .copyright a{color: #6d7685;}
</style>