import {
  CartDiscountValueAbsolute,
  CartDiscountValueAbsoluteDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TCartDiscountValueAbsolute = CartDiscountValueAbsolute;
export type TCartDiscountValueAbsoluteDraft = CartDiscountValueAbsoluteDraft;

export type TCartDiscountValueAbsoluteGraphql = Omit<
  TCartDiscountValueAbsolute,
  'applicationMode'
> & {
  __typename: 'AbsoluteDiscountValue';
};

export type TCartDiscountValueAbsoluteCartGraphql =
  Required<TCartDiscountValueAbsolute> & {
    __typename: 'AbsoluteCartDiscountValue';
  };

export type TCartDiscountValueAbsoluteDraftGraphql = {
  absolute: Omit<TCartDiscountValueAbsoluteDraft, 'type' | 'applicationMode'>;
};

export type TCartDiscountValueAbsoluteCartDraftGraphql = {
  absoluteCart: Required<Omit<TCartDiscountValueAbsoluteDraft, 'type'>>;
};

export type TCartDiscountValueAbsoluteBuilder =
  TBuilder<TCartDiscountValueAbsolute>;
export type TCartDiscountValueAbsoluteDraftBuilder =
  TBuilder<TCartDiscountValueAbsoluteDraft>;

export type TCreateCartDiscountValueAbsoluteBuilder =
  () => TCartDiscountValueAbsoluteBuilder;
export type TCreateCartDiscountValueAbsoluteDraftBuilder =
  () => TCartDiscountValueAbsoluteDraftBuilder;
