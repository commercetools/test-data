import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TAttributeReferenceGraphql,
  TAttributeReferenceRest,
} from './types';

// https://docs.commercetools.com/api/projects/attribute-groups#attributereference

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeReferenceRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeReferenceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'AttributeReference',
    },
  };
