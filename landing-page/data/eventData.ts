export const COLORS = {
  PINK: "#EC0A7D",       // Hồng Z-Moms
  BLUE: "#173B8F",       // Xanh logo
  GOLD: "#FFD6E8",       // Hồng nhạt dùng highlight
  LIGHT_PINK: "#FFF5FA",
  LIGHT_BLUE: "#F2F6FF",
};

const { PINK, BLUE, LIGHT_PINK } = COLORS;

export const eventHighlights = [
  {
    icon: "👩‍⚕️",
    label: "Chuyên gia & Bác sĩ",
  },
  {
    icon: "🏥",
    label: "12 Bệnh viện",
  },
  {
    icon: "👨‍👩‍👧",
    label: "6.000+ Gia đình",
  },
];

export const partnerCommunities = [
  {
    name: "Z-moms",
    tagline: "Để con hơn tôi!",
    logo: "/logo.png",
    color: PINK,
    desc: "Cộng đồng hỗ trợ phụ nữ mang thai & nuôi con nhỏ tại Việt Nam với hơn hàng chục ngàn thành viên.",
  },
  {
    name: "IPD8",
    tagline: "Phát triển trí tuệ sớm",
    logo: "/ipd8.png",
    color: BLUE,
    desc: "Trung tâm chuyên về phát triển trí tuệ và giáo dục sớm cho trẻ, cung cấp chương trình khoa học cho phụ huynh.",
  },
  {
    name: "Cộng Đồng Bầu",
    tagline: "Đồng hành cùng mẹ bầu",
    logo: "/Congdongbau.png",
    color: "#7C3AED",
    desc: "Cộng đồng lớn nhất dành cho mẹ bầu tại Việt Nam, kết nối hàng triệu phụ nữ mang thai và sau sinh.",
  },
];

export const brainDevelopmentFacts = [
  {
    icon: "⚡",
    title: "700–1.000 kết nối thần kinh/giây",
    desc: "Theo UNICEF & WHO, trong 1.000 ngày đầu đời, mỗi giây não trẻ hình thành 700–1.000 kết nối thần kinh mới. Đây là tốc độ nhanh nhất não từng đạt được.",
    color: PINK,
  },
  {
    icon: "💡",
    title: "Nền tảng trọn đời",
    desc: "Đây là giai đoạn quyết định nền tảng: Trí tuệ · Cảm xúc · Sức khỏe · Khả năng học tập của trẻ suốt cuộc đời.",
    color: BLUE,
  },
  {
    icon: "📚",
    title: "Cha mẹ Việt cần kiến thức",
    desc: "Phần lớn cha mẹ Việt Nam chưa được trang bị đầy đủ kiến thức khoa học về chăm sóc và phát triển trẻ trong giai đoạn quan trọng này.",
    color: "#7C3AED",
  },
];

export const zones = [
  {
    icon: "🎤",
    title: "Khu Tri Thức",
    subtitle: "Sân khấu tri thức",
    desc: "Talkshow với bác sĩ nhi khoa & chuyên gia giáo dục sớm. Chủ đề: Phát triển trí thông minh của trẻ trong 1.000 ngày đầu đời.",
    color: PINK,
    bg: LIGHT_PINK,
  },
  {
    icon: "✨",
    title: "Khu Trải Nghiệm Giác Quan",
    subtitle: "Khu trải nghiệm giác quan",
    desc: "Hoạt động cho trẻ >3 tháng tuổi: Nhận biết ánh sáng, âm thanh, vận động thăng bằng, Tummy Time.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: "🛍️",
    title: "Khu Thương Hiệu Mẹ & Bé",
    subtitle: "Khu thương hiệu mẹ & bé",
    desc: "Các thương hiệu trưng bày sản phẩm, phát mẫu thử và bán hàng ưu đãi tại sự kiện.",
    color: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: "🌳",
    title: "Khu Cây Điều Ước",
    subtitle: "Cây điều ước",
    desc: "Cha mẹ viết điều ước cho con, gắn lên cây điều ước — khoảnh khắc đầy cảm xúc và ý nghĩa.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    icon: "🎮",
    title: "Khu Minigame Gia Đình",
    subtitle: "Khu trò chơi gia đình",
    desc: "Thử thách bố mẹ, vận động cho bé, bốc thăm trúng thưởng — vui nhộn cho cả gia đình.",
    color: "#EA580C",
    bg: "#FFF7ED",
  },
];

