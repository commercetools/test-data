import {
  StandalonePrice,
  StandalonePriceDraft,
  CustomerGroup,
  Channel,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCreateStandalonePrice,
  TCtpStandalonePrice,
} from '@commercetools-test-data/graphql-types';

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
export type TStandalonePriceGraphql = TCtpStandalonePrice;
export type TStandalonePriceDraftGraphql = TCtpCreateStandalonePrice;

export type TStandalonePriceBuilder = TBuilder<TStandalonePrice>;
export type TStandalonePriceDraftBuilder = TBuilder<StandalonePriceDraft>;
export type TCreateStandalonePriceBuilder = () => TStandalonePriceBuilder;
export type TCreateStandalonePriceDraftBuilder =
  () => TStandalonePriceDraftBuilder;
