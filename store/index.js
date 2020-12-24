export const state = {
    musicData: ''
}

export const mutations = {
    'SET_API_DATA'(state, data){
        state.musicData = data
    }
}

export const actions = {
    setApiData: ({commit}, data) => {
        commit('SET_API_DATA', data)
    }
}

export const getters = {
    musicData: (state) => {
        return state.musicData
    }
}
