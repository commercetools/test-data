import type { Image } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpImage, TCtpImageInput } from '@/graphql-types';

/**
 * @deprecated use `TImageRest` or `TImageGraphql` instead
 */
export type TImage = Image;

/**
 * @deprecated use `TImageDraftRest` or `TImageDraftGraphql` instead
 */
export type TImageDraft = Image;

// REST types
export type TImageRest = Image;
export type TImageDraftRest = Image;

// GraphQL types
export type TImageGraphql = TCtpImage;
export type TImageDraftGraphql = TCtpImageInput;

export type TCreateImageBuilder<
  TImageModel extends
    | TImage
    | TImageDraft
    | TImageRest
    | TImageGraphql
    | TImageDraftRest
    | TImageDraftGraphql,
> = () => TBuilder<TImageModel>;
