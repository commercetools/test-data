import {
  StandalonePrice,
  StandalonePriceDraft,
  CustomerGroup,
  Channel,
} from '@commercetools/platform-sdk';
import {
  TMoneyGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

// Base representation
export type TStandalonePrice = Omit<
  StandalonePrice,
  'customerGroup' | 'channel'
> & {
  customerGroup: CustomerGroup | null;
  channel: Channel | null;
  expiresAt: string | null;
};

// REST representation
export type TStandalonePriceRest = StandalonePrice;
export type TStandalonePriceDraft = StandalonePriceDraft;

// Graphql representation
export type TStandalonePriceGraphql = TStandalonePrice & {
  customerGroupRef: TReferenceGraphql | null;
  channelRef: TReferenceGraphql | null;
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
