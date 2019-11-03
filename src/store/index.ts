import Vue from 'vue';
import Vuex from 'vuex';
import { getMusic, likeMusic, deleteMusic } from '@/utils/api';
import cookie from 'js-cookie';
import { IMusic } from '@/utils/interface/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: '',
    musics: [] as any
  },
  getters: {
    auth(state) {
      let email = state.auth ? state.auth : cookie.get('superstar_email');

      return email;
    }
  },
  mutations: {
    setAuthUser(state, email) {
      state.auth = email;
    },
    updateMusics(state, musics) {
      state.musics = musics;
    },
    createMusic(state, music) {
      state.musics.push(music);
    },
    logout(state) {
      state.auth = '';
    },
    likeMusic(state, id: string) {
      const currentState = [...state.musics];

      currentState.find((music: IMusic, index: number) => {
        if (music.id == id) {
          state.musics[index].likes++;
        }
      });
    },
    removeMusic(state, id: string) {
      console.log('DELETE MUSIC WITH ID------->', id);
      const currentState = [...state.musics];

      currentState.find((music: IMusic, index: number) => {
        if (music.id == id) {
          state.musics.splice(index, 1);
        }
      });
    }
  },
  actions: {
    updateMusics({ commit }) {
      getMusic()
        .then(res => {
          commit('updateMusics', res.data);
        })
        .catch(e => {
          console.log('ERROR FROM ACTION --------->', e);
        });
    },
    favouriteMusic({ commit }, payload) {
      const { id, title } = payload;
      likeMusic(id, title)
        .then(res => {
          if (res.data) {
            commit('likeMusic', id);
          }
        })
        .catch(e => {
          console.log('ERROR WHILE LIKING A PICTURE-------->', e);
        });
    },
    removeMusic({ commit }, payload) {
      const { id, title } = payload;
      deleteMusic(id, title)
        .then(res => {
          if (res.data) {
            commit('removeMusic', id);
          }
        })
        .catch(e => {
          console.log('ERROR WHILE DELETING A PICTURE--------->', e);
        });
    }
  },
  modules: {}
});
