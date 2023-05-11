import type { TTaxCategoryDraftBuilder } from '../../types';
import TaxCategoryDraft from '../builder';

const empty = (): TTaxCategoryDraftBuilder =>
  TaxCategoryDraft().key(undefined).description(undefined).rates(undefined);

export default empty;
