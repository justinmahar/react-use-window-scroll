import { renderHook } from '@testing-library/react-hooks';
import { useScrollBy } from '../hooks/useScrollBy';

describe('useScrollBy Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useScrollBy());
    expect(result.error).toBe(undefined);
  });
});
