import { ProductVariantAvailability } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpProductVariantAvailability } from '@/graphql-types';

export type TProductVariantAvailabilityRest = ProductVariantAvailability;
export type TProductVariantAvailabilityGraphql = TCtpProductVariantAvailability;

export type TCreateProductVariantAvailabilityBuilder<
  TModel extends
    | TProductVariantAvailabilityRest
    | TProductVariantAvailabilityGraphql,
> = () => TBuilder<TModel>;
