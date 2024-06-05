import * as ProductData from '../../product-data';
import ProductCatalogData from '../builder';
import { TProductCatalogDataBuilder } from '../types';

const boringGenericMilkProductCatalogData = (): TProductCatalogDataBuilder => {
  const productData = ProductData.presets.boringGenericMilkProductData();

  return ProductCatalogData()
    .staged(productData)
    .current(productData)
    .published(true)
    .hasStagedChanges(false);
};

export default boringGenericMilkProductCatalogData;
