import { ProductVariantTailoring } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpProductVariantTailoring } from '@commercetools-test-data/graphql-types';

export type TProductVariantTailoringRest = ProductVariantTailoring;
export type TProductVariantTailoringGraphql = TCtpProductVariantTailoring;

export type TCreateProductVariantTailoringBuilder<
  TModel extends TProductVariantTailoringRest | TProductVariantTailoringGraphql,
> = () => TBuilder<TModel>;
