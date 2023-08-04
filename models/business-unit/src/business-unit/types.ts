import type {
  BusinessUnit,
  BusinessUnitDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TBusinessUnit = BusinessUnit;
export type TBusinessUnitDraft = BusinessUnitDraft;
export type TBusinessUnitDraftGraphql = TBusinessUnitDraft & {
  __typename: 'BusinessUnitDraft';
};

// export type TBusinessUnitGraphql = TBusinessUnit & {
//   __typename: 'BusinessUnit';
// };

export type TBusinessUnitBuilder = TBuilder<TBusinessUnit>;
export type TBusinessUnitDraftBuilder = TBuilder<TBusinessUnitDraft>;
export type TCreateBusinessUnitBuilder = () => TBusinessUnitBuilder;
export type TCreateBusinessUnitDraftBuilder = () => TBusinessUnitDraftBuilder;
