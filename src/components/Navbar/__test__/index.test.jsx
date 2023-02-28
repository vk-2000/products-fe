import { render } from '@testing-library/react';
import Navbar from '..';

describe('Navbar', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Marketplace')).toBeTruthy();
  });
});
