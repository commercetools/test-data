import { LocalizedString } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  ProductVariantGraphql,
  ProductVariantRest,
} from '../../product-variant';
import { RestModelBuilder, GraphqlModelBuilder } from '../builder';
import type { TProductDataGraphql, TProductDataRest } from '../types';

export const restPreset = (): TBuilder<TProductDataRest> => {
  const productName = LocalizedString.presets
    .empty()
    .en('Boring Generic Milk')
    .de('Langweilige generische Milch');
  const productDescription = LocalizedString.presets
    .empty()
    .en('Very average milk produced by a very average cow!')
    .de('Sehr durchschnittliche Milch von einer sehr durchschnittlichen Kuh!');
  const slug = LocalizedString.presets.empty().en('boring-generic-milk-slug');

  return RestModelBuilder()
    .name(productName)
    .description(productDescription)
    .metaTitle(productName)
    .metaDescription(productDescription)
    .slug(slug)
    .masterVariant(ProductVariantRest.presets.boringGenericMilkMasterVariant());
};

export const graphqlPreset = (): TBuilder<TProductDataGraphql> => {
  const productName = LocalizedString.presets
    .empty()
    .en('Boring Generic Milk')
    .de('Langweilige generische Milch');
  const productDescription = LocalizedString.presets
    .empty()
    .en('Very average milk produced by a very average cow!')
    .de('Sehr durchschnittliche Milch von einer sehr durchschnittlichen Kuh!');
  const slug = LocalizedString.presets.empty().en('boring-generic-milk-slug');

  return GraphqlModelBuilder()
    .nameAllLocales(productName)
    .descriptionAllLocales(productDescription)
    .metaTitleAllLocales(productName)
    .metaDescriptionAllLocales(productDescription)
    .slugAllLocales(slug)
    .masterVariant(
      ProductVariantGraphql.presets.boringGenericMilkMasterVariant()
    );
};
