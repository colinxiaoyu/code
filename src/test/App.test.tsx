import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import App from '../page/App';
import { debouncedValueAtom, currentValueAtom } from '../state';
import { useAtom, useAtomValue } from 'jotai';

test('测试输入', async () => {
  render(<App />);
  const inputElement = screen.getByTestId('input') as HTMLTextAreaElement;

  fireEvent.change(inputElement, { target: { value: 'test' } })

  expect(inputElement.value).toBe('test')
});


test('验证自定义 atom ，测试输入 setDebouncedValue 的值与currentValue 一致 ', async () => {
  const setDebouncedValue = renderHook(() => useAtom(debouncedValueAtom))
  const currentValue = renderHook(() => useAtomValue(currentValueAtom));

  act(() => {
    setDebouncedValue.result.current[1]("test")
  });

  expect(currentValue.result.current).toBe('test')
});