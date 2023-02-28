import {
  fireEvent, render, waitFor, within,
} from '@testing-library/react';
import Main from '..';
import mockData from '../../../mocks/mockData';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

describe('Main', () => {
  it('should render all the products when loaded', async () => {
    makeRequest.mockResolvedValueOnce(mockData.categories);
    makeRequest.mockResolvedValueOnce(mockData.products);
    const { getAllByTestId } = render(<Main />);
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(8);
    });
  });

  it('should render only the products of the selected category', async () => {
    makeRequest.mockResolvedValueOnce(mockData.categories);
    makeRequest.mockResolvedValueOnce(mockData.products);
    const { getAllByTestId, getByTestId } = render(<Main />);
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(8);
    });
    const categorySelect = getByTestId('Category');
    fireEvent.change(categorySelect, { target: { value: 1 } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
  });

  it('should render only the products of the selected category and search term', async () => {
    makeRequest.mockResolvedValueOnce(mockData.categories);
    makeRequest.mockResolvedValueOnce(mockData.products);
    const { getAllByTestId, getByTestId, getByPlaceholderText } = render(<Main />);
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(8);
    });
    const categorySelect = getByTestId('Category');
    fireEvent.change(categorySelect, { target: { value: 1 } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
    const searchInput = getByPlaceholderText('search');
    fireEvent.change(searchInput, { target: { value: 'sam' } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(1);
    });
  });

  it('should render all the products from the selected category when the search term is an empty string', async () => {
    makeRequest.mockResolvedValueOnce(mockData.categories);
    makeRequest.mockResolvedValueOnce(mockData.products);
    const { getAllByTestId, getByTestId, getByPlaceholderText } = render(<Main />);
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(8);
    });
    const categorySelect = getByTestId('Category');
    fireEvent.change(categorySelect, { target: { value: 1 } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
    const searchInput = getByPlaceholderText('search');
    fireEvent.change(searchInput, { target: { value: 'sam' } });
    fireEvent.change(searchInput, { target: { value: '' } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
  });

  it('should render only the products of the selected category and sorted by price', async () => {
    makeRequest.mockResolvedValueOnce(mockData.categories);
    makeRequest.mockResolvedValueOnce(mockData.products);
    const { getAllByTestId, getByTestId } = render(<Main />);
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(8);
    });
    const categorySelect = getByTestId('Category');
    fireEvent.change(categorySelect, { target: { value: 1 } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
    const sortSelect = getByTestId('Sort By');
    fireEvent.change(sortSelect, { target: { value: 'price' } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
    expect(within(getAllByTestId('product-card')[0]).getByText('899.99')).toBeTruthy();
  });

  it('should render only the products of the selected category and sorted by name', async () => {
    makeRequest.mockResolvedValueOnce(mockData.categories);
    makeRequest.mockResolvedValueOnce(mockData.products);
    const { getAllByTestId, getByTestId } = render(<Main />);
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(8);
    });
    const categorySelect = getByTestId('Category');
    fireEvent.change(categorySelect, { target: { value: 1 } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
    const sortSelect = getByTestId('Sort By');
    fireEvent.change(sortSelect, { target: { value: 'name' } });
    await waitFor(() => {
      expect(getAllByTestId('product-card')).toHaveLength(3);
    });
    expect(within(getAllByTestId('product-card')[0]).getByText('Apple iPhone X')).toBeTruthy();
  });
});
