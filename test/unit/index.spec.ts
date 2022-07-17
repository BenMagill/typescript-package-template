import { hello } from '../../src';

describe('index', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('Help', () => {
    it('will return hello', () => {
      expect(hello()).toBe('hello');
    });
  });
});