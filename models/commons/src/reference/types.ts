import type { TBuilder } from '@commercetools-test-data/core';

export type TReferenceBuilder = TBuilder<TReference>;

export type TCreateReferenceBuilder = () => TReferenceBuilder;

type TExpandedReferenceObject = {
  id: string;
  [key: string]: unknown;
};

export type TReference = {
  typeId: string;
  id: TExpandedReferenceObject['id'];
  obj?: TExpandedReferenceObject;
};

export type TReferenceGraphql = TReference & {
  __typename: 'Reference';
};

export type TReferenceRest = TReference;
