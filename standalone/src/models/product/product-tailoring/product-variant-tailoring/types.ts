import { ProductVariantTailoring } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpProductVariantTailoring } from '@/graphql-types';

export type TProductVariantTailoringRest = ProductVariantTailoring;
export type TProductVariantTailoringGraphql = TCtpProductVariantTailoring;

export type TCreateProductVariantTailoringBuilder<
  TModel extends TProductVariantTailoringRest | TProductVariantTailoringGraphql,
> = () => TBuilder<TModel>;
