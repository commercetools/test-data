import type {
  BusinessUnit,
  BusinessUnitDraft,
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
//BusinessUnitGraphql is only scaffolding at this time
export type TBusinessUnitGraphql = TBusinessUnit & {
  ancestors: Array<TBusinessUnitGraphql>;
  inheritedStores: Array<Store> | null;
  __typename: 'BusinessUnit';
};
