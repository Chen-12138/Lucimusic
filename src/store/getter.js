// 登录状态
export const loginStatus = state => {
    return (
        state.loginStatus || JSON.parse(window.sessionStorage.getItem('loginStatus'))
    )
}

// 用户信息
export const userInfo = state => {
    return state.userInfo || JSON.parse(window.sessionStorage.getItem('userInfo'))
}

// 搜索历史
export const searchHistory = state => {
    return state.searchHistory
}