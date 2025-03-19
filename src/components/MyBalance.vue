<script setup lang="ts">
import { transformToFee } from '@/utils/transformToFee';

interface Props {
  title?: string;
  balance: number;
}
const props = withDefaults(defineProps<Props>(), {
  title: '我的余额',
  balance: 0,
});
</script>

<template>
  <view class="my-balance-container">
    <view class="title">{{ props.title }}</view>
    <view class="balance">¥ {{ transformToFee(props.balance) }}</view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
.my-balance-container {
  @include low-shadow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $u-primary;
  padding: rpx(20) rpx(10);
  border-radius: rpx(5);
  color: white;
  .title {
    @include regular-footnote;
  }
  .balance {
    @include bold-subheadline;
  }
}
</style>
