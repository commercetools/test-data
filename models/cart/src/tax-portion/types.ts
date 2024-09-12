import type { TaxPortion } from '@commercetools/platform-sdk';
import { TBuilder } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/projects/carts#taxportion

export type TTaxPortion = TaxPortion;
export type TTaxPortionRest = TTaxPortion;
export type TTaxPortionGraphql = TTaxPortion & {
  __typename: 'TaxPortion';
};

export type TTaxPortionBuilder = TBuilder<TTaxPortion>;
export type TCreateTaxPortionBuilder = () => TTaxPortionBuilder;
