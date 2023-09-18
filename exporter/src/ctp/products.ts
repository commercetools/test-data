import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot } from './client';

export const getProducts = async (
  limit: number,
  offset?: number,
  expand?: string | string[]
): Promise<ProductPagedQueryResponse> => {
  const { body } = await apiRoot
    .products()
    .get({ queryArgs: { limit: limit, offset: offset, expand: expand } })
    .execute();
  return body;
};
