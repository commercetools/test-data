import { ProductTailoringData } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpProductTailoringData } from '../../../graphql-types';

export type TProductTailoringDataRest = ProductTailoringData;
export type TProductTailoringDataGraphql = TCtpProductTailoringData;

export type TCreateProductTailoringDataBuilder<
  TModel extends TProductTailoringDataRest | TProductTailoringDataGraphql,
> = () => TBuilder<TModel>;
