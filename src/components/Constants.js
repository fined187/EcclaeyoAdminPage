export const MenuInfo = [
  {
    title: '회원관리',
    path: '/Member',
  },
  {
    title: '견적관리',
    path: '/Management',
  },
  {
    title: '정산/수수료 관리',
    path: '/FeeManagement'
  }
];

export const statusMenu = [
  {
    korStatus: "승인대기",
    engStatus: "IN_REVIEW",
  },
  {
    korStatus: "수정요청",
    engStatus: "IN_MODIFICATION",
  },
  {
    korStatus: "계약대기",
    engStatus: "READY_FOR_CONTRACT"
  },
  {
    korStatus: "가입완료",
    engStatus: "APPROVED"
  },
  {
    korStatus: "가입거부",
    engStatus: "DENIED"
  }
]