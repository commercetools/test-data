import type {
  BusinessUnit,
  BusinessUnitDraft,
  BusinessUnitKeyReference,
  KeyReference,
  Store,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//BusinessUnitDraft
export type TBusinessUnitDraft = BusinessUnitDraft;
export type TBusinessUnitDraftBuilder = TBuilder<TBusinessUnitDraft>;
export type TCreateBusinessUnitDraftBuilder = () => TBusinessUnitDraftBuilder;
//BusinessUnitDraftGraphql is only scaffolding at this time
export type TBusinessUnitDraftGraphql = TBusinessUnitDraft & {
  __typename: 'BusinessUnitDraft';
};

//BusinessUnit
export type TBusinessUnit = BusinessUnit;
export type TBusinessUnitBuilder = TBuilder<TBusinessUnit>;
export type TCreateBusinessUnitBuilder = () => TBusinessUnitBuilder;
export type TBusinessUnitGraphql = Omit<
  TBusinessUnit,
  'topLevelUnit' | 'parentUnit'
> & {
  ancestors: Array<TBusinessUnitGraphql>;
  inheritedStores: Array<Store> | null;
  __typename: 'BusinessUnit';
  storesRef: KeyReference;
  parentUnitRef: BusinessUnitKeyReference | null;
  parentUnit?: BusinessUnitKeyReference | undefined;
  topLevelUnitRef: BusinessUnitKeyReference;
  topLevelUnit: BusinessUnitKeyReference | TBusinessUnit;
};
