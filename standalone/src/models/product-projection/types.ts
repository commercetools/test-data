import { ProductProjection } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpProductProjection } from '@/graphql-types';

export type TProductProjectionRest = ProductProjection;

export type TProductProjectionGraphql = TCtpProductProjection;

export type TCreateProductProjectionBuilder<
  TProductProjectionModel extends
    | TProductProjectionRest
    | TProductProjectionGraphql,
> = () => TBuilder<TProductProjectionModel>;
