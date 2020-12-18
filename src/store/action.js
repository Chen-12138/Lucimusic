import * as types from './mutation-type'
import { playMode } from '@/utils/playConfig'
import utils from '@/utils/utils'
import { saveSearch, deleteSearch, clearSearch } from '@/utils/cache'

// 选择播放
export const selectPlay = function({ commit , state }, { list, index }) {
    commit(types.SET_SEQUENCE_LIST, list)
    if (state.mode === playMode.random) {
        let randomList = utils.shuffle(list)
        commit(types.SET_PLAYLIST, randomList)
        index = findIndex(randomList,list[index])
    } else {
        commit(types.SET_PLAYLIST, list)
    }
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_PLAYING_STATE, true)
}

// 播放全部
export const playAll = function({ commit }, { list }) {
    console.log(list);
    commit(types.SET_PLAY_MODE, playMode.sequence)
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX, 0)
    commit(types.SET_PLAYING_STATE, true)
}

// 暂停播放
export const pausePlay = function({ commit }){
    commit(types.SET_PLAYING_STATE, false)
}

// 移除播放
export const stopPlay = function({ commit }) {
    commit(types.SET_PLAYING_STATE, false)
    commit(types.SET_PLAYLIST, [])
    commit(types.SET_SEQUENCE_LIST, [])
    commit(types.SET_CURRENT_INDEX, -1)
}

// 保存搜索历史
export const saveSearchHistory = function({ commit }, query) {
    commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

// 移除单个搜索历史
export const deleteSearchHistory = function({ commit }, query) {
    commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

// 移除全部搜索历史
export const clearSearchHistory = function({ commit }, query) {
    commit(types.SET_SEARCH_HISTORY, clearSearch(query))
}

// 设置最近播放歌曲
export const saveHistoryList = function({ commit }) {
    
}