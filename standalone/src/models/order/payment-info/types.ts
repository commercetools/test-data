import { PaymentInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpPaymentInfo } from '@/graphql-types';

export type TPaymentInfoRest = PaymentInfo;
export type TPaymentInfoGraphql = TCtpPaymentInfo;

export type TCreatePaymentInfoBuilder<
  TModel extends TPaymentInfoRest | TPaymentInfoGraphql,
> = () => TBuilder<TModel>;
