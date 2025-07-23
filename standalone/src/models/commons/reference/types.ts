import type { TBuilder } from '@/core';
import { TCtpReference } from '@/graphql-types';

// Legacy model
export interface TReference<TypeId = string> {
  typeId: TypeId;
  id: string;
  // This is a temporary think. We will be migrating this model to the
  // new implementation patterns as a follow-up whih will make this unncecessary.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj?: any;
}

export type TExpandedReferenceObject<TypeId = string> = {
  id: TReference<TypeId>['id'];
  version?: number;
};

export type TReferenceRest<
  TypeId = string,
  ExpandedObject extends
    TExpandedReferenceObject<TypeId> = TExpandedReferenceObject<TypeId>,
> = Omit<TReference<TypeId>, 'obj'> & {
  obj?: ExpandedObject;
};

export type TReferenceGraphql<TypeId = string> = Omit<
  TCtpReference,
  'typeId'
> & {
  typeId: TypeId;
};

// Draft representations
export type TReferenceDraft<TypeId = string> = {
  typeId: TypeId;
  id: string;
};

export type TReferenceDraftRest<TypeId = string> = TReferenceDraft<TypeId>;

export type TReferenceDraftGraphql<TypeId = string> = TReferenceDraft<TypeId>;

// Builders
export type TCreateReferenceBuilder<
  TReferenceModel extends
    | TReferenceRest
    | TReferenceGraphql
    | TReferenceDraftRest
    | TReferenceDraftGraphql,
> = () => TBuilder<TReferenceModel>;
