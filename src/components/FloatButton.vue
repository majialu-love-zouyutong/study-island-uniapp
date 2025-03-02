<script setup lang="ts">
import SpacerBox from './SpacerBox.vue';
</script>

<template>
  <view class="float-button-container">
    <view class="open item">
      <up-icon name="scan" size="24" color="#fff" />
      <text class="text">开门</text>
    </view>
    <SpacerBox :height="15" />
    <view class="continue item">
      <up-icon name="clock" size="24" color="#3c9cff" />
      <text class="text">续费</text>
    </view>
    <SpacerBox :height="15" />
    <view class="leave item">
      <up-icon name="backspace" size="24" color="#f56c6c" />
      <text class="text">离店</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/font.scss';
@import '~@/styles/rpx.scss';
.float-button-container {
  padding: rpx(5) rpx(0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .item {
    @include low-shadow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: rpx(55);
    height: rpx(55);
    background-color: #fff;
    border-radius: 50%;
    .text {
      @include regular-footnote;
    }
  }
  .open {
    background-color: $u-primary;
    color: #fff;
  }
  .continue {
    color: $u-primary;
  }
  .leave {
    color: $u-error;
  }
}
</style>
