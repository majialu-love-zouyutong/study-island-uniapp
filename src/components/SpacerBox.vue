<script setup lang="ts">
import { rpx } from '@/utils/rpx';

interface Props {
  /**
   * 垂直间距高度 (单位：设计稿 px 值)
   * @default 0
   */
  height?: number;

  /**
   * 水平间距宽度 (单位：设计稿 px 值)
   * @default 0
   */
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: 0,
  width: 0,
});
</script>

<template>
  <view
    :style="{
      height: `${rpx(props.height)}rpx`,
      width: `${rpx(props.width)}rpx`,
    }"
  ></view>
</template>

<style scoped lang="scss"></style>
