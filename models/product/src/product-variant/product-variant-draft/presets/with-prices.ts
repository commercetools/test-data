import { PriceDraft } from '@commercetools-test-data/commons';
// import ProductVariantDraft from '../builder';

// const withPrices = () =>
//   ProductVariantDraft().prices([PriceDraft.presets.minimal()]);

// export default withPrices;

import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductVariantDraft,
  ProductVariantDraftGraphql,
  ProductVariantDraftRest,
} from '..';
import {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
  TProductVariantDraftRest,
} from '../../types';

const populatePreset = <
  TModel extends TProductVariantDraftGraphql | TProductVariantDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder.prices([PriceDraft.presets.minimal()]);
};

export const restPreset = (): TBuilder<TProductVariantDraftRest> =>
  populatePreset(ProductVariantDraftRest.random());

export const graphqlPreset = (): TBuilder<TProductVariantDraftGraphql> =>
  populatePreset(ProductVariantDraftGraphql.random());

export const compatPreset = (): TBuilder<TProductVariantDraft> =>
  populatePreset(ProductVariantDraft.random());
