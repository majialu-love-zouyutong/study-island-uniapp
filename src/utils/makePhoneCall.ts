export const makePhoneCall = (phoneNumber: string = '189-8089-5437') => {
  uni.makePhoneCall({
    phoneNumber,
  });
};