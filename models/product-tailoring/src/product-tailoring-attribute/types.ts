import { ProductTailoringAttribute } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpRawProductAttribute } from '@commercetools-test-data/graphql-types';

export type TProductTailoringAttributeRest = ProductTailoringAttribute;
export type TProductTailoringAttributeGraphql = TCtpRawProductAttribute;

export type TCreateProductTailoringAttributeBuilder<
  TModel extends
    | TProductTailoringAttributeRest
    | TProductTailoringAttributeGraphql,
> = () => TBuilder<TModel>;
