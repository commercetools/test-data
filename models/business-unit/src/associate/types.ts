import type {
  Associate,
  AssociateDraft,
  Customer,
} from '@commercetools/platform-sdk';
import {
  TReferenceGraphql,
  TReferenceRest,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCustomer } from '@commercetools-test-data/customer';

export type TAssociateDraft = AssociateDraft;
export type TAssociateDraftGraphql = TAssociateDraft;

export type TAssociateDefault = Omit<Associate, 'customer'> & {
  customer: Customer;
};
export type TAssociateRest = Omit<Associate, 'customer'> & {
  customer: TReferenceRest<TCustomer>;
};

export type TAssociateGraphql = TAssociateDefault & {
  customerRef: TReferenceGraphql | null;
  __typename: 'Associate';
};

export type TAssociateDraftBuilder = TBuilder<TAssociateDraft>;
export type TCreateAssociateDraftBuilder = () => TAssociateDraftBuilder;
export type TAssociateBuilder = TBuilder<TAssociateDefault>;
export type TCreateAssociateBuilder = () => TAssociateBuilder;
