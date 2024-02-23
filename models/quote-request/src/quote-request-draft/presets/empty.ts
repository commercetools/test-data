import type { TQuoteRequestDraftBuilder } from '../../types';
import QuoteRequestDraft from '../builder';

const empty = (): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft()
    .key(undefined)
    .comment(undefined)
    .state(undefined)
    .purchaseOrderNumber(undefined)
    .custom(undefined);

export default empty;
