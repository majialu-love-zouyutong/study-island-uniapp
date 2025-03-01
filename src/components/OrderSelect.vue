<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref(1);
const value2 = ref(1);
const options1 = ref([
  {
    label: '未开始',
    value: 1,
  },
  {
    label: '进行中',
    value: 2,
  },
  {
    label: '已完成',
    value: 3,
  },
  {
    label: '已取消',
    value: 4,
  },
]);
const options2 = ref([
  {
    label: '开始时间倒序',
    value: 1,
  },
  {
    label: '开始时间正序',
    value: 2,
  },
  {
    label: '下单时间倒序',
    value: 3,
  },
  {
    label: '下单时间正序',
    value: 4,
  },
]);
</script>

<template>
  <view class="drop-down">
    <up-dropdown active-color="#3c9cff">
      <up-dropdown-item
        v-model="value1"
        title="全部订单"
        :options="options1"
      ></up-dropdown-item>
      <up-dropdown-item
        v-model="value2"
        title="默认排序"
        :options="options2"
      ></up-dropdown-item>
    </up-dropdown>
  </view>
</template>

<style scoped lang="scss"></style>
