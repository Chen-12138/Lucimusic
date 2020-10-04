<template>
    <div>
        <Banner></Banner>
        <RecommendSongs></RecommendSongs>
        <RecommendMusic></RecommendMusic>
        <RecommendSinger></RecommendSinger>
    </div>
</template>

<script>
import Banner from '@/components/home/banner'
import RecommendSongs from '@/components/home/recommend-songs'
import RecommendMusic from '@/components/home/recommend-music'
import RecommendSinger from '@/components/home/recommend-singer'
export default {
    name : "Home",
    components : {
        Banner,
        RecommendSongs,
        RecommendMusic,
        RecommendSinger
    }
}
</script>

<style scoped>

</style>