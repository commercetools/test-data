import { TProductVariantDraftBuilder } from '../../types';
import ProductVariantDraft from '../builder';

const empty = (): TProductVariantDraftBuilder =>
  ProductVariantDraft()
    .key(undefined)
    .sku(undefined)
    .prices(undefined)
    .attributes(undefined)
    .images(undefined)
    .assets(undefined);

export default empty;
