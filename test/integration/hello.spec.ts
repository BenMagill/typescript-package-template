import { hello } from '../../lib';

describe('Hello', () => {
  it('will run', () => {
    expect(hello()).toBe('hello');
  });
});