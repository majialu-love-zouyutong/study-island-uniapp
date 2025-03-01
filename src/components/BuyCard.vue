<script setup lang="ts">
import SpacerBox from './SpacerBox.vue';

 
</script>

<template>
  <view class="buy-card-container">
    <image src="/static/icons/wallet@3x.png" mode="scaleToFill" />
    <SpacerBox :width="18" />
    <view class="info">
      <text class="title">超多卡券</text>
      <text class="tip">办卡享更多优惠</text>
    </view>
    <view class="buy-btn">
      <text class="btn-text">立即办卡</text>
      <up-icon name="arrow-right" color="#909133" size="10" />
    </view>
  </view>
</template>

<style scoped lang="scss">
@import "~@/styles/rpx.scss";
@import "~@/styles/font.scss";
.buy-card-container {
  @include low-shadow; 
  display: flex;
  justify-content: space-between;
  padding: rpx(12) rpx(16);
  background-color: #fff;
  border-radius: rpx(5);
  image {
    width: rpx(30);
    height: rpx(30);
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    .title {
      @include bold-caption1;
      color: $u-main-color;
      text-align: start;
    }
    .tip {
      @include medium-caption2;
      color: $u-tips-color;
      text-align: start;
    }
  }
  .buy-btn {
    display: flex;
    align-items: center;
    .btn-text {
      @include regular-caption1;
      color: $u-tips-color;
    }
  }
}
</style>
