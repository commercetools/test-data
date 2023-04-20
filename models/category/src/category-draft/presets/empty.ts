import type { TCategoryDraftBuilder } from '../../types';
import CategoryDraft from '../builder';

const empty = (): TCategoryDraftBuilder =>
  CategoryDraft()
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
