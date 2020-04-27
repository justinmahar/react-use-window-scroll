import { renderHook } from '@testing-library/react-hooks';
import { useScrollTo } from '../hooks/useScrollTo';

// Learn how to test React hooks:
// https://react-hooks-testing-library.com/

describe('useScrollTo Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useScrollTo());
    expect(result.error).toBe(undefined);
  });
});
