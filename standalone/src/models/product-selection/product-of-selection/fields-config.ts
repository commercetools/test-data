import { type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql } from '@/models/commons';
import type { TProductOfSelectionGraphql } from '../types';

const commonFieldsConfig = {
  productRef: ReferenceGraphql.presets.productReference().buildGraphql(),
  product: null,
  variantSelection: null,
  variantExclusion: null,
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductOfSelectionGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ProductOfSelection',
    },
  };
