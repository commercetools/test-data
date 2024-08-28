import * as Attribute from '../../attribute';
import ProductVariant from '../builder';
import type { TProductVariantBuilder } from '../types';

const happyCowMilkMasterVariant = (): TProductVariantBuilder =>
  ProductVariant()
    .key('happy-cow-master-variant-key')
    .sku('happy-cow-master-variant-sku')
    .attributes([
      Attribute.random().name('cow-name').value('Buryonka'),
      Attribute.random().name('lactose-free').value(false),
    ])
    .id(1);

export default happyCowMilkMasterVariant;
