import { LocalizedString } from '@commercetools-test-data/commons';
import * as ProductVariant from '../../product-variant';
import ProductData from '../builder';
import { TProductDataBuilder } from '../types';

const happyCowMilkProductData = (): TProductDataBuilder => {
  const productName = LocalizedString.presets
    .empty()
    .en('Happy Cow Milk')
    .de('Fröhliche Kuhmilch');

  const productDescription = LocalizedString.presets
    .empty()
    .en('Very happy milk produced by very happy cow!')
    .de('Sehr glückliche Milch von sehr glücklicher Kuh!');

  const slug = LocalizedString.presets.empty().en('happy-cow-milk-slug');

  return ProductData()
    .name(productName)
    .description(productDescription)
    .metaTitle(productName)
    .metaDescription(productDescription)
    .slug(slug)
    .masterVariant(ProductVariant.presets.happyCowMilkMasterVariant());
};

export default happyCowMilkProductData;
