import type { TQuoteDraftBuilder } from '../../types';
import QuoteDraft from '../builder';

const empty = (): TQuoteDraftBuilder =>
  QuoteDraft()
    .key(undefined)
    .stagedQuoteStateToSent(undefined)
    .state(undefined)
    .custom(undefined);

export default empty;
