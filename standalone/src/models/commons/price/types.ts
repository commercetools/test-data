import type { Price, PriceDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpProductPrice, TCtpProductPriceDataInput } from '@/graphql-types';

export type TPrice = Price;
export type TPriceDraft = PriceDraft;

export type TPriceGraphql = TCtpProductPrice;
export type TPriceDraftGraphql = TCtpProductPriceDataInput;

export type TPriceBuilder = TBuilder<Price>;
export type TPriceDraftBuilder = TBuilder<PriceDraft>;
export type TCreatePriceBuilder = () => TPriceBuilder;
export type TCreatePriceDraftBuilder = () => TPriceDraftBuilder;
