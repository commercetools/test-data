import {
  fake,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { T{{it.modelName}}Graphql, T{{it.modelName}}Rest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// TODO: You can place here all the common fields initializers
const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  createdAt: fake(getOlderDate),
  lastModifiedAt: fake(getNewerDate),
};

// TODO: You just need to place here fields initializers that don't match with the REST API
export const restFieldsConfig: TModelFieldsConfig<T{{it.modelName}}Rest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

// TODO: You just need to place here fields initializers that don't match with the GraphQL API
export const graphqlFieldsConfig: TModelFieldsConfig<T{{it.modelName}}Graphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: '{{it.modelName}}',
  },
};
