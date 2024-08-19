import type { TBuilder } from '@commercetools-test-data/core';

export type TExpandedReferenceObject = {
  id: string;
  version?: number;
};

export interface TReference<TypeId = string> {
  typeId: TypeId;
  id: string;
  obj?: TBuilder<TExpandedReferenceObject>;
}

export type TReferenceRest<
  ExpandedObject extends TExpandedReferenceObject = TExpandedReferenceObject,
> = Omit<TReference, 'obj'> & {
  obj?: ExpandedObject;
};

export type TReferenceGraphql = Omit<TReference, 'obj'> & {
  __typename: 'Reference';
};

// Draft representation
export interface TReferenceDraft<TypeId = string> {
  typeId: TypeId;
  id: string;
}

export type TReferenceDraftGraphql = TExpandedReferenceObject;

export type TReferenceBuilder<TypeId = string> = TBuilder<TReference<TypeId>>;
export type TCreateReferenceBuilder<TypeId = string> =
  () => TReferenceBuilder<TypeId>;

export type TReferenceDraftBuilder<TypeId = string> = TBuilder<
  TReferenceDraft<TypeId>
>;
export type TCreateReferenceDraftBuilder<TypeId = string> =
  () => TReferenceDraftBuilder<TypeId>;
