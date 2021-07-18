import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import user from './modules/user';
// 定义 injection key
export const key: InjectionKey<Store<any>> = Symbol('store的唯一标识');

export const store = createStore({
  modules: {
    user,
  },
});
