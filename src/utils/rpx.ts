/**
 *
 * @param value 设计稿上的值
 * @param designWidth 设计稿宽度
 * @returns 转换后的值,可以直接跟上rpx单位
 */
export const rpx = (value: number, designWidth: number = 375): number => {
  return (750 / designWidth) * value;
};
