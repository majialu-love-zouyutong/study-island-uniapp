export const transformToFee = (fee: number) => {
  return fee.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
