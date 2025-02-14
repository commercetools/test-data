import { ReferenceRest } from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TProductTailoringDataDraftGraphql,
  TProductTailoringDataDraftRest,
} from './types';

const commonFieldsConfig = {
  key: null,
  description: null,
  metaDescription: null,
  metaKeywords: null,
  metaTitle: null,
  name: null,
  slug: null,
  publish: fake((f) => f.datatype.boolean()),
  variants: [],
};

export const restFieldsConfig: TModelFieldsConfig<TProductTailoringDataDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
      product: fake(() => ReferenceRest.presets.productReference()),
      store: fake(() => ReferenceRest.presets.storeReference()),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductTailoringDataDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      product: fake(() => ReferenceRest.presets.productReference()),
    },
  };
