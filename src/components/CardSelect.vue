<script setup lang="ts">
import { ref } from 'vue';

const list = ref(['充值享优惠', '性价比卡券', '团购核销']);
</script>

<template>
  <view class="card-select-container">
    <up-subsection
      :list="list"
      :current="0"
      font-size="13"
      mode="subsection"
      inactive-color="#3c9cff"
    ></up-subsection>
  </view> 
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
</style>
