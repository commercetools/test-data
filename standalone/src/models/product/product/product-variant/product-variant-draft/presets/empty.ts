import { TBuilder } from '@/core';
import {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
  TProductVariantDraftRest,
} from '../../types';
import {
  ProductVariantDraft,
  ProductVariantDraftGraphql,
  ProductVariantDraftRest,
} from '../index';

const populatePreset = <
  TModel extends TProductVariantDraftGraphql | TProductVariantDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key(undefined)
    .sku(undefined)
    .prices(undefined)
    .attributes(undefined)
    .images(undefined)
    .assets(undefined);
};

export const restPreset = (): TBuilder<TProductVariantDraftRest> =>
  populatePreset(ProductVariantDraftRest.random());

export const graphqlPreset = (): TBuilder<TProductVariantDraftGraphql> =>
  populatePreset(ProductVariantDraftGraphql.random());

export const compatPreset = (): TBuilder<TProductVariantDraft> =>
  populatePreset(ProductVariantDraft.random());
