import { fake, TModelFieldsConfig } from '../../../../core';
import {
  TAttributePlainEnumValueDraftGraphql,
  TAttributePlainEnumValueDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributeplainenumvalue

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(4)),
  label: fake((f) => f.lorem.slug(4)),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributePlainEnumValueDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributePlainEnumValueDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
