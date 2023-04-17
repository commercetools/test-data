import type { TBuilder } from '@commercetools-test-data/core';

type KeyReference = {
  typeId: string;
  key: string;
};

export type TKeyReference = KeyReference;
export type TKeyReferenceGraphql = TKeyReference & {
  __typename: 'Reference';
};

export type TKeyReferenceBuilder = TBuilder<KeyReference>;
export type TCreateKeyReferenceBuilder = () => TKeyReferenceBuilder;
