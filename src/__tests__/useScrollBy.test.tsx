import { renderHook } from '@testing-library/react-hooks';
import { useScrollBy } from '../hooks/useScrollBy';

// Learn how to test React hooks:
// https://react-hooks-testing-library.com/

describe('useScrollBy Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useScrollBy());
    expect(result.error).toBe(undefined);
  });
});
