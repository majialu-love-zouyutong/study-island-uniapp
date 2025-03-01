<script setup lang="ts">
import { $uPrimary } from '@/styles/const';
import SpacerBox from './SpacerBox.vue';

interface Props {
  title?: string;
  location?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '自习岛(24小时营业)',
  location: '四川省成都市高新西区西源大道2006号电子科技大学',
});
</script>

<template>
  <view class="location-and-call-container">
    <view class="text">
      <text class="title up-line-1">{{ props.title }}</text>
      <SpacerBox :height="5" />
      <view class="location">
        <up-icon name="map" size="12" :color="$uPrimary" />
        <text class="site up-line-1">
          {{ props.location }}
        </text>
      </view>
    </view>
    <SpacerBox :width="11" />
    <view class="navigation icon">
      <image
        style="width: 25rpx; height: 25rpx"
        src="@/static/icons/navigate@3x.png"
        mode="scaleToFill"
      />
    </view>
    <SpacerBox :width="11" />
    <view class="phone icon">
      <image
        style="width: 25rpx; height: 25rpx"
        src="@/static/icons/phone@3x.png"
        mode="scaleToFill"
      />
    </view>
  </view>
  <view class="navigation"></view>
  <view class="phone"></view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
.location-and-call-container {
  @include low-shadow;
  padding: rpx(10);
  background-color: #e0eaff;
  border-radius: rpx(10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    .title {
      @include bold-body;
      text-align: start;
      color: $u-primary;
    }
    .location {
      display: flex;
      align-items: center;
      .site {
        @include regular-caption2;
        color: $u-primary-disabled;
      }
    }
  }
  .icon {
    width: rpx(25);
    height: rpx(25);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
  }
}
</style>
