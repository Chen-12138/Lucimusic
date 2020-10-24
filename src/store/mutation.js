import * as types from './mutation-type'

const mutations = {
    // 获取token
    [types.SET_TOKEN](state, token) {
        state.token = token
    },

    // 是否登录
    [types.SET_LOGINSTATUS](state, loginStatus) {
        state.loginStatus = loginStatus
    },

    // 获取用户信息
    [types.SET_USERINFO](state, userInfo) {
        state.userInfo = userInfo
    },

    // 搜索历史
    [types.SET_SEARCH_HISTORY](state, history) {
        state.searchHistory = history
    }
}

export default mutations