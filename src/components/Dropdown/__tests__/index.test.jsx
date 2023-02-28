import { fireEvent, render } from '@testing-library/react';
import Dropdown from '..';

describe('Dropdown', () => {
  it('should render correctly', () => {
    const mockOptions = [
      { value: -1, label: 'All' },
      { value: 1, label: 'Test 1' },
      { value: 2, label: 'Test 2' },
      { value: 3, label: 'Test 3' },
    ];
    const { getByText } = render(<Dropdown label="Test Label" options={mockOptions} handleChange={() => {}} />);
    expect(getByText('Test Label')).toBeTruthy();
  });
  it('should call handleChange when an option is selected', () => {
    const mockOptions = [
      { value: -1, label: 'All' },
      { value: 1, label: 'Test 1' },
      { value: 2, label: 'Test 2' },
      { value: 3, label: 'Test 3' },
    ];
    const mockHandleChange = jest.fn();
    const { getByTestId } = render(<Dropdown label="Test Label" options={mockOptions} handleChange={mockHandleChange} />);
    fireEvent.change(getByTestId('Test Label'), { target: { value: 1 } });
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
