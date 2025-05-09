import type { TTransactionDraftBuilder } from '../../types';
import TransactionDraft from '../builder';

const empty = (): TTransactionDraftBuilder =>
  TransactionDraft()
    .interactionId(undefined)
    .state(undefined)
    .timestamp(undefined)
    .custom(undefined);

export default empty;
