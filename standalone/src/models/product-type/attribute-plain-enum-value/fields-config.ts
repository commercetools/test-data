import { fake, TModelFieldsConfig } from '@/core';
import {
  TAttributePlainEnumValueGraphql,
  TAttributePlainEnumValueRest,
} from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributeplainenumvalue

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(4)),
  label: fake((f) => f.lorem.slug(4)),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributePlainEnumValueRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributePlainEnumValueGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'PlainEnumValue',
    },
  };
