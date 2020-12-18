import { get, post } from './http'

/**
 * @method 获取轮播图
 */
export const getBanner = () => get('/banner', {})

/**
 * @method 搜索
 * @param {String} keywords 关键词
 * @param {Number} limit 返回数量 , 默认为 30
 * @param {Number} offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {Number} type 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 */
export const search = (keywords, limit, offset, type) =>
  get(
    `/search?keywords=${keywords}&limit=${limit}&offset=${offset}&type=${type}`,
    {}
  )

/**
 * @method 获取热搜列表
 */
export const getSearchHot = () => get('search/hot', {})

/**
 * @method 获取推荐歌单
 * @params limit 取出数量默认为 30
 */
export const getPersonalized = limit =>
  get(`/personalized?limit=${limit}`, {})

/**
 * @method 获取推荐歌曲
 */
export const getNewSongs = () => get(`/personalized/newsong`, {})

/**
 * @method 获取热门歌手
 */
export const getHotSinger = () => get(`/top/artists?offset=0&limit=30`, {})


/**
 * @method 获取歌手分类列表
 * @params cat 即 category Code,歌手类型,默认 1001,返回华语男歌手数据
 * @params limit 返回数量 , 默认为30
 * @params offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @params initial 按首字母索引查找参数, 如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传0
 */
export const getSingerList = params => get(`/artist/list`, { params })

/**
 * @method 获取歌手单曲
 * @params id 歌手 id
 */
export const getArtists = id => get(`/artists?id=${id}`, {})

/**
 * @method 获取歌手mv
 * @params id 歌手 id
 */
export const getArtistMv = params => get(`/artist/mv`, { params })

/**
 * @method 获取歌手专辑
 * @params limit 返回数量 , 默认为30
 * @params offset 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 */
export const getArtistAlbum = params => get(`/artist/album`, { params })

/**
 * @method 获取歌手描述
 * @params id 歌手 id
 */
export const getArtistDesc = id => get(`/artist/desc?id=${id}`, {})

/**
 * @method 获取相似歌手
 * @params id 歌手 id
 */
export const getArtistSimi = id => get(`/simi/artist?id=${id}`, {})

/**
 * @method 获取排行榜内容摘要
 */
export const getToplist = () => get(`/toplist/detail`, {})

/**
 * @method 获取歌单分类
 */
export const getCatList = () => get(`/playlist/catlist`, {})

/**
 * @method 获取热门歌单分类
 */
export const getHotlist = () => get(`/playlist/hot`, {})

/**
 * @method 获取歌单
 */
export const getPlayList = params => get(`/top/playlist`, { params })

/**
 * @method 获取歌单详情
 */
export const getPlayListDetail = (id) =>
  get(`/playlist/detail?id=${id}`, {})

/**
 * @method 获取歌曲详情
 */
export const getSongDetail = (ids, time) =>
  post(`/song/detail?timestamp=${time}`, { ids })

/**
 * @method 相关歌单推荐
 */
export const getRelatedPlaylist = id =>
  get(`/related/playlist?id=${id}`, {})

/**
 * @method 获取相似歌单
 */
export const getSimiPlaylist = id => get(`/related/playlist?id=${id}`, {})

/**
 * @method 歌单评论
 * @params id 歌单 id
 * @params limit 取出评论数量 默认为 20
 * @params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @params before 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 */
export const getCommentPlaylist = id =>
  get(`/comment/playlist?id=${id}`, {})

/**
 * @method 歌单收藏者
 * @params id 歌单 id
 * @params limit 取出评论数量 默认为 20
 * @params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export const getSubscribersPlaylist = params =>
  get(`/playlist/subscribers`, { params })

  /**
   * @method 获取MV
   * @param area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
   * @param order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
   * @param limit: 取出数量 , 默认为 30
   * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0s
   */
export const getMV = params =>
  get(`/mv/all`,{params})

/** 
 * @method 获取视频
 * @param id: 视频标签分类id
 * @param offset: 偏移数量
*/
export const getVideo = id =>{
  get(`/video/group?id=${id}`,{})
}