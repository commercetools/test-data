import type { StagedPriceDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TStagedPriceDraft = StagedPriceDraft;

export type TStagedPriceDraftGraphql = TStagedPriceDraft;

export type TStagedPriceDraftBuilder = TBuilder<TStagedPriceDraft>;
export type TCreateStagedPriceDraftBuilder = () => TStagedPriceDraftBuilder;
