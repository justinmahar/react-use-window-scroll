import { renderHook } from '@testing-library/react-hooks';
import { useScrollTo } from '../hooks/useScrollTo';

describe('useScrollTo Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useScrollTo());
    expect(result.error).toBe(undefined);
  });
});
