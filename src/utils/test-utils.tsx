import { render } from "@testing-library/react";
import Providers from "@/providers";
import userEvent from '@testing-library/user-event'

export const user = userEvent.setup();

export const customRender = (ui: React.ReactElement) =>
  render(<Providers>{ui}</Providers>);

function matchMediaQuery(query: string, width: number): boolean {
  const minMatch = /min-width:\s*(\d+)px/.exec(query);
  const maxMatch = /max-width:\s*(\d+)px/.exec(query);

  const min = minMatch ? parseInt(minMatch[1], 10) : 0;
  const max = maxMatch ? parseInt(maxMatch[1], 10) : Infinity;

  return width >= min && width <= max;
}

export function mockMatchMedia(width: number) {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: matchMediaQuery(query, width),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  });
}
