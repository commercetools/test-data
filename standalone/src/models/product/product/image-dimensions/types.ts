import { ImageDimensions } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpDimensions, TCtpDimensionsInput } from '@/graphql-types';

// REST types
export type TImageDimensionsRest = ImageDimensions;
export type TImageDimensionsDraftRest = ImageDimensions;

// GraphQL types
export type TImageDimensionsGraphql = TCtpDimensions;
export type TImageDimensionsDraftGraphql = TCtpDimensionsInput;

export type TCreateImageDimensionsBuilder<
  TModel extends
    | TImageDimensionsRest
    | TImageDimensionsGraphql
    | TImageDimensionsDraftRest
    | TImageDimensionsDraftGraphql,
> = () => TBuilder<TModel>;
