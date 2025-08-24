import "@testing-library/jest-dom";

// Polyfill for structuredClone in Jest environment
if (typeof global.structuredClone === "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global.structuredClone = (val: any) => {
    if (val === undefined) return undefined;
    return JSON.parse(JSON.stringify(val));
  };
}

// Polyfill for matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class ResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).ResizeObserver = ResizeObserver;
