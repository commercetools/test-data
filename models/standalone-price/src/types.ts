import type {
  StandalonePrice,
  StandalonePriceDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TStandalonePrice = StandalonePrice;
export type TStandalonePriceDraft = StandalonePriceDraft;

export type TStandalonePriceGraphQL = TStandalonePrice & {
  __typename: 'StandalonePrice';
};

export type TStandalonePriceDraftGraphQL = TStandalonePriceDraft & {
  __typename: 'StandalonePriceDraft';
};

export type TStandalonePriceBuilder = TBuilder<TStandalonePrice>;
export type TStandalonePriceDraftBuilder = TBuilder<TStandalonePriceDraft>;
export type TCreateStandalonePriceBuilder = () => TStandalonePriceBuilder;
export type TCreateStandalonePriceDraftBuilder =
  () => TStandalonePriceDraftBuilder;
