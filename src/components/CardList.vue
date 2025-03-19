<script setup lang="ts">
import { onActivated, onMounted } from 'vue';
import CardItem from './CardItem.vue';
import SpacerBox from './SpacerBox.vue';

// 卡券数据
const cardItemProps = [
  {
    info: '【新用户专享受/白天时段/需要提前预定】',
    title: '2小时体验卡',
    area: '阳光区,沉浸区,开放区',
    time: '不限制',
    price: 6.7,
    oldPrice: 15.6,
  },
];

onMounted(() => {
  console.log('CardList 挂载', Date.now());
});

onActivated(() => {
  console.log('CardList 激活', Date.now());
});
</script>

<template>
  <view class="card-item" v-for="item in cardItemProps" :key="item.title">
    <CardItem :item="item" />
  </view>
  <SpacerBox :height="15" />
</template>

<style scoped lang="scss"></style>
