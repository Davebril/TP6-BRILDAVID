import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pickedColor: "",
        headerBackgroundColor: ""
    },
    actions: {
        setPickedColorAction({commit},color) {
            commit('setPickedColor', color)
        },
        setHeaderBackgroundColorAction({commit},color) {
            commit('setHeaderBackgroundColor', color)
        }
    },
    mutations: {
        setPickedColor(state, color) {
            state.pickedColor = color
        },  
        setHeaderBackgroundColor(state, color) {
            state.headerBackgroundColor = color
        }        
    }
})