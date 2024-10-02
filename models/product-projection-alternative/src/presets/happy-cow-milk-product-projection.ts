import {
  LocalizedField,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { ProductVariant } from '@commercetools-test-data/product';
import { ProductType } from '@commercetools-test-data/product-type';
import { ProductProjectionGraphql, ProductProjectionRest } from '..';
import { TProductProjectionGraphql, TProductProjectionRest } from '../types';

// TODO: This should be moved to commons package
const createLocalizedFields = (params: [string, string][]) => {
  return params.map(([locale, value]) =>
    LocalizedField.random().locale(locale).value(value)
  );
};

export const happyCowMilkRest = (): TBuilder<TProductProjectionRest> => {
  const productName = LocalizedString.presets
    .empty()
    .en('Happy Cow Milk')
    .de('Fröhliche Kuhmilch');

  const productDescription = LocalizedString.presets
    .empty()
    .en('Very happy milk produced by very happy cow!')
    .de('Sehr glückliche Milch von sehr glücklicher Kuh!');

  const slug = LocalizedString.presets.empty().en('happy-cow-milk-slug');

  return ProductProjectionRest.random()
    .productType(ProductType.presets.milk())
    .slug(slug)
    .key('happy-cow-milk-key')
    .name(productName)
    .description(productDescription)
    .metaTitle(productName)
    .metaDescription(productDescription)
    .masterVariant(ProductVariant.presets.happyCowMilkMasterVariant())
    .published(true)
    .hasStagedChanges(false);
};

export const happyCowMilkGraphql = (): TBuilder<TProductProjectionGraphql> => {
  return (
    ProductProjectionGraphql.random()
      .productType(ProductType.presets.milk())
      .slug('happy-cow-milk-slug')
      .slugAllLocales(
        createLocalizedFields([
          ['en', 'happy-cow-milk-slug'],
          ['de', 'glückliche-kuhmilch-slug'],
        ])
      )
      .key('happy-cow-milk-key')
      // .name('Happy Cow Milk')
      .nameAllLocales(
        createLocalizedFields([
          ['en', 'Happy Cow Milk'],
          ['de', 'Fröhliche Kuhmilch'],
        ])
      )
      // .description('Very happy milk produced by very happy cow!')
      .descriptionAllLocales(
        createLocalizedFields([
          ['en', 'Very happy milk produced by very happy cow!'],
          ['de', 'Sehr glückliche Milch von sehr glücklicher Kuh!'],
        ])
      )
      .masterVariant(ProductVariant.presets.happyCowMilkMasterVariant())
      .published(true)
      .hasStagedChanges(false)
  );
};

export default {
  rest: happyCowMilkRest,
  graphql: happyCowMilkGraphql,
};
