<script setup lang="ts">
import { ref } from 'vue';
import { transformToFee } from '@/utils/transformToFee';
import SpacerBox from './SpacerBox.vue';
// 头像地址
const url = ref(
  'https://img0.baidu.com/it/u=193696007,2125345610&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
);
const cardNum = ref(22);
const balance = ref(1000);
const tip = ref('个人信息');
</script>

<template>
  <view class="personal-information-container">
    <view class="head">
      <view class="avatar">
        <image :src="url" mode="scaleToFill" class="image" />
      </view>
      <SpacerBox :width="10" /> 
      <view class="arrow">
        <text>{{ tip }}</text>
        <up-icon name="arrow-right" size="15" color="#fff" />
      </view>
    </view>
    <view class="bottom">
      <view class="item">
        <text class="num">{{ cardNum }}</text>
        <text class="text">我的卡包</text>
      </view>
      <view class="item">
        <text class="num">{{ transformToFee(balance) }}</text>
        <text class="text">我的余额</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
.personal-information-container {
  @include low-shadow;
  border-radius: rpx(5);
  overflow: hidden;
  .head {
    display: flex;
    align-items: center;
    background-color: $u-primary;
    padding: rpx(27) rpx(10);
    .avatar {
      .image {
        width: rpx(56);
        height: rpx(56);
        border-radius: 50%;
      }
    }
    .arrow {
      @include bold-caption1;
      flex: 1;
      display: flex;
      justify-content: space-between;
      color: #fff;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    margin: rpx(-5) 0;
    padding: rpx(6) 0;
    border-radius: rpx(5);
    z-index: 2;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .num {
        @include bold-title3;
        color: $u-primary;
      }
      .text {
        @include regular-caption1;
        color: $u-main-color;
      }
    }
  }
}
</style>
