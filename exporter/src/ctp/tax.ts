import { apiRoot } from './client';

export const getTaxes = async (limit?: number) => {
  return apiRoot
    .taxCategories()
    .get({ queryArgs: { limit: limit } })
    .execute()
    .then((res) => res.body);
};
