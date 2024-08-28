import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { ProductVariant } from '@commercetools-test-data/product';
import { ProductType } from '@commercetools-test-data/product-type';
import ProductProjection from '../builder';

const happyCowMilk = () => {
  const productName = LocalizedString.presets
    .empty()
    .en('Happy Cow Milk')
    .de('Fröhliche Kuhmilch');

  const productDescription = LocalizedString.presets
    .empty()
    .en('Very happy milk produced by very happy cow!')
    .de('Sehr glückliche Milch von sehr glücklicher Kuh!');

  const slug = LocalizedString.presets.empty().en('happy-cow-milk-slug');

  return ProductProjection()
    .productType(
      Reference.presets.productTypeReference().obj(ProductType.presets.milk())
    )
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

export default happyCowMilk;
