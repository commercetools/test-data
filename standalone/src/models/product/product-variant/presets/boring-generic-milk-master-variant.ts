import { ProductVariant, ProductVariantGraphql, ProductVariantRest } from '..';
import { Attribute } from '../..';
import { TBuilder } from '../../../../core';
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
    .key('boring-generic-milk-master-variant-key')
    .sku('boring-generic-milk-master-variant-sku');
};

export const restPreset = (): TBuilder<TProductVariantRest> => {
  return populatePreset(ProductVariantRest.random()).attributes([
    Attribute.random().name('cow-name').value('unknown'),
  ]);
};

export const graphqlPreset = (): TBuilder<TProductVariantGraphql> => {
  return populatePreset(ProductVariantGraphql.random()).attributesRaw([
    Attribute.random().name('cow-name').value('unknown'),
  ]);
};

export const compatPreset = (): TBuilder<TProductVariant> => {
  return populatePreset(ProductVariant.random()).attributes([
    Attribute.random().name('cow-name').value('unknown'),
  ]);
};
