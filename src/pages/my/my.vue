<script setup lang="ts">
import BuyCard from '@/components/BuyCard.vue';
import CopyRight from '@/components/CopyRight.vue';
import PersonalInformation from '@/components/PersonalInformation.vue';
import SpacerBox from '@/components/SpacerBox.vue';
</script>

<template>
  <view class="my-container">
    <view class="personal-information">
      <PersonalInformation />
    </view>
    <SpacerBox :height="15" />
    <view class="to-buy-card">
      <BuyCard />
    </view>
    <view class="right">
      <CopyRight />
    </view>
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/font.scss';
@import '~@/styles/rpx.scss';
.my-container {
  box-sizing: border-box;
  padding: rpx(10) rpx(18);
  height: 100vh;
  position: relative;
  .right {
    width: 100%;
    position: absolute;
    bottom: rpx(5);
    left: rpx(0);
  }
}
</style>
