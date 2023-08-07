import type {
  BusinessUnit,
  BusinessUnitDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//BusinessUnitDraft
export type TBusinessUnitDraft = BusinessUnitDraft;
export type TBusinessUnitDraftBuilder = TBuilder<TBusinessUnitDraft>;
export type TCreateBusinessUnitDraftBuilder = () => TBusinessUnitDraftBuilder;
export type TBusinessUnitDraftGraphql = TBusinessUnitDraft & {
  __typename: 'BusinessUnitDraft';
};

//BusinessUnit
export type TBusinessUnit = BusinessUnit;
export type TBusinessUnitBuilder = TBuilder<TBusinessUnit>;
export type TCreateBusinessUnitBuilder = () => TBusinessUnitBuilder;
export type TBusinessUnitGraphql = TBusinessUnit & {
  __typename: 'BusinessUnit';
};
