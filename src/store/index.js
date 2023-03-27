import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

export default createStore({
  state: () => ({
    userId: '',
    username: '',
    userProfileId: '',
  }),
  getters: {
  },
  mutations: {
    clear(state) {
      state.userId = '';
      state.username = '';
      state.userProfileId = '';
    },
    setUserData(state, userData){
      state.userId = userData.userId;
      state.username = userData.username;
      state.userProfileId = userData.userProfileId;
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
