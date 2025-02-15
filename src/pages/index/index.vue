<template>
  <view style="padding: 20px">
    <up-button type="primary" text="主题按钮"></up-button>
    <up-button type="primary" :plain="true" text="镂空"></up-button>
    <up-button
      type="primary"
      :plain="true"
      :hairline="true"
      text="细边"
    ></up-button>
    <up-button type="primary" text="禁用"></up-button>
    <up-button type="primary" loading loadingText="加载中"></up-button>
    <up-button type="primary" icon="map" text="图标按钮"></up-button>
    <up-button type="primary" shape="circle" text="测试"></up-button>
    <up-button
      text="渐变色按钮"
      color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
    ></up-button>
    <up-button type="primary" size="small" text="大小尺寸"></up-button>
  </view>
</template>
