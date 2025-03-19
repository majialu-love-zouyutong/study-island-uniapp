<script setup lang="ts">
import { transformToFee } from '@/utils/transformToFee';

interface Item {
  info: string;
  title: string;
  area: string;
  time: string;
  price: number;
  oldPrice: number;
}

const props = defineProps<{
  item: Item;
}>();
</script>

<template>
  <view class="card-item-container">
    <view class="info">{{ props.item.info }}</view>
    <view class="title">{{ props.item.title }}</view>
    <view class="area">可用范围：{{ props.item.area }}</view>
    <view class="time">有效期：{{ props.item.time }}</view>
    <view class="bottom">
      <view>
        <text class="price">¥{{ transformToFee(props.item.price) }}</text>
        <text>&nbsp; 原价 &nbsp;</text>
        <text class="old-price">
          {{ transformToFee(props.item.oldPrice) }}元
        </text>
      </view>
      <up-icon name="arrow-rightward" size="15" color="#fff" />
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';

.card-item-container {
  @include low-shadow;
  @include regular-caption2;
  text-align: start;
  background-color: $u-primary;
  height: rpx(130);
  padding: rpx(10);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: rpx(5);
  color: white;
  .info {
    @include bold-footnote;
    text-align: start;
  }
  .title {
    @include bold-footnote;
    text-align: start;
  }
  .bottom {
    @include regular-caption2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $u-tips-color;
    padding-top: rpx(5);
    .price {
      @include bold-caption1;
    }
    .old-price {
      @include regular-caption2;
      text-decoration: line-through;
    }
  }
}
</style>
