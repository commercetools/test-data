import {
  Category,
  CategoryPagedQueryResponse,
} from '@commercetools/platform-sdk';
import { apiRoot } from './client';

export const getCategories = async (
  limit: number
): Promise<CategoryPagedQueryResponse> => {
  const { body } = await apiRoot
    .categories()
    .get({ queryArgs: { limit: limit } })
    .execute();
  return body;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const { body } = await apiRoot
    .categories()
    .withId({ ID: id })
    .get()
    .execute();
  return body;
};

export const getCategoryByKey = async (key: string): Promise<Category> => {
  const { body } = await apiRoot
    .categories()
    .withKey({ key: key })
    .get()
    .execute();
  return body;
};

export const getCategoryBySlug = async (
  slug: string,
  locale: string
): Promise<CategoryPagedQueryResponse> => {
  const { body } = await apiRoot
    .categories()
    .get({ queryArgs: { where: 'slug(' + locale + '="' + slug + '")' } })
    .execute();
  return body;
};
