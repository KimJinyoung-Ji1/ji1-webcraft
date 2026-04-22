import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: '--font-inter', className: 'inter' }),
  Manrope: () => ({ variable: '--font-manrope', className: 'manrope' }),
}));

jest.mock('../app/globals.css', () => ({}));

describe('RootLayout metadata', () => {
  it('exports metadata with correct title', async () => {
    const mod = await import('../app/layout');
    expect(mod.metadata).toBeDefined();
    expect(mod.metadata?.title).toBe('WebCraft | 매출을 올리는 홈페이지를 만듭니다');
  });

  it('exports metadata with description', async () => {
    const mod = await import('../app/layout');
    expect(mod.metadata?.description).toContain('소상공인 맞춤 홈페이지');
  });

  it('renders RootLayout with children', async () => {
    const { default: RootLayout } = await import('../app/layout');
    const { container } = render(
      <RootLayout>
        <div data-testid="child">Hello</div>
      </RootLayout>
    );
    expect(container.querySelector('[data-testid="child"]')).toBeTruthy();
  });
});
