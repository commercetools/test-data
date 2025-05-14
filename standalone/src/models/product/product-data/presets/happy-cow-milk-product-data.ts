import type { TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import {
  ProductVariantRest,
  ProductVariantGraphql,
  ProductVariant,
} from '../../product-variant';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatProductModelBuilder,
} from '../builders';
import type {
  TProductData,
  TProductDataGraphql,
  TProductDataRest,
} from '../types';

export const restPreset = (): TBuilder<TProductDataRest> => {
  const productName = LocalizedString.presets
    .empty()
    .en('Happy Cow Milk')
    .de('Fröhliche Kuhmilch');
  const productDescription = LocalizedString.presets
    .empty()
    .en('Very happy milk produced by very happy cow!')
    .de('Sehr glückliche Milch von sehr glücklicher Kuh!');
  const slug = LocalizedString.presets.empty().en('happy-cow-milk-slug');

  return RestModelBuilder()
    .name(productName)
    .description(productDescription)
    .metaTitle(productName)
    .metaDescription(productDescription)
    .slug(slug)
    .masterVariant(ProductVariantRest.presets.happyCowMilkMasterVariant());
};

export const graphqlPreset = (): TBuilder<TProductDataGraphql> => {
  const productName = LocalizedString.presets
    .empty()
    .en('Happy Cow Milk')
    .de('Fröhliche Kuhmilch');
  const productDescription = LocalizedString.presets
    .empty()
    .en('Very happy milk produced by very happy cow!')
    .de('Sehr glückliche Milch von sehr glücklicher Kuh!');
  const slug = LocalizedString.presets.empty().en('happy-cow-milk-slug');

  return GraphqlModelBuilder()
    .nameAllLocales(productName)
    .descriptionAllLocales(productDescription)
    .metaTitleAllLocales(productName)
    .metaDescriptionAllLocales(productDescription)
    .slugAllLocales(slug)
    .masterVariant(ProductVariantGraphql.presets.happyCowMilkMasterVariant());
};

export const compatPreset = (): TBuilder<TProductData> => {
  const productName = LocalizedString.presets
    .empty()
    .en('Happy Cow Milk')
    .de('Fröhliche Kuhmilch');
  const productDescription = LocalizedString.presets
    .empty()
    .en('Very happy milk produced by very happy cow!')
    .de('Sehr glückliche Milch von sehr glücklicher Kuh!');
  const slug = LocalizedString.presets.empty().en('happy-cow-milk-slug');

  return CompatProductModelBuilder()
    .name(productName)
    .description(productDescription)
    .metaTitle(productName)
    .metaDescription(productDescription)
    .slug(slug)
    .masterVariant(ProductVariant.presets.happyCowMilkMasterVariant());
};
