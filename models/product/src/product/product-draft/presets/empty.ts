import type { TProductDraftBuilder } from '../../types';
import ProductDraft from '../builder';

const empty = (): TProductDraftBuilder =>
  ProductDraft()
    .key(undefined)
    .description(undefined)
    .categories(undefined)
    .categoryOrderHints(undefined)
    .metaTitle(undefined)
    .metaDescription(undefined)
    .metaKeywords(undefined)
    .masterVariant(undefined)
    .variants(undefined)
    .taxCategory(undefined)
    .state(undefined)
    .priceMode(undefined)
    .searchKeywords(undefined)
    .publish(undefined);

export default empty;
