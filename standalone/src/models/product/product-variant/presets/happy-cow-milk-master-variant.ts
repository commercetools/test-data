import { TBuilder } from '@/core';
import { Attribute } from '@/models/product';
import {
  ProductVariant,
  ProductVariantGraphql,
  ProductVariantRest,
} from '../index';
import {
  TProductVariant,
  TProductVariantGraphql,
  TProductVariantRest,
} from '../types';

const populatePreset = <
  TModel extends TProductVariantGraphql | TProductVariantRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .id(1)
    .key('happy-cow-master-variant-key')
    .sku('happy-cow-master-variant-sku');
};

export const restPreset = (): TBuilder<TProductVariantRest> => {
  return populatePreset(ProductVariantRest.random()).attributes([
    Attribute.random().name('cow-name').value('Buryonka'),
    Attribute.random().name('lactose-free').value(false),
  ]);
};

export const graphqlPreset = (): TBuilder<TProductVariantGraphql> => {
  return populatePreset(ProductVariantGraphql.random()).attributesRaw([
    Attribute.random().name('cow-name').value('Buryonka'),
    Attribute.random().name('lactose-free').value(false),
  ]);
};

export const compatPreset = (): TBuilder<TProductVariant> => {
  return populatePreset(ProductVariant.random()).attributes([
    Attribute.random().name('cow-name').value('Buryonka'),
    Attribute.random().name('lactose-free').value(false),
  ]);
};
