<script setup lang="ts">
import FunctionPanel from '@/components/FunctionPanel.vue';
import LocationAndCall from '@/components/LocationAndCall.vue';
import SpacerBox from '@/components/SpacerBox.vue';
import { rpx } from '@/utils/rpx';
import { reactive, ref } from 'vue';
// 获取安全区域
const safe = uni.getWindowInfo().safeArea;
// 轮播图数据
const swiperList = reactive([
  'https://img1.baidu.com/it/u=3496589531,673233776&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067',
  'http://img0.baidu.com/it/u=3659763723,3136777865&fm=253&app=138&f=JPEG?w=800&h=1067',
  'http://img1.baidu.com/it/u=3301927234,1431666699&fm=253&app=138&f=JPEG?w=800&h=1067',
]);

// 按钮字体样式
const customStyle = {
  height: `${rpx(50)}rpx`,
  borderRadius: '0',
};

// 宣传标语
const slogan = ref('学习岛，给追求卓越的你一片安静的海岸');
</script>

<template>
  <SpacerBox :height="safe.top" />
  <!-- 轮播图:由于其没有左右padding,所以移动到外边去 -->
  <view class="swiper">
    <up-swiper
      :list="swiperList"
      :indicator="true"
      height="200"
      :radius="0"
    ></up-swiper>
  </view>
  <view class="index-container">
    <SpacerBox :height="15" />
    <!-- 导航和联系方式 -->
    <view class="loacation-and-call">
      <LocationAndCall />
    </view>
    <SpacerBox :height="15" />
    <!-- 团购核销和预订座位 -->
    <view class="group-and-book">
      <up-button type="warning" :custom-style="customStyle">
        <text class="btn-text">团购核销</text>
      </up-button>
      <up-button type="primary" :custom-style="customStyle">
        <text class="btn-text">预订座位</text>
      </up-button>
    </view>
    <SpacerBox :height="15" />
    <view class="slogan">
      <text class="slogan-text">{{ slogan }}</text>
    </view>
    <SpacerBox :height="15" />
    <FunctionPanel />
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
.index-container {
  padding: 0 rpx(18);
  .group-and-book {
    @include high-shadow;
    display: flex;
    border-radius: rpx(50);
    overflow: hidden;
    .btn-text {
      @include bold-title2;
    }
  }
  .slogan {
    text-align: center;
    .slogan-text {
      @include medium-subheadline;
      color: $u-primary;
    }
  }
}
</style>
