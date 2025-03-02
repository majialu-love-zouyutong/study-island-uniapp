<script setup lang="ts">
import { ref } from 'vue';
import SpacerBox from './SpacerBox.vue';
import { makePhoneCall } from '@/utils/makePhoneCall';

// 定义Emits
const emit = defineEmits(['connect-wifi']);

// 数据
const items = ref([
  {
    id: 1,
    name: 'diamond@3x.png',
    description: '性价比',
  },
  {
    id: 2,
    name: 'wallet@3x.png',
    description: '卡券套餐',
  },
  {
    id: 3,
    name: 'charge@3x.png',
    description: '充值优惠',
  },
  {
    id: 4,
    name: 'telephone@3x.png',
    description: '联系商家',
  },
  {
    id: 5,
    name: 'wifi@3x.png',
    description: '连WIFI',
  },
  {
    id: 6,
    name: 'locker@3x.png',
    description: '用储物柜',
  },
  {
    id: 7,
    name: 'printer@3x.png',
    description: '用打印机',
  },
  {
    id: 8,
    name: 'question@3x.png',
    description: '常见问题',
  },
]);

// 点击处理函数
const handleFunctionClick = (id: number) => {
  switch (id) {
    case 4: // 打电话
      makePhoneCall();
      break;
    case 5: // 连接WIFI
      emit('connect-wifi');
      break;
    case 6: // 用储物柜
      uni.navigateTo({
        url: '/pagesIndex/lock/lock',
      });
      break;
    case 7: // 用打印机
      uni.navigateTo({
        url: '/pagesIndex/printer/printer',
      });
      break;
    case 8: // 常见问题
      uni.navigateTo({
        url: '/pagesIndex/questions/questions',
      });
      break;
    default:
      uni.switchTab({
        url: '/pages/card/card',
      });
  }
};
</script>

<template>
  <view class="function-panel-container">
    <view
      @click="handleFunctionClick(item.id)"
      v-for="item in items"
      :key="item.id"
      class="function"
    >
      <image
        :src="`/static/icons/${item.name}`"
        mode="scaleToFill"
        class="image"
      />
      <SpacerBox :height="5" />
      <text class="text">{{ item.description }}</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
.function-panel-container {
  @include common-shadow;
  padding: rpx(13) rpx(15);
  background-color: #fff;
  border-radius: rpx(10);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: rpx(20);
  .function {
    display: flex;
    flex-direction: column;
    align-items: center;
    .image {
      width: rpx(30);
      height: rpx(30);
    }
    .text {
      @include regular-footnote;
      color: $u-main-color;
    }
  }
}
</style>
