export const luckyDraw = {
  title: '행운의 뽑기판',
  boardName: '추억의 뽑기판',
  subtitle: '문방구 앞 추억을 다시 만나는 시간',
  price: '1회 1,000원',
  steps: ['번호를 뽑아요', '등수를 확인해요', '상품을 받아가요'],
  prizes: [
    { rank: '1등', name: '오헬모에드 20,000원 상품권', count: '3명', type: 'voucher' },
    { rank: '2등', name: '먹거리 3,000원 교환권', count: '7명', note: '먹거리 사용이 어려울 시 과자 1봉 증정', type: 'coupon' },
    { rank: '3등', name: '추억의 달고나 사탕', count: '30명', type: 'dalgona', image: '/selection/달고나.png' },
    { rank: '4등', name: '미니 한입 꿀 꽈배기', count: '150명', type: 'snack', image: '/selection/꿀꽈배기.jpg' },
    { rank: '5등', name: '멘토스 츄잉캔디', count: '300명', type: 'candy', image: '/selection/멘토스 캔디.jpg' },
  ],
  winnerCount: 490,
  notices: ['상품은 상황에 따라 일부 변경될 수 있습니다', '상품 소진 시 종료될 수 있습니다'],
};

// Internal planning data. Do not render this object in public UI.
export const luckyDrawBudget = {
  board: 9900, firstPrize: 60000, secondPrizeVouchers: 21000, substituteSnacks: 13900,
  dalgona: 13990, twistSnacks: 13500, candy: 9580,
  totalWithVouchers: 127970, totalWithSubstituteSnacks: 120870,
};
