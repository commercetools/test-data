import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TAttributeReferenceGraphql,
  TAttributeReferenceRest,
} from './types';

// https://docs.commercetools.com/api/projects/attribute-groups#attributereference

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
};

// TODO: You just need to place here fields initializers that don't match with the REST API
export const restFieldsConfig: TModelFieldsConfig<TAttributeReferenceRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

// TODO: You just need to place here fields initializers that don't match with the GraphQL API
export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeReferenceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'AttributeReference',
    },
  };
