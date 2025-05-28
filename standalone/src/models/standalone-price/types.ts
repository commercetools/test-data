import {
  StandalonePrice,
  StandalonePriceDraft,
  CustomerGroup,
  Channel,
  Reference,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpCreateStandalonePrice,
  TCtpStandalonePrice,
} from '@/graphql-types';

// @TODO: Temporary type adjustments in this file are documented here:
// https://next-docs-subscriptions-docs.commercetools.vercel.app/api/projects/standalone-prices#standaloneprice
// https://next-docs-subscriptions-docs.commercetools.vercel.app/api/projects/standalone-prices#standalonepricedraft
// These should be removed once the official SDK provides support for recurrencePolicy.

// Base representation
export type TStandalonePrice = Omit<
  StandalonePrice,
  'customerGroup' | 'channel' | 'recurrencePolicy'
> & {
  customerGroup: CustomerGroup | null;
  channel: Channel | null;
  expiresAt: string | null;
  recurrencePolicy: Reference | null;
};

export type TStandalonePriceDraft = StandalonePriceDraft & {
  recurrencePolicy?: Reference;
};

// REST representation
export type TStandalonePriceRest = StandalonePrice & {
  recurrencePolicy?: Reference;
};

// Graphql representation
export type TStandalonePriceGraphql = TCtpStandalonePrice;
export type TStandalonePriceDraftGraphql = TCtpCreateStandalonePrice;

export type TStandalonePriceBuilder = TBuilder<TStandalonePrice>;
export type TStandalonePriceDraftBuilder = TBuilder<TStandalonePriceDraft>;
export type TCreateStandalonePriceBuilder = () => TStandalonePriceBuilder;
export type TCreateStandalonePriceDraftBuilder =
  () => TStandalonePriceDraftBuilder;
