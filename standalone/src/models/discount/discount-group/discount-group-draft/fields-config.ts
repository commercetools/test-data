import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TDiscountGroupDraftGraphql,
  TDiscountGroupDraftRest,
} from '../types';

const commonFieldsConfig = {
  name: null,
  description: null,
  key: fake((f) => f.string.alphanumeric({ length: { min: 2, max: 256 } })),
  sortOrder: fake((f) =>
    String(f.number.float({ min: 0.00000001, max: 0.99999999 }))
  ),
  isActive: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountGroupDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountGroupDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
