import { DiscountCode, DiscountCodeDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TClientLoggingGraphql,
  TLocalizedStringGraphql,
} from '@/models/commons';

export type TDiscountCode = DiscountCode;
export type TDiscountCodeDraft = DiscountCodeDraft;

export type TDiscountCodeGraphql = TDiscountCode & {
  __typename: 'DiscountCode';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  applicationCount: number;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
export type TDiscountCodeDraftGraphql = TDiscountCodeDraft;

export type TDiscountCodeBuilder = TBuilder<TDiscountCode>;
export type TDiscountCodeDraftBuilder = TBuilder<TDiscountCodeDraft>;

export type TCreateDiscountCodeBuilder = () => TDiscountCodeBuilder;
export type TCreateDiscountCodeDraftBuilder = () => TDiscountCodeDraftBuilder;
