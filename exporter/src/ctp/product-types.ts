import { apiRoot } from './client';

export const getProductTypes = async () => {
  const { body } = await apiRoot.productTypes().get().execute();
  return body.results;
};

export const getProductTypeByKey = async (key: string) => {
  const { body } = await apiRoot
    .productTypes()
    .withKey({ key: key })
    .get()
    .execute();
  return body;
};

export const getProductTypeById = async (id: string) => {
  const { body } = await apiRoot
    .productTypes()
    .withId({ ID: id })
    .get()
    .execute();
  return body;
};
