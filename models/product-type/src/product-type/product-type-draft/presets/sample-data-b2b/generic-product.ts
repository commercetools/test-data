import type { TProductTypeDraftBuilder } from '../../../types';
import * as ProductTypeDraft from '../../index';

const genericProduct = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('generic-product')
    .name('Generic Product')
    .description('Products without specific attributes')
    .attributes([]);

export default genericProduct;
