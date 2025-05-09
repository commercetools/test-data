import {
  ProductDiscount,
  ProductDiscountDraft,
  ProductDiscountValueDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TClientLoggingGraphql,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '../../commons';

export type TProductDiscount = ProductDiscount;
export type TProductDiscountDraft = ProductDiscountDraft;

export type TProductDiscountGraphql = TProductDiscount & {
  __typename: 'ProductDiscount';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
export type TProductDiscountDraftGraphql = Omit<
  TProductDiscountDraft,
  'name' | 'description' | 'value'
> & {
  name: TLocalizedStringDraftGraphql;
  description?: TLocalizedStringDraftGraphql | null;
  value: {
    [key: string]: Omit<ProductDiscountValueDraft, 'type'>;
  };
};

export type TProductDiscountBuilder = TBuilder<TProductDiscount>;
export type TProductDiscountDraftBuilder = TBuilder<TProductDiscountDraft>;

export type TCreateProductDiscountBuilder = () => TProductDiscountBuilder;
export type TCreateProductDiscountDraftBuilder =
  () => TProductDiscountDraftBuilder;
