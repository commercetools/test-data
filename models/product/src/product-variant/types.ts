import {
  ProductVariant,
  ProductVariantDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

import {
  TCtpProductVariant,
  TCtpProductVariantInput,
} from '@commercetools-test-data/graphql-types';

/**
 * @deprecated use `TProductVariantRest` or `TProductVariantGraphql` instead
 */
export type TProductVariant = ProductVariant;
/**
 * @deprecated use `TProductVariantDraftRest` or `TProductVariantDraftGraphql` instead
 */
export type TProductVariantDraft = ProductVariantDraft;

export type TProductVariantRest = ProductVariant;
export type TProductVariantDraftRest = ProductVariantDraft;

export type TProductVariantGraphql = TCtpProductVariant;
export type TProductVariantDraftGraphql = TCtpProductVariantInput;

export type TCreateProductVariantBuilder<
  TProductVariantModel extends
    | TProductVariantRest
    | TProductVariantDraftRest
    | TProductVariantGraphql
    | TProductVariantDraftGraphql,
> = () => TBuilder<TProductVariantModel>;
