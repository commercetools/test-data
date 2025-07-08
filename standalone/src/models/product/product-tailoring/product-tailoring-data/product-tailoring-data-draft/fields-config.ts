import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceRest } from '@/models/commons';
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
      attributes: [],
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductTailoringDataDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      product: fake(() => ReferenceRest.presets.productReference()),
      attributes: [],
    },
  };
