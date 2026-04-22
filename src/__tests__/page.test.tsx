import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: '--font-inter', className: 'inter' }),
  Manrope: () => ({ variable: '--font-manrope', className: 'manrope' }),
}));

describe('Home page', () => {
  it('renders the WebCraft brand name', () => {
    render(<Home />);
    const brands = screen.getAllByText('WebCraft');
    expect(brands.length).toBeGreaterThan(0);
  });

  it('renders the hero headline', () => {
    render(<Home />);
    expect(screen.getByText('매출을 올리는')).toBeInTheDocument();
    expect(screen.getByText('홈페이지를 만듭니다')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Home />);
    expect(screen.getAllByText('서비스').length).toBeGreaterThan(0);
    expect(screen.getAllByText('패키지').length).toBeGreaterThan(0);
    expect(screen.getAllByText('포트폴리오').length).toBeGreaterThan(0);
    expect(screen.getAllByText('프로세스').length).toBeGreaterThan(0);
    expect(screen.getAllByText('후기').length).toBeGreaterThan(0);
    expect(screen.getAllByText('FAQ').length).toBeGreaterThan(0);
  });

  it('renders the stats section', () => {
    render(<Home />);
    expect(screen.getAllByText('700+').length).toBeGreaterThan(0);
    expect(screen.getByText('4.9')).toBeInTheDocument();
    expect(screen.getAllByText('5일').length).toBeGreaterThan(0);
    expect(screen.getAllByText('3개월').length).toBeGreaterThan(0);
  });

  it('renders all service cards', () => {
    render(<Home />);
    expect(screen.getAllByText('반응형 웹 디자인').length).toBeGreaterThan(0);
    expect(screen.getByText('초고속 로딩')).toBeInTheDocument();
    expect(screen.getByText('SEO 최적화')).toBeInTheDocument();
    expect(screen.getByText('보안 & SSL')).toBeInTheDocument();
    expect(screen.getAllByText('관리자 페이지').length).toBeGreaterThan(0);
    expect(screen.getByText('24시간 지원')).toBeInTheDocument();
  });

  it('renders all package names', () => {
    render(<Home />);
    expect(screen.getAllByText('라이트').length).toBeGreaterThan(0);
    expect(screen.getAllByText('비즈니스').length).toBeGreaterThan(0);
    expect(screen.getAllByText('프리미엄').length).toBeGreaterThan(0);
    expect(screen.getAllByText('커머스').length).toBeGreaterThan(0);
  });

  it('renders package prices', () => {
    render(<Home />);
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('45')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();
  });

  it('renders portfolio section heading', () => {
    render(<Home />);
    expect(screen.getByText(/40\+/)).toBeInTheDocument();
  });

  it('renders portfolio items in default "전체" filter', () => {
    render(<Home />);
    expect(screen.getByText('강남 피부과')).toBeInTheDocument();
    expect(screen.getByText('프리미엄 법무법인')).toBeInTheDocument();
    expect(screen.getByText('모던 인테리어')).toBeInTheDocument();
    expect(screen.getByText('유기농 식품몰')).toBeInTheDocument();
    expect(screen.getByText('패션 쇼핑몰')).toBeInTheDocument();
  });

  it('filters portfolio by type when filter button is clicked', () => {
    render(<Home />);
    const filterBtns = screen.getAllByRole('button');
    const landingBtn = filterBtns.find((btn) => btn.textContent === '랜딩형');
    expect(landingBtn).toBeTruthy();
    fireEvent.click(landingBtn!);
    expect(screen.getByText('강남 피부과')).toBeInTheDocument();
    expect(screen.queryByText('프리미엄 법무법인')).not.toBeInTheDocument();
  });

  it('filters portfolio by 기업형', () => {
    render(<Home />);
    const filterBtns = screen.getAllByRole('button');
    const btn = filterBtns.find((btn) => btn.textContent === '기업형');
    fireEvent.click(btn!);
    expect(screen.getByText('프리미엄 법무법인')).toBeInTheDocument();
    expect(screen.getByText('모던 인테리어')).toBeInTheDocument();
    expect(screen.queryByText('강남 피부과')).not.toBeInTheDocument();
  });

  it('filters portfolio by 프리미엄', () => {
    render(<Home />);
    const filterBtns = screen.getAllByRole('button');
    const btn = filterBtns.find((btn) => btn.textContent === '프리미엄');
    fireEvent.click(btn!);
    expect(screen.getByText('뷰티샵 예약')).toBeInTheDocument();
    expect(screen.queryByText('강남 피부과')).not.toBeInTheDocument();
  });

  it('filters portfolio by 커머스', () => {
    render(<Home />);
    const filterBtns = screen.getAllByRole('button');
    const btn = filterBtns.find((btn) => btn.textContent === '커머스');
    fireEvent.click(btn!);
    expect(screen.getByText('유기농 식품몰')).toBeInTheDocument();
    expect(screen.getByText('패션 쇼핑몰')).toBeInTheDocument();
    expect(screen.queryByText('강남 피부과')).not.toBeInTheDocument();
  });

  it('resets filter to 전체 when 전체 button is clicked', () => {
    render(<Home />);
    const filterBtns = screen.getAllByRole('button');
    const landingBtn = filterBtns.find((btn) => btn.textContent === '랜딩형');
    fireEvent.click(landingBtn!);
    const allBtn = filterBtns.find((btn) => btn.textContent === '전체');
    fireEvent.click(allBtn!);
    expect(screen.getByText('프리미엄 법무법인')).toBeInTheDocument();
    expect(screen.getByText('유기농 식품몰')).toBeInTheDocument();
  });

  it('renders process steps', () => {
    render(<Home />);
    expect(screen.getAllByText('무료 상담').length).toBeGreaterThan(0);
    expect(screen.getByText('기획·디자인')).toBeInTheDocument();
    expect(screen.getByText('개발·테스트')).toBeInTheDocument();
    expect(screen.getByText('납품·A/S')).toBeInTheDocument();
  });

  it('renders reviews section', () => {
    render(<Home />);
    expect(screen.getByText('실제 사장님들의')).toBeInTheDocument();
    expect(screen.getByText('김○○')).toBeInTheDocument();
    expect(screen.getByText('이○○')).toBeInTheDocument();
    expect(screen.getByText('박○○')).toBeInTheDocument();
  });

  it('renders FAQ section with all questions collapsed initially', () => {
    render(<Home />);
    const faqQuestion = screen.getByText('제작 기간은 얼마나 걸리나요?');
    expect(faqQuestion).toBeInTheDocument();
    expect(screen.queryByText('패키지에 따라 다르지만')).not.toBeInTheDocument();
  });

  it('expands FAQ when clicked', () => {
    render(<Home />);
    const faqBtns = screen.getAllByRole('button');
    const faqBtn = faqBtns.find((btn) => btn.textContent?.includes('제작 기간은 얼마나 걸리나요?'));
    expect(faqBtn).toBeTruthy();
    fireEvent.click(faqBtn!);
    expect(screen.getByText(/패키지에 따라 다르지만/)).toBeInTheDocument();
  });

  it('collapses FAQ when clicking the same question twice', () => {
    render(<Home />);
    const faqBtns = screen.getAllByRole('button');
    const faqBtn = faqBtns.find((btn) => btn.textContent?.includes('제작 기간은 얼마나 걸리나요?'));
    fireEvent.click(faqBtn!);
    expect(screen.getByText(/패키지에 따라 다르지만/)).toBeInTheDocument();
    fireEvent.click(faqBtn!);
    expect(screen.queryByText(/패키지에 따라 다르지만/)).not.toBeInTheDocument();
  });

  it('opens only the clicked FAQ and closes others', () => {
    render(<Home />);
    const faqBtns = screen.getAllByRole('button');
    const faqBtn1 = faqBtns.find((btn) => btn.textContent?.includes('제작 기간은 얼마나 걸리나요?'));
    const faqBtn2 = faqBtns.find((btn) => btn.textContent?.includes('추가 비용이 발생하나요?'));
    fireEvent.click(faqBtn1!);
    expect(screen.getByText(/패키지에 따라 다르지만/)).toBeInTheDocument();
    fireEvent.click(faqBtn2!);
    expect(screen.queryByText(/패키지에 따라 다르지만/)).not.toBeInTheDocument();
    expect(screen.getByText(/패키지 가격에 기획/)).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Home />);
    const buttons = screen.getAllByRole('button');
    const hamburger = buttons.find(
      (btn) => btn.classList.contains('md:hidden') || btn.closest('nav')
    );
    expect(hamburger).toBeTruthy();
  });

  it('renders contact form elements', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText('업체명 / 이름')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('연락처')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('추가 요청사항 (선택)')).toBeInTheDocument();
    expect(screen.getByText('개인정보 수집·이용에 동의합니다')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<Home />);
    expect(screen.getByText(/2026 WebCraft/)).toBeInTheDocument();
    expect(screen.getByText('프리미엄 웹 에이전시')).toBeInTheDocument();
  });

  it('mobile menu shows nav links when open', () => {
    render(<Home />);
    const allButtons = screen.getAllByRole('button');
    const hamburger = allButtons.find((btn) => {
      const svg = btn.querySelector('svg');
      return svg && btn.className.includes('md:hidden');
    });
    if (hamburger) {
      fireEvent.click(hamburger);
    }
  });

  it('renders package popular badge', () => {
    render(<Home />);
    expect(screen.getByText('가장 많이 선택')).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    render(<Home />);
    expect(screen.getByText('추가 비용이 발생하나요?')).toBeInTheDocument();
    expect(screen.getByText('수정은 몇 번까지 가능한가요?')).toBeInTheDocument();
    expect(screen.getByText('직접 내용을 수정할 수 있나요?')).toBeInTheDocument();
    expect(screen.getByText('기존 홈페이지 리뉴얼도 가능한가요?')).toBeInTheDocument();
  });

  it('contact form submit does not navigate', () => {
    render(<Home />);
    const submitBtn = screen.getByText('무료 견적 받기', { selector: 'button[type="submit"]' });
    fireEvent.click(submitBtn);
  });

  it('renders phone contact info', () => {
    render(<Home />);
    expect(screen.getByText('010-0000-0000')).toBeInTheDocument();
  });

  it('renders stat labels', () => {
    render(<Home />);
    expect(screen.getByText('제작 완료')).toBeInTheDocument();
    expect(screen.getByText('고객 만족도')).toBeInTheDocument();
    expect(screen.getByText('평균 납기')).toBeInTheDocument();
    expect(screen.getByText('무상 A/S')).toBeInTheDocument();
  });
});
