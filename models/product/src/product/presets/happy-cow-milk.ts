import { Reference } from '@commercetools-test-data/commons';
import { ProductType } from '@commercetools-test-data/product-type';
import * as ProductCatalogData from '../../product-catalog-data';
import Product from '../builder';
import { TProductBuilder } from '../types';

const happyCowMilk = (): TProductBuilder =>
  Product()
    .productType(
      Reference.presets.productTypeReference().obj(ProductType.presets.milk())
    )
    .key('happy-cow-milk-key')
    .masterData(ProductCatalogData.presets.happyCowMilkProductCatalogData());

export default happyCowMilk;
