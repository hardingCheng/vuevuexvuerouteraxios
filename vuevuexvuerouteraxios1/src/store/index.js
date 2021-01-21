import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        loginModules:{
            namespaced:true,
            state:{
                token:null,
                user:""
            },
            mutations:{
                setToken(state,token){
                    state.token = token;
                },
                updateToken(state,token){
                    state.token = token;
                }
            },
            actions:{

            },
            getters:{
                getToken(state){
                    return state.token
                }
            }
        }
    }
})
