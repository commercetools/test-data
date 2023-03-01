import type { TBuilder } from '@commercetools-test-data/core';
import type { Image } from '@commercetools/platform-sdk';

export type TImage = Image;
export type TImageDraft = Image;

export type TImageGraphql = TImage & {
  __typename: 'Image';
};

//Graphql draft representation
export type TImageDraftGraphql = TImage & {
  __typename: 'ImageInput';
};

export type TImageBuilder = TBuilder<TImage>;
export type TCreateImageBuilder = () => TImageBuilder;

export type TImageDraftBuilder = TBuilder<TImageDraft>;
export type TCreateImageDraftBuilder = () => TImageDraftBuilder;
