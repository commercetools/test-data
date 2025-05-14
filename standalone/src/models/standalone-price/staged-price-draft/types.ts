import { StagedPriceDraft } from '@commercetools/platform-sdk';
import { TBuilder } from '@/core';

export type TStagedPriceDraft = StagedPriceDraft;

export type TStagedPriceDraftGraphql = TStagedPriceDraft;

export type TStagedPriceDraftBuilder = TBuilder<TStagedPriceDraft>;
export type TCreateStagedPriceDraftBuilder = () => TStagedPriceDraftBuilder;
