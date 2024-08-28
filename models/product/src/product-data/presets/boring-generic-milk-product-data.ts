import { LocalizedString } from '@commercetools-test-data/commons';
import * as ProductVariant from '../../product-variant';
import ProductData from '../builder';
import type { TProductDataBuilder } from '../types';

const boringGenericMilkProductData = (): TProductDataBuilder => {
  const productName = LocalizedString.presets
    .empty()
    .en('Boring Generic Milk')
    .de('Langweilige generische Milch');

  const productDescription = LocalizedString.presets
    .empty()
    .en('Very average milk produced by a very average cow!')
    .de('Sehr durchschnittliche Milch von einer sehr durchschnittlichen Kuh!');

  const slug = LocalizedString.presets.empty().en('boring-generic-milk-slug');

  return ProductData()
    .name(productName)
    .description(productDescription)
    .metaTitle(productName)
    .metaDescription(productDescription)
    .slug(slug)
    .masterVariant(ProductVariant.presets.boringGenericMilkMasterVariant());
};

export default boringGenericMilkProductData;
