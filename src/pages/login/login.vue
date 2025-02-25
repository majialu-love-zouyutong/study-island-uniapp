<script setup lang="ts">
import SpacerBox from '@/components/SpacerBox.vue';
import { rpx } from '@/utils/rpx';
import { ref, watch, watchEffect } from 'vue';
// logo地址
const url =
  'https://cdn.jsdelivr.net/gh/majialu-love-zouyutong/pictures/202502242022019.png';
// 宣传标语
const slogan = '学习岛，给追求卓越的你一片安静的海岸';

// 按钮字体样式
const customStyle = {
  width: `${rpx(250)}rpx`,
  height: `${rpx(40)}rpx`,
  fontWeight: 500,
  fontSize: `${rpx(13)}rpx !important`,
  lineHeight: `${rpx(18)}rpx !important`,
  textAlign: 'center',
};

// 普通登录按钮
const commonLogin = '手机号安全登录';
// 小程序平台登录按钮
const plantformLogin = '微信一键登录';

// 协议同意变量
const isAgree = ref(false);
</script>
<template>
  <view class="login-container">
    <!-- 到顶部距离 -->
    <SpacerBox :height="50" />
    <!-- logo -->
     <!-- TODO: 修复在平板上不显示问题 -->
    <image
      :src="url"
      mode="scaleToFill"
      :style="{
        display: 'block',
        width: `${rpx(300)}rpx`,
        height: `${rpx(95)}rpx`,
      }"
    />
    <!-- 间距 -->
    <SpacerBox :height="60" />
    <!-- 宣传语 -->
    <view class="slogan">
      <text class="text up-line-1">{{ slogan }}</text>
    </view>
    <!-- 间距 -->
    <SpacerBox :height="70" />
    <!-- 普通登录 -->
    <view class="login-button">
      <up-button
        icon="phone-fill"
        :text="commonLogin"
        type="primary"
        shape="circle"
        :custom-style="customStyle"
      ></up-button>
    </view>
    <!-- 间距 -->
    <SpacerBox :height="20" />
    <!-- 平台一键登录 -->
    <view class="login-button">
      <up-button
        icon="weixin-fill"
        :text="plantformLogin"
        type="success"
        shape="circle"
        :custom-style="customStyle"
      ></up-button>
    </view>
    <SpacerBox :height="133" />
    <view class="protocol">
      <up-checkbox
        v-model:checked="isAgree"
        shape="circle"
        usedAlone
      ></up-checkbox>
      <text class="text">我已同意并阅读</text>
      <text class="text text-a">《学习岛用户协议》</text>
      <text class="text text-a">《学习岛隐私政策》</text>
    </view>
    <SpacerBox :height="30" />
  </view>
</template>

<style lang="scss" scoped>
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';
.login-container {
  margin: 0 rpx(10);
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // position: relative;
  align-items: center;
  // 宣传语
  .slogan {
    .text {
      @include medium-body;
      color: $u-primary;
    }
  }
  // 登录按钮的文字样式无法通过scss来修改,在JS中用customStyle来修改
  // .login-button {
  // }
  // 用户协议
  .protocol {
    // position: absolute;
    // bottom: rpx(30);
    display: flex;
    align-items: center;
    .text {
      @include regular-caption2;
      color: $u-tips-color;
    }
    .text-a {
      color: $u-primary;
    }
  }
}
</style>
