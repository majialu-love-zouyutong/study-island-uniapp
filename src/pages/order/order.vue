<script setup lang="ts">
import OrderItem from '@/components/OrderItem.vue';
import OrderSelect from '@/components/OrderSelect.vue';
</script>

<template>
  <view class="order-select">
    <OrderSelect />
  </view>
  <view class="order-container">
    <view class="order-list">
      <view v-for="item in 5" class="order-item">
        <OrderItem />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/font.scss';
@import '~@/styles/rpx.scss';
.order-select {
  @include regular-subheadline;
  color: $u-main-color;
  background-color: #fff;
}
.order-container {
  padding: rpx(10) rpx(18);
  // background-color: pink;
}
</style>
