import ProductVariant from '../builder';
import { TProductVariantBuilder } from '../types';

const happyCowMilkMasterVariant = (): TProductVariantBuilder =>
  ProductVariant()
    .key('happy-cow-master-variant-key')
    .sku('happy-cow-master-variant-sku')
    .attributes([
      {
        name: 'cow-name',
        value: 'Buryonka',
      },
      {
        name: 'lactose-free',
        value: false,
      },
    ])
    .id(1);

export default happyCowMilkMasterVariant;
