<script setup lang="ts">
import SpacerBox from './SpacerBox.vue';

interface Props {
  title: string;
  tips: string[];
}

const porps = defineProps<Props>();
</script>

<template>
  <view class="tool-tips-container">
    <view class="title">
      <text>{{ porps.title }}：</text>
    </view>
    <SpacerBox :height="10" />
    <view class="tips" v-for="(item, index) in porps.tips" :key="index">
      <text>{{ index + 1 }} 、 {{ item }}</text>
      <SpacerBox :height="10" />
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
.tool-tips-container {
  .title {
    @include regular-footnote;
    text-align: start;
    color: $u-main-color;
  }
  .tips {
    @include regular-caption2;
    text-align: start;
    color: $u-tips-color;
  }
}
</style>
