import type { TQuoteRequestDraftBuilder } from '../../types';
import QuoteRequestDraft from '../builder';

const empty = (): TQuoteRequestDraftBuilder =>
  QuoteRequestDraft()
    .comment(undefined)
    .state(undefined)
    .purchaseOrderNumber(undefined)
    .custom(undefined);

export default empty;
