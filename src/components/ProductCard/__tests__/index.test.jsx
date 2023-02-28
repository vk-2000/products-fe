import { render } from '@testing-library/react';
import ProductCard from '..';
import mockData from '../../../mocks/mockData';

describe('ProductCard', () => {
  it('should render correctly', () => {
    const mockProduct = mockData.products[0];
    const { getByText } = render(<ProductCard product={mockProduct} />);
    expect(getByText(mockProduct.name)).toBeTruthy();
  });
});
