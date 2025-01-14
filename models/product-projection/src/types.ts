import { ProductProjection } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpProductProjection } from '@commercetools-test-data/graphql-types';

export type TProductProjectionRest = ProductProjection;

export type TProductProjectionGraphql = TCtpProductProjection;

export type TCreateProductProjectionBuilder<
  TProductProjectionModel extends
    | TProductProjectionRest
    | TProductProjectionGraphql,
> = () => TBuilder<TProductProjectionModel>;
