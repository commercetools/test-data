import type { TProductSelectionDraftBuilder } from '../../types';
import ProductSelectionDraft from '../builder';

const empty = (): TProductSelectionDraftBuilder =>
  ProductSelectionDraft().key(undefined).mode(undefined).custom(undefined);

export default empty;
