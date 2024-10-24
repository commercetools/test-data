import type { TBuilder } from '@commercetools-test-data/core';
import { DiscountedPriceGraphql, DiscountedPriceRest } from '../..';
import type {
  TDiscountedPriceGraphql,
  TDiscountedPriceRest,
} from '../../types';

export const restPreset = (): TBuilder<TDiscountedPriceRest> =>
  DiscountedPriceRest.random().id('dummy-id');

export const graphqlPreset = (): TBuilder<TDiscountedPriceGraphql> =>
  DiscountedPriceGraphql.random().id('dummy-id');

// If you have many fields to customize and both presets are the same, you can use this version
// const populatePreset = (builder: TBuilder<TDiscountedPriceRest | TDiscountedPriceGraphql>) => {
//   return builder.id('dummy-id');
// };
// export const restPreset = (): TBuilder<TDiscountedPriceRest> =>
//   populatePreset(DiscountedPriceRest.random());
// export const graphqlPreset = (): TBuilder<TDiscountedPriceGraphql> =>
//   populatePreset(DiscountedPriceGraphql.random());
