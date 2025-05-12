import type {
  CustomerGroup,
  CustomerGroupDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';

export type TCustomerGroup = CustomerGroup;
export type TCustomerGroupDraft = CustomerGroupDraft;

export type TCustomerGroupGraphql = TCustomerGroup & {
  __typename: 'CustomerGroup';
};
export type TCustomerGroupDraftGraphql = TCustomerGroupDraft;

export type TCustomerGroupBuilder = TBuilder<TCustomerGroup>;
export type TCustomerGroupDraftBuilder = TBuilder<TCustomerGroupDraft>;
export type TCreateCustomerGroupBuilder = () => TCustomerGroupBuilder;
export type TCreateCustomerGroupDraftBuilder = () => TCustomerGroupDraftBuilder;
