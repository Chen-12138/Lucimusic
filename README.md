# lucimusic

本项目的后台是某位大佬做的，不知道从哪获取到音乐数据，我根据接口，写了一下前端部分。
主要难点为音乐播放器的实现。

PS：该项目为初学时的作品，有些部分可能写得不太好，性能优化方面也没考虑。

收获：有了Vue项目经验，对各个知识点有了一定的了解，如keep-alive，vuex，computed，watch，filter，动态改变样式等等。

**一、最重要的歌曲播放**

**主要利用了vuex来管理歌曲的播放状态，播放模式等数据，并利用了keep-alive来缓存，这样可以是切换路由时歌曲持续播放，
该播放器支持显示歌词，切换播放模式，显示播放列表等等常用功能。**

![image](https://user-images.githubusercontent.com/64963886/114419882-65f0df00-9be6-11eb-9884-2c486b4e2fde.png)

**二、首页**


![image](https://user-images.githubusercontent.com/64963886/114414933-d5180480-9be1-11eb-862b-2794f9c92b34.png)

![image](https://user-images.githubusercontent.com/64963886/114415683-7d2dcd80-9be2-11eb-8787-ad7f11bf88d3.png)

**三、歌单页面**

![image](https://user-images.githubusercontent.com/64963886/114416093-e8779f80-9be2-11eb-9e5c-118309ddba8a.png)

**四、歌单详情页**

![image](https://user-images.githubusercontent.com/64963886/114416302-1eb51f00-9be3-11eb-94e8-368df4ceee25.png)

**五、歌手页面**

![image-20210412230444647](C:\Users\chenjiancheng\AppData\Roaming\Typora\typora-user-images\image-20210412230444647.png)

**六、视频页面**

![image](https://user-images.githubusercontent.com/64963886/114419225-d4816d00-9be5-11eb-913f-022b628837ca.png)

**七、搜索**

![image](https://user-images.githubusercontent.com/64963886/114417773-7607bf00-9be4-11eb-8e11-30d46c2102d4.png)

**八、个人页面**

![image](https://user-images.githubusercontent.com/64963886/114418836-78b6e400-9be5-11eb-8686-99361c1837a1.png)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
