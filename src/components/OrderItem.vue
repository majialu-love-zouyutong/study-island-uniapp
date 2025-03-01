<script setup lang="ts">
import { transformToFee } from '@/utils/transformToFee';
import { ref } from 'vue';
import SpacerBox from './SpacerBox.vue';
enum OrderStatus {
  unstart,
  processing,
  completed,
  canceled,
}

const area = ref('阳光区');
const num = ref(1);
const name = ref('学习岛');
const status = ref(OrderStatus.unstart);
const startTime = ref('2025-01-10 22:00:00');
const endTime = ref('2025-01-10 23:00:00');
const orderTime = ref('2025-01-10 22:00:00');
const payment = ref(0);
</script>

<template>
  <view class="order-item-container">
    <view class="head">
      <view class="text">
        <view class="title">{{ area }} {{ num }}号 ></view>
        <view class="name">{{ name }}</view>
      </view>
      <view class="status">
        <up-button type="primary" text="进行中"></up-button>
      </view>
    </view>
    <SpacerBox :height="10" />
    <view class="progress">
      <view class="time">
        <view class="hour">{{ startTime.slice(-8, -3) }}</view>
        <view class="date">{{ startTime.slice(0, 10) }}</view>
      </view>
      <view class="line">
        <up-line-progress :percentage="50"></up-line-progress>
      </view>
      <view class="time">
        <view class="hour">{{ endTime.slice(-8, -3) }}</view>
        <view class="date">{{ endTime.slice(0, 10) }}</view>
      </view>
    </view>
    <SpacerBox :height="10" />
    <view class="bottom">
      <view class="order-time">下单时间：{{ orderTime }}</view>
      <view class="payment">实付款：¥ {{ transformToFee(payment) }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/font.scss';
@import '~@/styles/rpx.scss';
.order-item-container {
  @include low-shadow;
  padding: rpx(10);
  margin-bottom: rpx(10);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: rpx(5);
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      flex: 1;
      .title {
        @include regular-headline;
        text-align: start;
        color: $u-main-color;
      }
      .name {
        @include regular-caption2;
        text-align: start;
        color: $u-tips-color;
      }
    }
    .status {
      width: rpx(76);
      height: rpx(36);
    }
  }
  .progress {
    display: flex;
    align-items: center;
    .time {
      width: rpx(80);
      .hour {
        @include bold-title2;
        color: $u-primary;
      }
      .date {
        @include bold-caption2;
        color: $u-primary;
      }
    }
    .line {
      flex: 1;
    }
  }
  .bottom {
    @include regular-caption1;
    display: flex;
    justify-content: space-between;
    color: $u-content-color;
  }
}
</style>
