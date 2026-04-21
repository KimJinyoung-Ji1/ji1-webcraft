"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "서비스", href: "#services" },
  { label: "패키지", href: "#packages" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "프로세스", href: "#process" },
  { label: "후기", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "700+", label: "제작 완료", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "4.9", label: "고객 만족도", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { value: "5일", label: "평균 납기", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "3개월", label: "무상 A/S", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const SERVICES = [
  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "반응형 웹 디자인", desc: "모바일, 태블릿, PC 모든 기기에서 완벽하게 작동하는 반응형 웹사이트를 제작합니다." },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "초고속 로딩", desc: "최신 기술 스택으로 0.5초 이내 로딩. Google Core Web Vitals 최적화." },
  { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "SEO 최적화", desc: "네이버, 구글 검색 상위 노출을 위한 기술적 SEO를 기본 적용합니다." },
  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "보안 & SSL", desc: "SSL 인증서 무료 적용, DDoS 방어, 최신 보안 프로토콜로 안전하게." },
  { icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", title: "관리자 페이지", desc: "콘텐츠를 직접 수정할 수 있는 직관적인 관리자 대시보드를 제공합니다." },
  { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", title: "24시간 지원", desc: "제작 중은 물론, 납품 후에도 신속한 기술 지원을 약속합니다." },
];

const PACKAGES = [
  { name: "라이트", price: "25", badge: "입문", badgeClass: "bg-[#484466]/30 text-[#ada6ce]", features: ["원페이지 랜딩", "모바일 반응형", "상담 폼 연동", "SEO 기본 설정", "5일 내 완성"], popular: false },
  { name: "비즈니스", price: "45", badge: "인기", badgeClass: "bg-[#675bff]/30 text-[#a9a4ff]", features: ["다페이지 (최대 5P)", "회사소개·서비스·포트폴리오", "관리자 페이지", "도메인·호스팅 세팅", "3개월 무상 A/S"], popular: true },
  { name: "프리미엄", price: "80", badge: "추천", badgeClass: "bg-[#00e3fd]/10 text-[#00e3fd]", features: ["맞춤 기획·디자인", "예약/결제 시스템", "회원 관리 기능", "전담 PM 배정", "6개월 무상 A/S"], popular: false },
  { name: "커머스", price: "120", badge: "풀옵션", badgeClass: "bg-[#a68cff]/20 text-[#a68cff]", features: ["상품 무제한 등록", "PG 결제 연동", "주문·배송 관리", "쿠폰/프로모션 기능", "12개월 무상 A/S"], popular: false },
];

const PORTFOLIO = [
  { title: "강남 피부과", category: "병원·의원", type: "랜딩형" },
  { title: "프리미엄 법무법인", category: "법무·세무", type: "기업형" },
  { title: "모던 인테리어", category: "시공·인테리어", type: "기업형" },
  { title: "영어학원 브랜딩", category: "학원·교육", type: "랜딩형" },
  { title: "유기농 식품몰", category: "식품·건강", type: "커머스" },
  { title: "IT 스타트업", category: "테크·SaaS", type: "기업형" },
  { title: "뷰티샵 예약", category: "미용·뷰티", type: "프리미엄" },
  { title: "카페 브랜드", category: "음식점·카페", type: "랜딩형" },
  { title: "패션 쇼핑몰", category: "패션·의류", type: "커머스" },
];

const PROCESS_STEPS = [
  { step: "01", title: "무료 상담", desc: "업종과 목표를 파악하고\n최적의 솔루션을 제안합니다.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
  { step: "02", title: "기획·디자인", desc: "레이아웃과 디자인을 확정하고\n피드백을 반영합니다.", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { step: "03", title: "개발·테스트", desc: "모바일·PC 완벽 대응으로\n꼼꼼하게 개발합니다.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { step: "04", title: "납품·A/S", desc: "도메인·호스팅 세팅 후\n무상 A/S를 제공합니다.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

const REVIEWS = [
  { name: "김○○", role: "보험대리점 대표", text: "홈페이지 오픈 후 월 30건 이상 상담 문의가 들어오기 시작했습니다. 투자 대비 효과가 확실합니다.", rating: 5 },
  { name: "이○○", role: "치과의원 원장", text: "기존 업체보다 훨씬 저렴하면서도 퀄리티가 높아서 놀랐습니다. 환자분들 반응도 좋아요.", rating: 5 },
  { name: "박○○", role: "건설회사 팀장", text: "업종별 노하우가 풍부해서 소통이 편했습니다. 원하는 방향을 정확히 이해하더군요.", rating: 5 },
  { name: "최○○", role: "한의원 원장", text: "예약 시스템 연동까지 해주셔서 환자 예약 문의가 크게 늘었습니다. 만족합니다.", rating: 5 },
  { name: "정○○", role: "인테리어업체 대표", text: "포트폴리오 배치가 정말 마음에 들었습니다. 고객들이 시공 사례를 보고 바로 연락해요.", rating: 4 },
  { name: "강○○", role: "어학원 원장", text: "5일 만에 완성해주셨는데 퀄리티가 상상 이상이었습니다. 주변 원장님들께도 추천했어요.", rating: 5 },
];

const FAQS = [
  { q: "제작 기간은 얼마나 걸리나요?", a: "패키지에 따라 다르지만, 라이트(랜딩형)은 5일, 비즈니스는 7~10일, 프리미엄/커머스는 2~3주 내 완성됩니다. 급한 경우 익스프레스 옵션도 있습니다." },
  { q: "추가 비용이 발생하나요?", a: "패키지 가격에 기획·디자인·개발·테스트가 모두 포함되어 있습니다. 도메인(.com 기준 연 15,000원)과 호스팅만 별도이며, 사전에 명확히 안내드립니다." },
  { q: "수정은 몇 번까지 가능한가요?", a: "디자인 단계에서 무제한 수정이 가능합니다. 개발 완료 후에도 A/S 기간 내 무상으로 수정해 드립니다." },
  { q: "직접 내용을 수정할 수 있나요?", a: "비즈니스 이상 패키지에는 직관적인 관리자 페이지가 포함됩니다. 텍스트, 이미지, 게시글 등을 코딩 없이 직접 관리할 수 있습니다." },
  { q: "기존 홈페이지 리뉴얼도 가능한가요?", a: "네, 기존 사이트의 콘텐츠를 분석하고 더 효과적인 구조로 리뉴얼해 드립니다. 기존 도메인과 SEO 점수도 유지됩니다." },
];

function Icon({ d, className = "w-6 h-6" }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [filter, setFilter] = useState("전체");

  const filtered = filter === "전체" ? PORTFOLIO : PORTFOLIO.filter((p) => p.type === filter);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="glass-strong rounded-full px-6 py-3 flex items-center justify-between border border-[#484466]/15">
          <a href="#" className="font-display text-xl font-bold gradient-text">WebCraft</a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#ada6ce] hover:text-[#a9a4ff] transition-colors">{l.label}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex btn-glow px-5 py-2 rounded-full text-sm font-semibold text-[#0e0929]">무료 상담</a>
          <button className="md:hidden text-[#ada6ce]" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden glass-strong mt-2 rounded-2xl p-4 border border-[#484466]/15">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="block py-3 text-[#ada6ce] hover:text-[#a9a4ff]" onClick={() => setMobileOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="block mt-2 btn-glow px-5 py-3 rounded-full text-sm font-semibold text-[#0e0929] text-center" onClick={() => setMobileOpen(false)}>무료 상담</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        <div className="orb w-[500px] h-[500px] bg-[#675bff]/40 top-[-10%] left-[-10%]" />
        <div className="orb w-[400px] h-[400px] bg-[#00e3fd]/30 bottom-[-5%] right-[-5%]" style={{ animationDelay: "5s" }} />
        <div className="orb w-[300px] h-[300px] bg-[#a68cff]/20 top-[40%] right-[20%]" style={{ animationDelay: "10s" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 border border-[#484466]/20">
            <span className="text-[#00e3fd] text-sm">&#10024;</span>
            <span className="text-sm text-[#ada6ce]"><span className="text-[#a9a4ff] font-semibold">700+</span> 사장님이 선택한 No.1 웹 에이전시</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            매출을 올리는<br /><span className="gradient-text">홈페이지를 만듭니다</span>
          </h1>
          <p className="text-lg md:text-xl text-[#ada6ce] max-w-2xl mx-auto mb-10 leading-relaxed">
            단순한 홈페이지가 아닙니다. <span className="text-[#e8e2ff]">매출과 직결되는 전략적 웹사이트.</span><br />업종별 맞춤 설계 · 5일 완성 · 25만원부터
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact" className="btn-glow px-8 py-4 rounded-full text-lg font-semibold text-[#0e0929]">무료 견적 받기 &rarr;</a>
            <a href="#portfolio" className="btn-ghost px-8 py-4 rounded-full text-lg font-semibold text-[#e8e2ff]">포트폴리오 보기</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 border border-[#484466]/10">
                <div className="flex items-center justify-center mb-2 text-[#00e3fd]"><Icon d={s.icon} className="w-5 h-5" /></div>
                <div className="text-2xl font-bold font-display text-[#a9a4ff]">{s.value}</div>
                <div className="text-sm text-[#ada6ce]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e3fd] text-sm font-semibold tracking-widest uppercase font-display">Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">왜 <span className="gradient-text">WebCraft</span>인가요?</h2>
            <p className="text-[#ada6ce] text-lg mt-4 max-w-xl mx-auto">단순 제작을 넘어, 비즈니스 성장을 설계합니다</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="glass card-hover rounded-2xl p-8 border border-[#484466]/10 group">
                <div className="w-12 h-12 rounded-xl bg-[#675bff]/20 flex items-center justify-center mb-5 group-hover:bg-[#675bff]/30 transition-colors">
                  <Icon d={svc.icon} className="w-6 h-6 text-[#a9a4ff]" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{svc.title}</h3>
                <p className="text-[#ada6ce] leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="relative py-32 px-6 bg-[#130e31]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e3fd] text-sm font-semibold tracking-widest uppercase font-display">Packages</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">합리적인 가격,<br /><span className="gradient-text">프리미엄 퀄리티</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`relative glass rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? "border-[#675bff]/50 glow-indigo scale-[1.02]" : "border-[#484466]/10 hover:border-[#484466]/30"}`}>
                {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a9a4ff] to-[#00e3fd] px-4 py-1 rounded-full text-xs font-bold text-[#0e0929]">가장 많이 선택</div>}
                <div className="mb-6"><span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${pkg.badgeClass}`}>{pkg.badge}</span></div>
                <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold font-display gradient-text">{pkg.price}</span>
                  <span className="text-[#ada6ce]">만원~</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#ada6ce]">
                      <svg className="w-5 h-5 text-[#00e3fd] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-full font-semibold transition-all ${pkg.popular ? "btn-glow text-[#0e0929]" : "btn-ghost text-[#e8e2ff] hover:text-[#a9a4ff]"}`}>견적 받기</a>
              </div>
            ))}
          </div>
          <p className="text-center text-[#ada6ce] text-sm mt-8">* 모든 패키지에 SSL 인증서, 반응형 디자인, SEO 기본 설정이 포함됩니다</p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00e3fd] text-sm font-semibold tracking-widest uppercase font-display">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3"><span className="gradient-text">40+</span> 제작 사례</h2>
          </div>
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["전체", "랜딩형", "기업형", "프리미엄", "커머스"].map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? "btn-glow text-[#0e0929]" : "btn-ghost text-[#ada6ce] hover:text-[#e8e2ff]"}`}>{f}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.title} className="glass card-hover rounded-2xl overflow-hidden border border-[#484466]/10 group">
                <div className="aspect-video bg-gradient-to-br from-[#1f1943] to-[#2c2556] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#675bff]/20 flex items-center justify-center">
                      <Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="w-8 h-8 text-[#a9a4ff]" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="glass px-3 py-1 rounded-full text-xs text-[#00e3fd] border border-[#00e3fd]/20">{item.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-[#ada6ce]">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-32 px-6 bg-[#130e31]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e3fd] text-sm font-semibold tracking-widest uppercase font-display">Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3"><span className="gradient-text">4단계</span>로 완성합니다</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {i < 3 && <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#675bff]/30 to-transparent" />}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl glass border border-[#484466]/15 flex items-center justify-center group-hover:border-[#675bff]/30 transition-all">
                  <Icon d={step.icon} className="w-10 h-10 text-[#a9a4ff]" />
                </div>
                <span className="text-[#00e3fd] text-sm font-bold font-display">{step.step}</span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3">{step.title}</h3>
                <p className="text-[#ada6ce] text-sm leading-relaxed whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e3fd] text-sm font-semibold tracking-widest uppercase font-display">Reviews</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">실제 사장님들의 <span className="gradient-text">생생한 후기</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="glass card-hover rounded-2xl p-8 border border-[#484466]/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < r.rating ? "text-yellow-400" : "text-[#484466]/30"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#e8e2ff] leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#675bff] to-[#00e3fd] flex items-center justify-center text-sm font-bold text-[#0e0929]">{r.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-[#ada6ce]">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-32 px-6 bg-[#130e31]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00e3fd] text-sm font-semibold tracking-widest uppercase font-display">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">자주 묻는 <span className="gradient-text">질문</span></h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="glass rounded-2xl border border-[#484466]/10 overflow-hidden">
                <button className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-[#261f4d]/30 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-display font-semibold text-lg">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#ada6ce] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-8 pb-6"><p className="text-[#ada6ce] leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 md:p-16 border border-[#484466]/15 glow-indigo relative overflow-hidden">
            <div className="orb w-[300px] h-[300px] bg-[#675bff]/30 top-[-20%] right-[-10%]" />
            <div className="orb w-[200px] h-[200px] bg-[#00e3fd]/20 bottom-[-10%] left-[-5%]" style={{ animationDelay: "7s" }} />
            <div className="relative z-10">
              <span className="text-[#00e3fd] text-sm font-semibold tracking-widest uppercase font-display">Contact</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">지금 바로 <span className="gradient-text">무료 견적</span> 받기</h2>
              <p className="text-[#ada6ce] text-lg mb-10 max-w-lg mx-auto">24시간 내 담당자가 직접 연락드립니다.<br />상담은 무료, 부담은 없어요.</p>
              <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="업체명 / 이름" className="w-full px-6 py-4 rounded-xl bg-[#19143a] border border-[#484466]/20 text-[#e8e2ff] placeholder-[#777196] focus:border-[#675bff]/50 focus:outline-none transition-colors" />
                <input type="tel" placeholder="연락처" className="w-full px-6 py-4 rounded-xl bg-[#19143a] border border-[#484466]/20 text-[#e8e2ff] placeholder-[#777196] focus:border-[#675bff]/50 focus:outline-none transition-colors" />
                <select className="w-full px-6 py-4 rounded-xl bg-[#19143a] border border-[#484466]/20 text-[#ada6ce] focus:border-[#675bff]/50 focus:outline-none transition-colors">
                  <option>패키지 선택</option>
                  <option>라이트 (25만원~)</option>
                  <option>비즈니스 (45만원~)</option>
                  <option>프리미엄 (80만원~)</option>
                  <option>커머스 (120만원~)</option>
                </select>
                <textarea placeholder="추가 요청사항 (선택)" rows={3} className="w-full px-6 py-4 rounded-xl bg-[#19143a] border border-[#484466]/20 text-[#e8e2ff] placeholder-[#777196] focus:border-[#675bff]/50 focus:outline-none transition-colors resize-none" />
                <label className="flex items-start gap-3 text-sm text-[#ada6ce] cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-[#a9a4ff]" />
                  <span>개인정보 수집·이용에 동의합니다</span>
                </label>
                <button type="submit" className="w-full btn-glow py-4 rounded-xl text-lg font-bold text-[#0e0929]">무료 견적 받기</button>
              </form>
              <p className="text-[#ada6ce] text-sm mt-6">또는 전화 상담: <span className="text-[#00e3fd]">010-0000-0000</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-[#484466]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-display text-xl font-bold gradient-text">WebCraft</span>
            <span className="text-[#ada6ce] text-sm">프리미엄 웹 에이전시</span>
          </div>
          <div className="flex gap-6 text-sm text-[#ada6ce]">
            <a href="#services" className="hover:text-[#a9a4ff] transition-colors">서비스</a>
            <a href="#packages" className="hover:text-[#a9a4ff] transition-colors">패키지</a>
            <a href="#portfolio" className="hover:text-[#a9a4ff] transition-colors">포트폴리오</a>
            <a href="#contact" className="hover:text-[#a9a4ff] transition-colors">문의</a>
          </div>
          <p className="text-sm text-[#777196]">&copy; 2026 WebCraft. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
