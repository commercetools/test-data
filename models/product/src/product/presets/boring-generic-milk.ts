import { ProductType } from '@commercetools-test-data/product-type';
import * as ProductCatalogData from '../../product-catalog-data';
import Product from '../builder';
import { TProductBuilder } from '../types';

const boringGenericMilk = (): TProductBuilder =>
  Product()
    .productType(ProductType.presets.milk())
    .key('boring-generic-milk-key')
    .masterData(
      ProductCatalogData.presets.boringGenericMilkProductCatalogData()
    );

export default boringGenericMilk;
