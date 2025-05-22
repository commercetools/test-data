import { type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql } from '@/models/commons';
import type { TProductOfSelectionGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TProductOfSelectionGraphql> =
  {
    fields: {
      productRef: ReferenceGraphql.presets.productReference().buildGraphql(),
      product: null,
      variantSelection: null,
      variantExclusion: null,
      __typename: 'ProductOfSelection',
    },
  };
