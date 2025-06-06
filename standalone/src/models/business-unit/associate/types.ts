import type {
  Associate,
  AssociateDraft,
  Customer,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TReferenceGraphql } from '@/models/commons';

export type TAssociateDraft = AssociateDraft;
export type TAssociateDraftGraphql = TAssociateDraft;

export type TAssociateDefault = Omit<Associate, 'customer'> & {
  customer: Customer;
};
export type TAssociateRest = Associate;
export type TAssociateGraphql = TAssociateDefault & {
  customerRef: TReferenceGraphql | null;
  __typename: 'Associate';
};

export type TAssociateDraftBuilder = TBuilder<TAssociateDraft>;
export type TCreateAssociateDraftBuilder = () => TAssociateDraftBuilder;
export type TAssociateBuilder = TBuilder<TAssociateDefault>;
export type TCreateAssociateBuilder = () => TAssociateBuilder;
