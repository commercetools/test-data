import * as ProductData from '../../product-data';
import ProductCatalogData from '../builder';

const happyCowMilkProductCatalogData = () => {
  const productData = ProductData.presets.happyCowMilkProductData();

  return ProductCatalogData()
    .staged(productData)
    .current(productData)
    .published(true)
    .hasStagedChanges(false);
};

export default happyCowMilkProductCatalogData;
