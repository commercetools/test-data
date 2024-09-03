import type { Image } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TImage = Image;
export type TImageDraft = Image;

export type TImageGraphql = Omit<TImage, 'dimensions'> & {
  dimensions: {
    width: number;
    height: number;
  };
  __typename: 'Image';
};

//Graphql draft representation
export type TImageDraftGraphql = Omit<TImage, 'dimensions'> & {
  dimensions: {
    width: number;
    height: number;
  };
};

export type TImageBuilder = TBuilder<TImage>;
export type TCreateImageBuilder = () => TImageBuilder;

export type TImageDraftBuilder = TBuilder<TImageDraft>;
export type TCreateImageDraftBuilder = () => TImageDraftBuilder;
