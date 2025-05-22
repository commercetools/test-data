import { ProductTailoringAttribute } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpRawProductAttribute } from '@/graphql-types';

export type TProductTailoringAttributeRest = ProductTailoringAttribute;
export type TProductTailoringAttributeGraphql = TCtpRawProductAttribute;

export type TCreateProductTailoringAttributeBuilder<
  TModel extends
    | TProductTailoringAttributeRest
    | TProductTailoringAttributeGraphql,
> = () => TBuilder<TModel>;
