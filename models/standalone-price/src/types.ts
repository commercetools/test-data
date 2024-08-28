import type {
  StandalonePrice,
  StandalonePriceDraft,
} from '@commercetools/platform-sdk';
import type { TChannelGraphql } from '@commercetools-test-data/channel';
import type {
  TMoneyGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCustomerGroupGraphql } from '@commercetools-test-data/customer-group';

// Base representation
export type TStandalonePrice = StandalonePrice;

// REST representation
export type TStandalonePriceRest = StandalonePrice;
export type TStandalonePriceDraft = StandalonePriceDraft;

// Graphql representation
export type TStandalonePriceGraphql = Omit<
  TStandalonePrice,
  'channel' | 'customerGroup'
> & {
  channel?: TChannelGraphql;
  channelRef?: TReferenceGraphql;
  customerGroup?: TCustomerGroupGraphql;
  customerGroupRef?: TReferenceGraphql;
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
