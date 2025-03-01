<script setup lang="ts">
// TODO: 利用keep-alive进行性能优化,可以作为一个点写在简历上
import CardSelect from '@/components/CardSelect.vue';


</script>

<template>
  <view class="card-select">
    <CardSelect />
  </view>
  <view class="card-container">
    test
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