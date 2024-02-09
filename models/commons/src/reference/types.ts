import type { TBuilder } from '@commercetools-test-data/core';

export type TReferenceBuilder<TypeId = string> = TBuilder<TReference<TypeId>>;

export interface TReference<TypeId = string> {
  typeId: TypeId;
  id: string;
}

export type TExpandedReferenceObject<TypeId = string> = {
  id: TReference<TypeId>['id'];
  version?: number;
};

export type TCreateReferenceBuilder<TypeId = string> =
  () => TReferenceBuilder<TypeId>;

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

// Draft representation
export interface TReferenceDraft<TypeId = string> {
  typeId: TypeId;
  id: string;
}

export type TReferenceDraftGraphql<TypeId = string> =
  TExpandedReferenceObject<TypeId>;

export type TReferenceDraftBuilder<TypeId = string> = TBuilder<
  TReferenceDraft<TypeId>
>;
export type TCreateReferenceDraftBuilder<TypeId = string> =
  () => TReferenceDraftBuilder<TypeId>;
