import type { TBuilder } from '@commercetools-test-data/core';

export type TReferenceBuilder = TBuilder<TReference<TExpandedReferenceObject>>;

export type TCreateReferenceBuilder = () => TReferenceBuilder;

type TExpandedReferenceObject = {
  id: string;
  [key: string]: unknown;
};

export type TReference<
  T extends TExpandedReferenceObject = TExpandedReferenceObject
> = {
  typeId: string;
  id: T['id'];
  obj?: T;
};

export type TReferenceGraphql = TReference<TExpandedReferenceObject> & {
  __typename: 'Reference';
};

export type TReferenceRest = TReference<TExpandedReferenceObject>;
