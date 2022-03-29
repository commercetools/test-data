import type { TBuilder } from '@commercetools-test-data/core';

export type TReferenceBuilder<TypeId = string> = TBuilder<TReference<TypeId>>;

export type TReference<TypeId = string> = {
  typeId: TypeId;
  id: string;
};

export type TExpandedReferenceObject<TypeId = string> = {
  id: TReference<TypeId>['id'];
  version?: number;
  [key: string]: unknown;
};

export type TCreateReferenceBuilder = () => TReferenceBuilder;

export type TReferenceRest<
  TypeId = string,
  ExpandedObject extends TExpandedReferenceObject<TypeId> = TExpandedReferenceObject<TypeId>
> = TReference<TypeId> & {
  obj: ExpandedObject;
};

export type TReferenceGraphql<TypeId = string> =
  TExpandedReferenceObject<TypeId> & {
    __typename: 'Reference';
  };
