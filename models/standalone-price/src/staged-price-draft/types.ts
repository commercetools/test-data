import {
  StagedStandalonePrice,
  StagedPriceDraft,
} from '@commercetools/platform-sdk';
import { TBuilder } from '@commercetools-test-data/core';

export type TStagedPrice = StagedStandalonePrice;
export type TStagedPriceDraft = StagedPriceDraft;

export type TStagedPriceGraphql = TStagedPrice & {
  __typename: 'StagedStandalonePrice';
};
export type TStagedPriceDraftGraphql = TStagedPriceDraft;

export type TStagedPriceBuilder = TBuilder<TStagedPrice>;
export type TStagedPriceDraftBuilder = TBuilder<TStagedPriceDraft>;
export type TCreateStagedPriceBuilder = () => TStagedPriceBuilder;
export type TCreateStagedPriceDraftBuilder = () => TStagedPriceDraftBuilder;
