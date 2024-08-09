import * as Attribute from '../../attribute';
import ProductVariant from '../builder';
import { TProductVariantBuilder } from '../types';

const boringGenericMilkMasterVariant = (): TProductVariantBuilder =>
  ProductVariant()
    .key('boring-generic-milk-master-variant-key')
    .sku('boring-generic-milk-master-variant-sku')
    .attributes([Attribute.random().name('cow-name').value('unknown')])
    .id(1);

export default boringGenericMilkMasterVariant;
