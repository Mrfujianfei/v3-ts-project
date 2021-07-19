<template>
  <div class="home">
    <span class="test">homePage</span>
    <span>demo1</span>
  </div>
  <h1>{{ name }}</h1>
  <el-button type="danger">危险按钮</el-button>
  <button
    @click="setName"
    @drag="setName"
    @mousedown="setName"
    @mouseover="setName"
  >
    修改名称
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import axios from '@/untils/axios';

export default defineComponent({
  name: 'homePage',
  setup: () => {
    const store = useStore(key);
    axios
      .get(
        'https://www.fastmock.site/mock/2f82fcaef2f445bf7e05e7ff91eb86b0/api/getProducts'
      )
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    return {
      name: store.state.user.name,
      setName: () => store.commit('user/setName', '小张'),
    };
  },
});
</script>
<style lang="less" scoped>
.home {
  color: red;

  .test {
    color: green;
  }
}
</style>
