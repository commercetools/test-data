import type { TBuilder } from '@commercetools-test-data/core';
import type { TLimitWithCurrent } from '../limit-with-current';

export type TTaxCategoryLimitsProjection = {
  total: TLimitWithCurrent;
};

export type TTaxCategoryLimitsProjectionGraphql =
  TTaxCategoryLimitsProjection & {
    __typename: 'TaxCategoryLimitsProjection';
  };

export type TTaxCategoryLimitsProjectionBuilder =
  TBuilder<TTaxCategoryLimitsProjection>;
export type TCreateTaxCategoryLimitsProjectionBuilder =
  () => TTaxCategoryLimitsProjectionBuilder;
