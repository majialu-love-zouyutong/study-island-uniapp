<script setup lang="ts">
import { onActivated, onMounted } from 'vue';
import ChargeNow from './ChargeNow.vue';
import MyBalance from './MyBalance.vue';
import SpacerBox from './SpacerBox.vue';
import ToolTips from './ToolTips.vue';

// 提示信息数据
const toolTipsProps = {
  title: '储值需知',
  tips: [
    '余额可以用于支付卡券,预定座位等,支付时优先使用余额',
    '余额无期限永久使用,不会过期',
    '使用过程中有任何疑问,请联系管理员 ',
  ],
};

onMounted(() => {
  console.log('CardChage 挂载', Date.now());
});

onActivated(() => {
  console.log('CardChage 激活', Date.now());
});
</script>

<template>
  <MyBalance />
  <SpacerBox :height="15" />
  <ChargeNow />
  <SpacerBox :height="60" />
  <ToolTips :title="toolTipsProps.title" :tips="toolTipsProps.tips" />
</template>

<style scoped lang="scss"></style>
