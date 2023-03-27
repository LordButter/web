import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

export default createStore({
  state: () => ({
    userId: '',
    name: '',
    username: '',
  }),
  getters: {
  },
  mutations: {
    clear(state) {
      state.userId = '';
      state.name = '';
      state.username = '';
    },
    setUserData(state, userData){
      state.userId = userData.userId;
      state.name = userData.name;
      state.username = userData.username;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3/24, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})
