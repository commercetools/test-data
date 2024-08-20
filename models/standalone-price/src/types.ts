import {
  StandalonePrice,
  StandalonePriceDraft,
  CustomerGroup,
  Channel,
} from '@commercetools/platform-sdk';
import { TChannel } from '@commercetools-test-data/channel';
import {
  TMoneyGraphql,
  TReferenceGraphql,
  TReferenceRest,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCustomerGroup } from '@commercetools-test-data/customer-group';

// Base representation
// TODO: This doesn't seem to be right. I don't understand why the default type should have customized fields.
// It seems to me that's something only transformed versions of the model should have.
export type TStandalonePrice = Omit<
  StandalonePrice,
  'customerGroup' | 'channel'
> & {
  customerGroup: CustomerGroup | null;
  channel: Channel | null;
  expiresAt: string | null;
};

// REST representation
export type TStandalonePriceRest = Omit<
  StandalonePrice,
  'channel' | 'customerGroup'
> & {
  channel?: TReferenceRest<TChannel>;
  customerGroup?: TReferenceRest<TCustomerGroup>;
};
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
