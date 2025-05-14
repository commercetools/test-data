import { TBuilder } from '@/core';
import {
  TProductDraft,
  TProductDraftGraphql,
  TProductDraftRest,
} from '../../types';
import { ProductDraft, ProductDraftGraphql, ProductDraftRest } from '../index';

const populatePreset = <
  TModel extends TProductDraftGraphql | TProductDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key(undefined)
    .description(undefined)
    .categories(undefined)
    .categoryOrderHints(undefined)
    .metaTitle(undefined)
    .metaDescription(undefined)
    .metaKeywords(undefined)
    .masterVariant(undefined)
    .variants(undefined)
    .taxCategory(undefined)
    .state(undefined)
    .priceMode(undefined)
    .searchKeywords(undefined)
    .publish(undefined);
};

export const restPreset = (): TBuilder<TProductDraftRest> =>
  populatePreset(ProductDraftRest.random());

export const graphqlPreset = (): TBuilder<TProductDraftGraphql> =>
  populatePreset(ProductDraftGraphql.random());

export const compatPreset = (): TBuilder<TProductDraft> =>
  populatePreset(ProductDraft.random());
