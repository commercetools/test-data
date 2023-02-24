import type { TBuilder } from '@commercetools-test-data/core';
import type {
  CustomerGroup,
  CustomerGroupDraft,
} from '@commercetools/platform-sdk';

export type TCustomerGroup = CustomerGroup;
export type TCustomerGroupDraft = CustomerGroupDraft;

export type TCustomerGroupGraphql = TCustomerGroup & {
  __typename: 'CustomerGroup';
};
export type TCustomerGroupDraftGraphql = TCustomerGroupDraft & {
  __typename: 'CustomerGroupDraft';
};

export type TCustomerGroupBuilder = TBuilder<TCustomerGroup>;
export type TCustomerGroupDraftBuilder = TBuilder<TCustomerGroupDraft>;
export type TCreateCustomerGroupBuilder = () => TCustomerGroupBuilder;
export type TCreateCustomerGroupDraftBuilder = () => TCustomerGroupDraftBuilder;
