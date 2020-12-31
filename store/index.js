import axios from "axios";

export const state = () => {
    return {
        // api data
        musicData: "",
        // my track id to get complete data from API
        currentMusicId: "",
        // artist album
        album: null
    };
};

export const mutations = {
    SET_API_DATA(state, data) {
        state.musicData = data;
    },
    SET_CURRENT_MUSIC_ID(state, id) {
        state.currentMusicId = id;
    },
    SET_ALBUM(state, data) {
        state.album = data;
    }
};

export const actions = {
    setApiData: ({ commit }, data) => {
        commit("SET_API_DATA", data);
    },
    setCurrentMusicId: ({ commit }, id) => {
        commit("SET_CURRENT_MUSIC_ID", id);
    },
    setAlbum({ commit }, id) {
        const options = {
            method: "GET",
            url: `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
            headers: {
                "x-rapidapi-key":
                    "4fca86ca44msh53fd25fe45207b7p1af68bjsn640145f8b0fc",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        };

        axios
            .request(options)
            .then(function(response) {
                console.log(response.data);
                commit("SET_ALBUM", response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const getters = {
    musicData: state => {
        // return api data
        return state.musicData;
    },
    currentMusicId: state => {
        return state.currentMusicId;
    },
    album: state => {
        return state.album;
    }
};
