import {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { DiscountCode, DiscountCodeDraft } from '@commercetools/platform-sdk';

export type TDiscountCode = DiscountCode;
export type TDiscountCodeDraft = DiscountCodeDraft;

export type TDiscountCodeGraphql = TDiscountCode & {
  __typename: 'DiscountCode';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
export type TDiscountCodeDraftGraphql = TDiscountCodeDraft & {
  __typename: 'DiscountCodeDraft';
};

export type TDiscountCodeBuilder = TBuilder<TDiscountCode>;
export type TDiscountCodeDraftBuilder = TBuilder<TDiscountCodeDraft>;

export type TCreateDiscountCodeBuilder = () => TDiscountCodeBuilder;
export type TCreateDiscountCodeDraftBuilder = () => TDiscountCodeDraftBuilder;
