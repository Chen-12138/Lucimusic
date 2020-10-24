import { getSearch } from '@/utils/cache'

const state = {
    // token
    token: null,
    // 是否登录
    loginStatus: null,
    // 用户信息
    userInfo: null,
    // 搜索历史
    searchHistory: getSearch()
}

export default state