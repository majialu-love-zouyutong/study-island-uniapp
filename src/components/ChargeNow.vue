<script setup lang="ts">
import SpacerBox from './SpacerBox.vue';

// 更简洁的TS写法（需vue3.3+）
interface Item {
  num: number;
  price: number;
}

const props = withDefaults(
  defineProps<{
    items?: Item[];
  }>(),
  {
    items: () => [
      { num: 110, price: 99 },
      { num: 320, price: 299 },
      { num: 600, price: 499 },
      { num: 1000, price: 799 },
    ],
  }
);
</script>

<template>
  <view class="charge-now-container">
    <view class="title">请选择充值规格：</view>
    <SpacerBox :height="15" />
    <view class="specification">
      <view
        class="specification-item"
        v-for="item in props.items"
        :key="item.num"
      >
        <view class="num">{{ item.num }}元</view>
        <view class="price">售价¥{{ item.price }}</view>
      </view>
    </view>
    <SpacerBox :height="20" />
    <up-button type="primary" text="立即充值"></up-button>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';

.charge-now-container {
  .title {
    @include regular-footnote;
    text-align: start;
  }
  .specification {
    display: flex;
    justify-content: space-around;
    .specification-item {
      @include common-shadow;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      border-radius: rpx(5);
      padding: rpx(5);
      width: rpx(65);
      .num {
        @include medium-headline;
        color: $u-main-color;
      }
      .price {
        @include regular-caption2;
        color: $u-tips-color;
      }
    }
  }
}
</style>
