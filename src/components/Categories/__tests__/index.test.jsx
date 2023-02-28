import { render } from '@testing-library/react';
import Categories from '..';
import mockData from '../../../mocks/mockData';

describe('Categories', () => {
  it('should render correctly', () => {
    const { categories } = mockData;
    const { getByText } = render(<Categories categories={categories} />);
    expect(getByText('Category')).toBeTruthy();
  });
});
