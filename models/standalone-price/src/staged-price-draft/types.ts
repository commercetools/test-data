import { StagedPriceDraft } from '@commercetools/platform-sdk';
import { TBuilder } from '@commercetools-test-data/core';

export type TStagedPriceDraft = StagedPriceDraft;

export type TStagedPriceDraftGraphql = TStagedPriceDraft;

export type TStagedPriceDraftBuilder = TBuilder<TStagedPriceDraft>;
export type TCreateStagedPriceDraftBuilder = () => TStagedPriceDraftBuilder;
