import { StagedStandalonePrice } from '@commercetools/platform-sdk';
import { TBuilder } from '../../../core';

export type TStagedStandalonePrice = StagedStandalonePrice;

export type TStagedStandalonePriceGraphql = TStagedStandalonePrice;

export type TStagedStandalonePriceBuilder = TBuilder<TStagedStandalonePrice>;
export type TCreateStagedStandalonePriceBuilder =
  () => TStagedStandalonePriceBuilder;
