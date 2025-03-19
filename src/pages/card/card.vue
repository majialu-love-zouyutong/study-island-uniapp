<script setup lang="ts">
import CardCharge from '@/components/CardCharge.vue';
import CardList from '@/components/CardList.vue';
import CardSelect from '@/components/CardSelect.vue';
import { ref } from 'vue';

// #ifdef H5
const tabs = [CardCharge, CardList];
// #endif
const currentTab = ref(0);
</script>

<template>
  <view class="card-select">
    <CardSelect
      @change="
        (index) => {
          console.log('开始切换下标', index, '时间', Date.now());
          currentTab = index;
        }
      "
    />
  </view>
  <view class="card-container">
    <!-- #ifdef H5 -->
    <KeepAlive>
      <component :is="tabs[currentTab]" />
    </KeepAlive>
    <!-- #endif -->
    <!-- #ifdef MP-WEIXIN -->

    <!-- #endif -->
  </view>
</template>

<style scoped lang="scss">
@import '~@/styles/rpx.scss';
@import '~@/styles/font.scss';

.card-select {
  background-color: #fff;
}

.card-container {
  padding: rpx(15) rpx(18);
  background-color: pink;
}
</style>
