import {
  fake,
  Generator,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { T{{modelName}}Graphql, T{{modelName}}Rest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsInitializers = {
  id: fake((f) => f.string.uuid()),
  createdAt: fake(getOlderDate),
  lastModifiedAt: fake(getNewerDate),
};

export const restGenerator = Generator<T{{modelName}}Rest>({
  fields: {
    ...commonFieldsInitializers,
  },
});

export const graphqlGenerator = Generator<T{{modelName}}Graphql>({
  fields: {
    ...commonFieldsInitializers,
    __typename: 'Order',
  },
});
