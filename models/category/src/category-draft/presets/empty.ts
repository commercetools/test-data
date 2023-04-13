import type { TCategoryDraftBuilder } from '../../types';
import Category from '../builder';

const empty = (): TCategoryDraftBuilder =>
  Category()
    .key(undefined)
    .externalId(undefined)
    .description(undefined)
    .parent(undefined)
    .orderHint(undefined)
    .metaTitle(undefined)
    .metaDescription(undefined)
    .metaKeywords(undefined)
    .assets(undefined)
    .custom(undefined);

export default empty;
