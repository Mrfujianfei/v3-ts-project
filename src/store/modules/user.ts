// 为 store state 声明类型
export interface State {
  name: string;
}

// 默认状态
const defaultState = {
  name: '',
};

const user = {
  namespaced: true,
  state: () => (defaultState),
  mutations: {
    setName(state: typeof defaultState, payload: string) {
      state.name = payload;
    },
  },
  actions: {
    patchName(context: any) {
      context.commit('setName', '小明');
    },
  },
  getters: {
    getDemoName(state: typeof defaultState) {
      return `${state.name}demo`;
    },
  },
};

export default user;
