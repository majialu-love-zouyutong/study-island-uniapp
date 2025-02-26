<script setup lang="ts">
import { rpx } from '@/utils/rpx';

interface Props {
  height?: number;
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
