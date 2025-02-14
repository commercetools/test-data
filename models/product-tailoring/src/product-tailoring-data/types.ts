import { ProductTailoringData } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpProductTailoringData } from '@commercetools-test-data/graphql-types';

export type TProductTailoringDataRest = ProductTailoringData;
export type TProductTailoringDataGraphql = TCtpProductTailoringData;

export type TCreateProductTailoringDataBuilder<
  TModel extends TProductTailoringDataRest | TProductTailoringDataGraphql,
> = () => TBuilder<TModel>;
