<template>
  <div>detail</div>
  <h1>{{ name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'detail',
  setup: () => {
    const store = useStore(key);
    return {
      name: store.state.user.name,
    };
  },
});
</script>