export type HospitalStatus =
  | "upcoming"
  | "registering"
  | "completed";
export const schedule: {
  month: string;
  hospitals: {
    city: string;
    hospital: string;
    formUrl: string;
    status: HospitalStatus;
    recapUrl: string;
  }[];
}[] = [
  {
    month: "Tháng 8",
    hospitals: [
      {
        city: "Hồ Chí Minh",
        hospital: "Bệnh viện Đa Khoa Quốc tế Hạnh Phúc",
        formUrl: "",
        status: "completed",
        recapUrl: "https://www.facebook.com/share/p/1CysVPQdPH/",
      },
      {
        city: "Hà Nội",
        hospital: "Bệnh viện Nhi Hà Nội",
        formUrl: "",
        status: "completed",
        recapUrl: "https://www.facebook.com/share/p/1JYHKCr5Rd/",
      },
    ],
  },

  {
    month: "Tháng 9",
    hospitals: [
      {
        city: "Hà Nội",
        hospital: "",
        formUrl: "",
        status: "upcoming",
        recapUrl: "",
      },
      {
        city: "Hồ Chí Minh",
        hospital: "Bệnh viện Quốc tế City",
        formUrl: "https://forms.gle/Q9z3bQbfUSZVkuc58",
        status: "registering",
        recapUrl: "",
      },
    ],
  },

  {
    month: "Tháng 10",
    hospitals: [
      {
        city: "Hà Nội",
        hospital: "Bệnh viện Phụ sản Trung ương",
        formUrl: "",
        status: "upcoming",
        recapUrl: "",
      },
      {
        city: "Hà Nội",
        hospital: "Bệnh viện Phụ sản Âu Cơ",
        formUrl: "",
        status: "upcoming",
        recapUrl: "",
      },
      {
        city: "Cần Thơ",
        hospital: "Bệnh viện Đa khoa Hoàn Mỹ Cửu Long",
        formUrl: "",
        status: "upcoming",
        recapUrl: "",
      },
    ],
  },
{
  month: "Tháng 11",
  hospitals: [
    {
      city: "Hải Phòng",
      hospital: "",
      formUrl: "",
      status: "upcoming",
      recapUrl: "",
    },
    {
      city: "Đồng Nai",
      hospital: "",
      formUrl: "",
      status: "upcoming",
      recapUrl: "",
    },
  ],
},

{
  month: "Tháng 12",
  hospitals: [
    {
      city: "Hồ Chí Minh",
      hospital: "",
      formUrl: "",
      status: "upcoming",
      recapUrl: "",
    },
    {
      city: "Miền Bắc",
      hospital: "",
      formUrl: "",
      status: "upcoming",
      recapUrl: "",
    },
  ],
},

{
  month: "Tháng 1/2027",
  hospitals: [
    {
      city: "Đà Nẵng",
      hospital: "",
      formUrl: "",
      status: "upcoming",
      recapUrl: "",
    },
  ],
},
]

export const stats = [
  { value: "6.000–12.000", label: "Mẹ & gia đình tham dự", icon: "👨‍👩‍👧" },
  { value: "500K+", label: "Lượt tiếp cận online", icon: "📱" },
  { value: "12", label: "Tỉnh thành trên cả nước", icon: "📍" },
  { value: "80%", label: "Não bộ phát triển trong 1.000 ngày đầu", icon: "🧠" },
];

export const ageDevelopmentData = [
  { age: "Sơ sinh", pct: 25 },
  { age: "1 tuổi", pct: 50 },
  { age: "2 tuổi", pct: 80 },
  { age: "5 tuổi", pct: 90 },
  { age: "6 tuổi", pct: 95 },
];
