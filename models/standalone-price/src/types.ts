import {
  StandalonePrice,
  StandalonePriceDraft,
  StagedStandalonePrice,
  PriceTier,
  CustomFields,
  DiscountedPrice,
} from '@commercetools/platform-sdk';
import { TChannelGraphql } from '@commercetools-test-data/channel';
import {
  TMoneyGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCustomerGroupGraphql } from '@commercetools-test-data/customer-group';

// Base representation
export type TStandalonePrice = StandalonePrice;

// REST representation
export type TStandalonePriceRest = StandalonePrice;
export type TStandalonePriceDraft = StandalonePriceDraft;

// Graphql representation
export type TStandalonePriceGraphql = Omit<
  TStandalonePrice,
  'staged' | 'tiers' | 'custom' | 'discounted' | 'channel' | 'customerGroup'
> & {
  channel?: TChannelGraphql;
  channelRef?: TReferenceGraphql;
  customerGroup?: TCustomerGroupGraphql;
  customerGroupRef?: TReferenceGraphql;
  tiers: PriceTier[] | null;
  staged: StagedStandalonePrice | null;
  custom: CustomFields | null;
  discounted: DiscountedPrice | null;
  __typename: 'StandalonePrice';
};

export type TStandalonePriceDraftGraphql = Omit<
  TStandalonePriceDraft,
  'value'
> & {
  value: {
    centPrecision: TMoneyGraphql;
  };
};

export type TStandalonePriceBuilder = TBuilder<TStandalonePrice>;
export type TStandalonePriceDraftBuilder = TBuilder<StandalonePriceDraft>;
export type TCreateStandalonePriceBuilder = () => TStandalonePriceBuilder;
export type TCreateStandalonePriceDraftBuilder =
  () => TStandalonePriceDraftBuilder;
