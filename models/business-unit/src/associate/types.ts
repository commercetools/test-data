import type { Associate, AssociateDraft } from '@commercetools/platform-sdk';
import type { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCustomerGraphql } from '@commercetools-test-data/customer';

export type TAssociateDefault = Associate;

export type TAssociateDraft = AssociateDraft;
export type TAssociateDraftGraphql = TAssociateDraft;

export type TAssociateRest = Associate;

export type TAssociateGraphql = Omit<TAssociateDefault, 'customer'> & {
  customer: TCustomerGraphql;
  customerRef: TReferenceGraphql | null;
  __typename: 'Associate';
};

export type TAssociateDraftBuilder = TBuilder<TAssociateDraft>;
export type TCreateAssociateDraftBuilder = () => TAssociateDraftBuilder;
export type TAssociateBuilder = TBuilder<TAssociateDefault>;
export type TCreateAssociateBuilder = () => TAssociateBuilder;
