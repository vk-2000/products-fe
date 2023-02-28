import axios from 'axios';
import makeRequest from '..';
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS } from '../../../constants/apiEndPoints';
import mockData from '../../../mocks/mockData';

jest.mock('axios');

describe('makeRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should make an API call when only apiEndPoint is specified and return response body', async () => {
    axios.mockResolvedValue({
      data: mockData.categories,
    });
    const response = await makeRequest(GET_ALL_CATEGORIES);
    expect(response).toEqual(mockData.categories);
  });

  it('should make an API call when apiEndPoint and dynamicConfig are specified and return response body', async () => {
    axios.mockResolvedValue({
      data: mockData.products,
    });
    const response = await makeRequest(GET_ALL_PRODUCTS, {
      headers: { authorization: 'abc' },
    });
    expect(response).toEqual(mockData.products);
  });
});
