export const eventInfo = {
  title: '게임하고 선교하자!',
  subtitle: '4청 선교마켓 놀거리',
  description: '다양하고 즐거운 게임이 가득! 게임에 참여하고 선물도 받아가세요.',
  date: '6.21(일) 오후 4~6시',
  location: '1층 큰숲홀',
  host: '4청 잇는공동체',
};

export const priceInfo = {
  singleGame: '게임당 3,000원',
  bigCoupon: 'BIG 3 쿠폰 10,000원',
  couponDescription: '게임 3개 + 뽑기 2번',
};

export const playGames = [
  {
    id: 'cup-battle', number: '01', title: '컵 땅따먹기 대항전', icon: 'VS', accent: 'yellow',
    cardImage: '/ready/cup-battle-poster-2026-v3.png', imageAlt: '컵 땅따먹기 대항전 안내 포스터',
    shortDescription: '누가 더 빨리 상대팀 컵을 차지할까?', description: '컵 땅따먹기 대항전!',
    peopleAndItems: ['팀당 참여 가능 인원 1~3명', '1vs1', '2vs2', '3vs3', '팀 구분: 하늘팀 vs 노랑팀'],
    howToPlay: ['턴을 잡은 팀은 풍선을 공중에 띄웁니다.', '풍선이 떨어지기 전까지, 내 컵으로 상대팀 컵을 덮어씌웁니다.', '풍선이 바닥에 떨어지기 전에 잡아야 하고 턴을 교대합니다.', '풍선이 바닥에 떨어지면 즉시 패배하니 유의하여야 합니다.'],
    winCondition: '상대팀 컵을 모두 덮어 내 팀 컵만 남기면 승리합니다.', winnerPrize: '상품 지급', loserPrize: '간식 지급',
    ticketNotice: '인원 상관없이 팀별 티켓 1장 필요', ticketCount: '총 2장',
    price: '게임당 3,000원', location: '1층 큰숲홀 놀거리 부스', time: '6.21(일) 오후 4~6시',
    detailPath: '/play/games/cup-battle', posterImage: '/ready/cup-battle-poster-2026-v3.png',
  },
  {
    id: 'hit-bottle-cap', number: '02', title: '적중 병뚜껑', icon: '●', accent: 'blue',
    cardImage: '/ready/적중병뚜껑.jpg', imageAlt: '적중 병뚜껑 게임 안내 포스터',
    shortDescription: '병뚜껑 3개를 손가락으로 튕겨 점수 구역에 정확히 안착시키세요!',
    price: '게임당 3,000원', location: '1층 큰숲홀 놀거리 부스', detailPath: '/play/hit-bottle-cap',
  },
  {
    id: 'hit-time-attack', number: '03', title: '적중 타임어택', icon: '00', accent: 'orange',
    cardImage: '/ready/적중타임어택.jpg', imageAlt: '적중 타임어택 게임 안내 포스터',
    shortDescription: '말씀의 장과 절에 맞춰 스마트폰 스톱워치를 정확히 멈추세요!',
    price: '게임당 3,000원', location: '1층 큰숲홀 놀거리 부스', detailPath: '/play/hit-time-attack',
  },
  {
    id: 'hit-bingo', number: '04', title: '적중 빙고', icon: '▦', accent: 'blue',
    cardImage: '/ready/적중빙고.jpg', imageAlt: '적중 빙고 게임 안내 포스터',
    shortDescription: '탁구공 10개로 계란판에 한 줄 빙고를 완성하세요!',
    price: '게임당 3,000원', location: '1층 큰숲홀 놀거리 부스', detailPath: '/play/hit-bingo',
  },
  {
    id: 'target-master', number: '05', title: '믿음의 명사수', icon: '◎', accent: 'orange',
    cardImage: '/ready/faith-marksman-poster-2026-v4.png', imageAlt: '믿음의 명사수 게임 안내 포스터',
    shortDescription: '타겟을 맞추면 캡슐이 팡팡!',
    description: '정해진 거리에서 타겟을 맞히고 캡슐 선물을 받을 수 있는 도전 게임입니다.',
    howToPlay: ['운영자에게 참가권을 제출합니다.', '정해진 위치에 서서 타겟을 조준합니다.', '주어진 기회 안에 타겟을 맞힙니다.', '성공 결과에 따라 캡슐 선물을 받습니다.'],
    price: '게임당 3,000원', location: '1층 큰숲홀 놀거리 부스', time: '6.21(일) 오후 4~6시',
    notice: '안전을 위해 운영자의 안내에 따라 참여해주세요.', detailPath: '/play/games/target-master',
  },
  {
    id: 'lucky-draw', number: '06', title: '행운의 뽑기판', icon: '★', accent: 'orange',
    cardImage: '/ready/lucky-draw-poster-2026.png', imageAlt: '행운의 뽑기판 최신 상품 안내 포스터',
    shortDescription: '스티커를 열고 행운의 선물을 받아가세요!',
    description: '뽑기판에서 원하는 칸을 선택하고, 안에 숨겨진 선물을 확인하는 랜덤 뽑기 게임입니다.',
    howToPlay: ['참가비를 내고 뽑기 기회를 받습니다.', '뽑기판에서 원하는 칸을 선택합니다.', '스티커를 열어 당첨 상품을 확인합니다.', '해당하는 선물을 받아갑니다.'],
    price: '뽑기는 1회당 1,000원', location: '1층 큰숲홀 놀거리 부스', time: '6.21(일) 오후 4~6시',
    notice: '상품은 랜덤이며 교환이 어려울 수 있습니다.', detailPath: '/play/games/lucky-draw',
  },
  {
    id: 'board-game', number: '07', title: '보드게임', icon: '◆', accent: 'navy',
    cardImage: '/board game/컬러레또.png', imageAlt: '보드게임 컬러레또 상자',
    shortDescription: '친구와 함께 즐기는 보드게임',
    description: '선교마켓 현장에서 다양한 보드게임을 대여해 친구들과 함께 즐길 수 있습니다.',
    howToPlay: ['원하는 보드게임을 선택합니다.', '운영자에게 대여 신청을 합니다.', '이용 시간을 선택합니다.', '정해진 공간에서 친구들과 함께 게임을 즐깁니다.', '사용 후 구성품을 확인하고 반납합니다.'],
    price: '30분 3,000원 / 1시간 5,000원', location: '1층 큰숲홀 놀거리 부스', time: '6.21(일) 오후 4~6시',
    notice: '정해진 시간이 지나면 반드시 반납하고, 파손 및 분실하지 않도록 유의해주세요.', detailPath: '/play/games/board-game',
  },
];

export const prizes = [
  { name: '오헬모에드 쿠폰', icon: 'C' }, { name: '인형', icon: '♥' },
  { name: '키링', icon: 'K' }, { name: '사탕 등', icon: '+' },
];
