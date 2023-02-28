import { fireEvent, render } from '@testing-library/react';
import Products from '..';
import mockData from '../../../mocks/mockData';

describe('Products', () => {
  it('should render correctly', () => {
    const mockProducts = mockData.products;
    const mockHandleSearch = jest.fn();
    const mockHandleSort = jest.fn();
    // eslint-disable-next-line max-len
    const { getByText } = render(<Products products={mockProducts} handleSearch={mockHandleSearch} handleSort={mockHandleSort} />);
    expect(getByText('Sort By')).toBeTruthy();
  });
  it('should render correct number of product cards', () => {
    const mockProducts = mockData.products;
    const mockHandleSearch = jest.fn();
    const mockHandleSort = jest.fn();
    // eslint-disable-next-line max-len
    const { getAllByTestId } = render(<Products products={mockProducts} handleSearch={mockHandleSearch} handleSort={mockHandleSort} />);
    expect(getAllByTestId('product-card').length).toBe(8);
  });
  it('should call handleSearch when search input is changed', () => {
    const mockProducts = mockData.products;
    const mockHandleSearch = jest.fn();
    const mockHandleSort = jest.fn();
    // eslint-disable-next-line max-len
    const { getByPlaceholderText } = render(<Products products={mockProducts} handleSearch={mockHandleSearch} handleSort={mockHandleSort} />);
    const searchInput = getByPlaceholderText('search');
    expect(searchInput).toBeTruthy();
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
