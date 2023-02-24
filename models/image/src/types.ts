import type { TBuilder } from '@commercetools-test-data/core';
import type { Image } from '@commercetools/platform-sdk';

export type TImage = Image;

export type TImageGraphql = TImage & {
  __typename: 'Image';
};

export type TImageBuilder = TBuilder<TImage>;
export type TCreateImageBuilder = () => TImageBuilder;
