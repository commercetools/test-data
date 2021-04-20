import type { TBuilder } from '@commercetools-test-data/core';

export type TReferenceBuilder = TBuilder<TReference>;

export type TReference = {
  typeId: string;
  id: string;
};

export type Versioned = {
  id: TReference['id'];
  version?: number;
  [key: string]: unknown;
};

export type TCreateReferenceBuilder = () => TReferenceBuilder;

export type TReferenceRest<T extends Versioned = Versioned> = TReference & {
  obj: T;
};

export type TReferenceGraphql = Versioned & {
  __typename: 'Reference';
};
