import type { TBuilder } from '@/core';
import {
  TaxedItemPriceGraphql,
  TaxedItemPriceRest,
} from '../../../taxed-item-price';
import { MethodTaxedPriceGraphql, MethodTaxedPriceRest } from '../../index';
import type {
  TMethodTaxedPriceGraphql,
  TMethodTaxedPriceRest,
} from '../../types';

export const restPreset = (): TBuilder<TMethodTaxedPriceRest> =>
  MethodTaxedPriceRest.random().taxedPrice(TaxedItemPriceRest.random());

export const graphqlPreset = (): TBuilder<TMethodTaxedPriceGraphql> =>
  MethodTaxedPriceGraphql.random().taxedPrice(TaxedItemPriceGraphql.random());
